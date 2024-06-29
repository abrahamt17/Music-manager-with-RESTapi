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
      <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-gradient-to-tr from-light-blue-600 to-light-blue-400 text-white shadow-md shadow-light-blue-500/20 hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      type="button">
      Sign in with Twitter
      <span class="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-blue-600 group-hover:bg-light-blue-700">
       
      </span>
      </button>
          {/* <button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">Add song</button> */}
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