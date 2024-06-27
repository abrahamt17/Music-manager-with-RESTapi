import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Placeholder for mock API

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addSong = createAsyncThunk('songs/addSong', async (newSong) => {
  const response = await axios.post(API_URL, newSong);
  return response.data;
});

export const updateSong = createAsyncThunk('songs/updateSong', async (updatedSong) => {
  const response = await axios.put(`${API_URL}/${updatedSong.id}`, updatedSong);
  return response.data;
});

export const deleteSong = createAsyncThunk('songs/deleteSong', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},


  // kindaa extra reducers to handle asynvcs
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = 'suceded';
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; 
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.songs.push(action.payload);
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        const index = state.songs.findIndex(song => song.id === action.payload.id);
        state.songs[index] = action.payload;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.songs = state.songs.filter(song => song.id !== action.payload);
      });
  },
});

export default songsSlice.reducer;
