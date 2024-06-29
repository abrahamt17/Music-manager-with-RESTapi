/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../songsSlice';

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

const SongButton = styled.button`
  margin-left: 8px;
  color: ${({ color }) => color || 'white'};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#10b981'};
  }
`;

const SeeMoreButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background: linear-gradient(to right, #3b82f6, #ef4444);
  color: white;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #111827;
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

  const handleEditClick = (id, currentTitle) => {
    setEditingId(id);
    setNewTitle(currentTitle);
  };

  const displayedSongs = showAll ? songs : songs.slice(0, 15);

  return (
    <ListContainer>
      <ul css={css`list-style: none; padding: 0; margin: 0;`}>
        {displayedSongs.map((song) => (
          <SongItem key={song.id}>
            {editingId === song.id ? (
              <SongInput
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={() => handleUpdate(song.id)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleUpdate(song.id);
                  }
                }}
              />
            ) : (
              <span css={css`flex: 1;`}>{song.title}</span>
            )}
            <SongButton onClick={() => handleDelete(song.id)} color="#ef4444" hoverColor="#f87171">
              Delete
            </SongButton>
            {editingId === song.id ? null : (
              <SongButton onClick={() => handleEditClick(song.id, song.title)} color="#fbbf24" hoverColor="#fcd34d">
                Edit
              </SongButton>
            )}
          </SongItem>
        ))}
      </ul>
      {songs.length > 15 && (
        <SeeMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'See More'}
        </SeeMoreButton>
      )}
    </ListContainer>
  );
};

export default SongList;
