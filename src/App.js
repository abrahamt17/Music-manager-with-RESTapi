/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from './songsSlice';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #6b21a8, #111827, #6b21a8);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;


const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const songStatus = useSelector((state) => state.songs.status);

  useEffect(() => {
    if (songStatus === 'idle') {
      dispatch(fetchSongs());
    }
  }, [songStatus, dispatch]);

  return (
    <AppContainer>
      <Title>Song Manager</Title>
      <div css={css`width: 100%; max-width: 32rem;`}>
        <AddSongForm />
        <SongList songs={songs} />
      </div>
    </AppContainer>
  );
};

export default App;
