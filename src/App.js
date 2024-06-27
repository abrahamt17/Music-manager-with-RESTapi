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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-500 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-10">Song Manager</h1>
      <div className="w-full max-w-2xl">
        <AddSongForm />
        <SongList songs={songs} />
      </div>
    </div>
  );
};

export default App;
