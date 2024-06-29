// songsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [], // Ensure this is an array
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    deleteSong: (state, action) => {
      return state.filter(song => song.id !== action.payload);
    },
    updateSong: (state, action) => {
      const songIndex = state.findIndex(song => song.id === action.payload.id);
      if (songIndex !== -1) {
        state[songIndex].title = action.payload.title;
      }
    }
  }
});

export const { addSong, deleteSong, updateSong } = songsSlice.actions;
export default songsSlice.reducer;
