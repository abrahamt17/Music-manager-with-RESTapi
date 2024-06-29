import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchSongs: (state) => {
      state.status = 'loading';
    },
    fetchSongsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addSong: (state) => {
      state.status = 'loading';
    },
    addSongSuccess: (state, action) => {
      state.songs.unshift(action.payload);  // Place the new song at the beginning
      state.status = 'succeeded';
    },
    addSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateSong: (state) => {
      state.status = 'loading';
    },
    updateSongSuccess: (state, action) => {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      state.songs[index] = action.payload;
      state.status = 'succeeded';
    },
    updateSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    deleteSong: (state) => {
      state.status = 'loading';
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.status = 'succeeded';
    },
    deleteSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
