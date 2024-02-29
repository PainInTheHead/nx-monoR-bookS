import styled from "styled-components";

export const StyledinputProfile = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  /* width: ; */
  padding: 22px;
  background-color: #f0f4ef;
  border-radius: 16px;
  margin-bottom: 9px;

  .btn-close {
    cursor: pointer;
  }
  .inputForm {
    color: #344966;

    width: 100%;
    background: none;
    &:focus {
      outline: none; // Убираем стандартную обводку при фокусе
      background: none;
    }
  }
  .inputForm::-webkit-input-placeholder {
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
    opacity: 0;
  }

  .valid {
    opacity: 1;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    top: 105%;
    left: 0;
    color: #ed2e7e;
  }
`;
