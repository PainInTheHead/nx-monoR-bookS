import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BookStoreLibraryProps {}

const StyledBookStoreLibrary = styled.div`
  color: pink;
`;

export function BookStoreLibrary(props: BookStoreLibraryProps) {
  return (
    <StyledBookStoreLibrary>
      <h1>Welcome to BookStoreLibrary!</h1>
    </StyledBookStoreLibrary>
  );
}

export default BookStoreLibrary;
