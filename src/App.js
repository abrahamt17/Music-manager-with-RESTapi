import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from './songsSlice';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';

const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);
  const songStatus = useSelector(state => state.songs.status);

  useEffect(() => {
    if (songStatus === 'idle') {
      dispatch(fetchSongs());
    }
  }, [songStatus, dispatch]);

  return (
    <div className="App min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Song Manager</h1>
      <AddSongForm />
      <SongList songs={songs} />
    </div>
  );
};

export default App;
