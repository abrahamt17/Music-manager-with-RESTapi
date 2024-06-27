import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../songsSlice';

const SongList = ({ songs }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

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

  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}>
          {editingId === song.id ? (
            <input
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
            <span>
              {song.title}
            </span>
          )}
          <button onClick={() => handleDelete(song.id)}>Delete</button>
          {editingId === song.id ? null : (
            <button onClick={() => handleEditClick(song.id, song.title)}>Edit</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SongList;
