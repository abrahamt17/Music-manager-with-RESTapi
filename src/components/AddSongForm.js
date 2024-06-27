import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../songsSlice';
import './style.css';
const AddSongForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ title }));
    setTitle('');
  };

 
  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl shadow-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song title"
        className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
          <button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">Add song</button>
    </form>
  );
};

export default AddSongForm;


//  animation 
//  className='z-0 inset-0 absolute scale-x-[2.0] blur before:absolute before:inset-0 
//       before:top-1/2 before:aspect-square before:animate-none 
//       before:bg-gradient-conic before:from-purple-700 
//       before:via-red-500 before:to-amber-400 '

//  button
// className="w-full py-3 bg-gradient-to-t from-neutral-800 text-neutral-300 hover:bg-purple-700 rounded-lg text-white font-semibold"