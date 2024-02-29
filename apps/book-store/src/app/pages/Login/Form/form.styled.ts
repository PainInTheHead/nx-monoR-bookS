import styled from "styled-components";

export const StyledLogInForm = styled.div`
  display: flex;
  flex-direction: column;

  .hidden {
    opacity: 0;
  }

  .login-form {

    .label {
      color: #344966;
    }
  }

  .h1-login-form {
    margin-bottom: 60px;
    font-size: 40px;
  }

  .email {
    position: relative;
    margin-bottom: 50px;
  }

  .password {
    position: relative;
    margin-bottom: 60px;
  }

  .btn-form {
    cursor: pointer;
    width: 151px;
    height: 44px;
    border-radius: 16px;
    background-color: #344966;
    color: #f0f4ef;
    text-align: center;
  }

  .btn-close {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 2px;
    background: none;
  }
  
`;
