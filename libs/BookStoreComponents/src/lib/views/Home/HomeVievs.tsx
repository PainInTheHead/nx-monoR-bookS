import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeVievsProps {}

const StyledHomeVievs = styled.div`
  color: pink;
`;

export function HomeVievs(props: HomeVievsProps) {
  return (
    <StyledHomeVievs>
      <h1>Welcome to HomeVievs!</h1>
    </StyledHomeVievs>
  );
}

export default HomeVievs;
