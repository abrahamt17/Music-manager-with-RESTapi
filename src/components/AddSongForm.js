import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../songsSlice';

const AddSongForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song title"
        className="p-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 rounded-md bg-pink-500 hover:bg-pink-700 transition duration-300 ease-in-out"
      >
        Add Song
      </button>
    </form>
  );
};

export default AddSongForm;
