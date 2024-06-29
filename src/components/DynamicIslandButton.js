import styled from '@emotion/styled';

const DynamicIslandButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #93c5fd;
  }
`;

export default DynamicIslandButton;
