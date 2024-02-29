import { StyledButtonPass } from './btnPass.styled';
import type { MouseEventHandler } from 'react';

interface PropsPassBtn {
  handleTogglePassword: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonPass({ handleTogglePassword }: PropsPassBtn) {
  return (
    <StyledButtonPass onClick={handleTogglePassword}>
      <img src="/login/Password.svg" width={24} height={24} alt="Email" />
    </StyledButtonPass>
  );
}

export default ButtonPass;
