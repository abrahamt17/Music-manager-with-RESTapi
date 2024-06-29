/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../songsSlice';
import DynamicIslandButton from './DynamicIslandButton';

const ListContainer = styled.div`
  margin-top: 16px;
`;

const SongItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: linear-gradient(to bottom right, #374151, #111827);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SongInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 16px;
  border-radius: 0.5rem;
  background-color: #374151;
  color: white;
  outline: none;
  border: none;

  &:focus {
    box-shadow: 0 0 0 2px #9333ea;
  }
`;

const SongList = ({ songs }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateSong({ id, title: newTitle }));
    setEditingId(null);
  };

  const handleEditClick = (id, title) => {
    setEditingId(id);
    setNewTitle(title);
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
                <DynamicIslandButton onClick={() => handleUpdate(song.id)}>Save</DynamicIslandButton>
              </>
            ) : (
              <>
                <span>{song.title}</span>
                <DynamicIslandButton onClick={() => handleEditClick(song.id, song.title)}>Edit</DynamicIslandButton>
              </>
            )}
            <DynamicIslandButton onClick={() => handleDelete(song.id)}>Delete</DynamicIslandButton>
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
