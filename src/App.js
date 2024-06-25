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
    <div className="App">
      <h1>Song Manager</h1>
      <AddSongForm />
      <SongList songs={songs} />
    </div>
  );
};

export default App;


