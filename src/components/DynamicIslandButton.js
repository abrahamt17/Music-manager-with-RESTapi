import styled from '@emotion/styled';

const DynamicIslandButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, #5e42a6 0%, #b242ff 100%);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: linear-gradient(90deg, #5e42a6 0%, #b242ff 100%);
    box-shadow: 0 4px 20px rgba(178, 66, 255, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #93c5fd;
  }
`;

export default DynamicIslandButton;
