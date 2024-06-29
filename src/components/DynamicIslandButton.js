/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const DynamicIslandButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(145deg, #6b21a8, #3b82f6);
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background: linear-gradient(145deg, #3b82f6, #6b21a8);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default DynamicIslandButton;
