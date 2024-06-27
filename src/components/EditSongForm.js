// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteSong, updateSong } from '../songsSlice';

// const updateSong = ({ songs }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');

//   const handleUpdate = (id) => {
//     dispatch(updateSong(id));
//   };

//   return (
//     <ul>
//       {songs.map(song => (
//         <li key={song.id}  onClick={() => handleUpdate(song.id)}  >
//           {song.title }

//           {/* <button onClick={() => handleUpdate(song.id)}>Edit</button> */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default updateSong;


//tabnine

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteSong, updateSong } from '../songsSlice';

// const SongList = ({ songs }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [editedId, setEditedId] = useState(null);

//   const handleUpdate = (id) => {
//     dispatch(updateSong(id, title));
//     setEditMode(false);
//   };

//   const handleEdit = (id) => {
//     setTitle(songs.find(song => song.id === id).title);
//     setEditedId(id);
//     setEditMode(true);
//   };

//   return (
//     <ul>
//       {songs.map(song => (
//         <li key={song.id}>
//           {editMode && editedId === song.id ? (
//             <input
//               type="text"
//               value={title}
//               onChange={e => setTitle(e.target.value)}
//               onBlur={() => handleUpdate(song.id)}
//             />
//           ) : (
//             <>
//               {song.title}
//               <button onClick={() => handleEdit(song.id)}>Edit</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SongList;




// //gpt

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteSong, updateSong } from '../songsSlice';

// const SongList = ({ songs }) => {
//   const dispatch = useDispatch();
//   const [editingId, setEditingId] = useState(null);
//   const [newTitle, setNewTitle] = useState('');

//   const handleUpdate = (id) => {
//     dispatch(updateSong({ id, title: newTitle }));
//     setEditingId(null);
//   };

//   return (
//     <ul>
//       {songs.map(song => (
//         <li key={song.id}>
//           {editingId === song.id ? (
//             <>
//               <input 
//                 type="text" 
//                 value={newTitle} 
//                 onChange={(e) => setNewTitle(e.target.value)} 
//               />
//               <button onClick={() => handleUpdate(song.id)}>Save</button>
//             </>
//           ) : (
//             <>
//               {song.title}
//               <button onClick={() => {
//                 setEditingId(song.id); 
//                 setNewTitle(song.title); }}>Edit</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SongList;

