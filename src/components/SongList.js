import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../songsSlice';

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
    <div>
      <ul className="space-y-4">
        {displayedSongs.map((song) => (
          <li key={song.id} className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg">
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
                className="flex-1 p-2 mr-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            ) : (
              <span className="flex-1">{song.title}</span>
            )}
            <button onClick={() => handleDelete(song.id)} className="ml-2 text-red-400 hover:text-red-600">
              Delete
            </button>
            {editingId === song.id ? null : (
              <button onClick={() => handleEditClick(song.id, song.title)} className="ml-2 text-yellow-400 hover:text-yellow-600">
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
      {songs.length > 15 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10"
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default SongList;
