import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import AddSongForm from './components/AddSongForm';
import SongList from './components/SongList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './songsSlice';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1a202c;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function App() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  console.log(songs); // Check the state

  return (
    <AppContainer>
      <h1>Song Manager</h1>
      <AddSongForm />
      <SongList songs={songs} />
    </AppContainer>
  );
}

export default App;
