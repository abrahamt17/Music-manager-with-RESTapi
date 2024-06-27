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
    <ul className="space-y-4">
      {songs.map(song => (
        <li key={song.id} className="p-4 bg-white bg-opacity-20 rounded-md shadow-md backdrop-blur-md">
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
              className="p-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ) : (
            <span className="text-xl">{song.title}</span>
          )}
          <button
            onClick={() => handleDelete(song.id)}
            className="ml-4 px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Delete
          </button>
          {editingId === song.id ? null : (
            <button
              onClick={() => handleEditClick(song.id, song.title)}
              className="ml-2 px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-700 transition duration-300 ease-in-out"
            >
              Edit
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SongList;
