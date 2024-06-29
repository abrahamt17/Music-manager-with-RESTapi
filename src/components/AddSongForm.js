import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addSong } from '../songsSlice';
import DynamicIslandButton from './DynamicIslandButton';

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const SongInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  flex-grow: 1;
`;

const AddSongForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ title }));
    setTitle('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <SongInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter song title"
        />
        <DynamicIslandButton type="submit">Add Song</DynamicIslandButton>
      </form>
    </FormContainer>
  );
};

export default AddSongForm;
