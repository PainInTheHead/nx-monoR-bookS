import styled from "styled-components";
import { ThemeApp } from "../../themes/themeDefault";

export const StyledinputProfile = styled.div<{ theme: ThemeApp }>`
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 100%;
  width: 100%;
  padding: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  margin-bottom: 9px;
  box-sizing: border-box;

  .btn-close {
    cursor: pointer;
  }
  .inputForm {
    color: ${(props) => props.theme.colors.primaryDark};
    width: 100%;
    background: none;
    &:focus {
      outline: none;
      background: none;
    }
  }
  .inputForm::-webkit-input-placeholder {
    width: 100%;
    color: #b9bac3;
  }

  .img-inputform {
    margin-right: 10px;
  }
  &.error-wrapper {
    border: 2px solid #ed2e7e;
    color: #ed2e7e;
    background-color: #fff2f7;
  }

  .hidden {
    width: 100%;

    opacity: 0;
  }

  .valid {
    width: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    top: 105%;
    left: 0;
    color: #ed2e7e;
  }
`;
