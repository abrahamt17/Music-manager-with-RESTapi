import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../songsSlice';

const updateSong = ({ songs }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleUpdate = (id) => {
    dispatch(updateSong(id));
  };

  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}  onClick={() => handleUpdate(song.id)}  >
          {song.title }

          <button onClick={() => handleUpdate(song.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default updateSong;





