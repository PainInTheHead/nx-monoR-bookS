import styled from 'styled-components';

interface StyledCustomButtonProps {
  backgroundColor: string;
  maxWidth?: string; // Сделаем maxWidth необязательным
}

export const StyledCustomButton = styled.button<StyledCustomButtonProps>`
  cursor: pointer;
  width: 100%;
  height: 44px;
  border-radius: 16px;
  background-color: ${(props) =>
    props.backgroundColor === 'none' ? 'white' : '#344966'};
  color: ${(props) => (props.backgroundColor === 'none' ? 'black' : '#f0f4ef')};
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  max-width: ${(props) => props.maxWidth};
  border: ${(props) =>
    props.backgroundColor === 'none' ? '1px solid #0d1821' : 'none'};
  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === 'none' ? 'gray' : '#0d1821'};
    transition: background-color 0.5s ease;
  }
  &:focus {
    box-shadow: 0 0 0 8px rgba(214, 216, 231, 1);
    transition: box-shadow 0.3s ease;
  }
`;
