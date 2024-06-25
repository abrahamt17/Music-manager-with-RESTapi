import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../songsSlice';

const SongList = ({ songs }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}>
          {song.title}
          <button onClick={() => handleDelete(song.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
