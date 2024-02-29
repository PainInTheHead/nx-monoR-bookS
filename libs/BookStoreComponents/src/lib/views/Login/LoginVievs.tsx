import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LoginVievsProps {}

const StyledLoginVievs = styled.div`
  color: pink;
`;

export function LoginVievs(props: LoginVievsProps) {
  return (
    <StyledLoginVievs>
      <h1>Welcome to LoginVievs!</h1>
    </StyledLoginVievs>
  );
}

export default LoginVievs;
