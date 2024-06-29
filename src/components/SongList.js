import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { updateSong, deleteSong } from '../songsSlice';
import DynamicIslandButton from './DynamicIslandButton';

const ListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2d3748;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SongItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #4a5568;

  > div {
    display: flex;
    gap: 10px;
  }
`;

const SongInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  flex-grow: 1;
`;

const SongList = ({ songs }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleEditClick = (id, title) => {
    setEditingId(id);
    setNewTitle(title);
  };

  const handleUpdate = (id) => {
    dispatch(updateSong({ id, title: newTitle }));
    setEditingId(null);
    setNewTitle('');
  };

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedSongs = showAll ? songs : songs.slice(0, 5);

  return (
    <ListContainer>
      <ul
        css={css`
          list-style: none;
          padding: 0;
          margin: 0;
        `}
      >
        {displayedSongs.map((song) => (
          <SongItem key={song.id}>
            {editingId === song.id ? (
              <>
                <SongInput
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <div>
                  <DynamicIslandButton onClick={() => handleUpdate(song.id)}>Save</DynamicIslandButton>
                  <DynamicIslandButton onClick={() => setEditingId(null)}>Cancel</DynamicIslandButton>
                </div>
              </>
            ) : (
              <>
                <span>{song.title}</span>
                <div>
                  <DynamicIslandButton onClick={() => handleEditClick(song.id, song.title)}>Edit</DynamicIslandButton>
                  <DynamicIslandButton onClick={() => handleDelete(song.id)}>Delete</DynamicIslandButton>
                </div>
              </>
            )}
          </SongItem>
        ))}
      </ul>
      {songs.length > 5 && (
        <DynamicIslandButton onClick={handleShowAll}>
          {showAll ? 'Show Less' : 'Show All'}
        </DynamicIslandButton>
      )}
    </ListContainer>
  );
};

export default SongList;
