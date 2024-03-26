import React from 'react';
import { StyledCustomButton } from './CustomButton.styled';

interface ButtonProps {
  color: string;
  width: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function CustomButton({
  color,
  width,
  text,
  onClick,
  type,
}: ButtonProps) {
  return (
    <StyledCustomButton
      className="btn-form"
      backgroundColor={!color ? 'none' : 'color'}
      maxWidth={width}
      onClick={onClick}
      type={type ? type : 'button'}
    >
      {text}
    </StyledCustomButton>
  );
}

export default CustomButton;
