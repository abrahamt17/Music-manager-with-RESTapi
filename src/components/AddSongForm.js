/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../songsSlice';

const FormContainer = styled.form`
  margin-bottom: 24px;
  padding: 24px;
  background: linear-gradient(to bottom right, #6b21a8, #1f1b24);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 0.5rem;
  background-color: #1f1b24;
  color: white;
  outline: none;
  border: none;

  &:focus {
    box-shadow: 0 0 0 2px #9333ea;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #3b82f6, #ef4444);
  color: white;
  padding: 12px 16px;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #111827;
  }
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
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song title"
      />
      <Button type="submit">Add Song</Button>
    </FormContainer>
  );
};

export default AddSongForm;
