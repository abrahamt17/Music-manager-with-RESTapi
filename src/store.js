import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songsSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export default store;
