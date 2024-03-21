import styled from "styled-components";

export const StyledRegInForm = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-width: 320px;
  width: 100%;
  .hidden {
    opacity: 0;
  }
  form {
    font-size: 16px;
    span {
      opacity: 1;
      position: absolute;
      transition: opacity 0.3s ease-in-out;
      top: 105%;
      left: 0;
      color: #ed2e7e;
    }
    label {
      color: #344966;
    }
  }
  .h1-login-form {
    margin-bottom: 60px;
    font-size: 40px;
  }
  input:focus {
    outline: none;
  }
  input {
    width: 100%;
  }
  .form-input {
    display: flex;
    height: 24px;
    width: 413px;
    padding: 22px;
    background-color: #f0f4ef;
    border-radius: 16px;
    margin-bottom: 9px;
    input {
      background: none;
    }
    input::-webkit-input-placeholder {
      color: #b9bac3;
    }
    img {
      margin-right: 10px;
    }
  }

  .btn-close {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 2px;
    background: none;
  }

  .error-wrapper {
    border: 2px solid #ed2e7e;
    color: #ed2e7e;
    background-color: #fff2f7;
  }

  .email {
    position: relative;
    margin-bottom: 50px;
  }
  .password {
    position: relative;
    margin-bottom: 40px;
  }
  .btn-form {
    margin-top: 30px;
    cursor: pointer;
    width: 151px;
    height: 44px;
    border-radius: 16px;
    background-color: #344966;
    color: #f0f4ef;
    text-align: center;
  }

  @media (max-width: 620px) {
    max-width: 100%;
    .h1-login-form {
      margin-bottom: 20px;
      font-size: 40px;
    }
  }
`;
