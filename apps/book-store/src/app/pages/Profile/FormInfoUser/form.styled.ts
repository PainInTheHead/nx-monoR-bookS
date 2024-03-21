import styled from "styled-components";

export const StyledFormChange = styled.div`
  max-width: 522px;
  width: 100%;
  color: #344966;
  input:focus {
    outline: none;
    color: #344966;
  }
  .pers-info-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap:10px;
    /* align-items:end; */
    margin-bottom: 30px;
    .ChangeInformation {
      cursor: pointer;
      color: #8d9f4f;
      font-size: 14px;
      background: none;
      text-decoration: underline;
    }
  }
  .label-pass {
    font-size: 14px;
    color: #344966;
  }
  .user-name {
    display: flex;
    align-items: center;
    background-color: #f0f4ef;
    border-radius: 16px;
    height: 64px;
    padding: 0 15px;
    color: #344966;
    margin-bottom: 20px;
    .icon-username {
      margin-right: 15px;
    }
    .wrapper-name-input {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .nameHolder {
      font-size: 14px;
    }
    .input-name {
      font-size: 16px;
      color: #344966;
      background: none;
    }
  }

  h1 {
    font-size: 20px;
  }

  .btn-confirm {
    border-radius: 16px;
    max-width: 170px;
    width: 100%;
    height: 44px;
    color: #f0f4ef;
    margin-top: 30px;
    font-size: 16px;
    background: #344966;
    text-align: center;
    cursor: pointer;
  }
  .password {
    position: relative;
    margin-bottom: 30px;
    width: 100%;
  }
  .conteiner {
    max-width: 522px;
  }

  @media (max-width: 662px) {
    max-width: 100%;
    .conteiner {
      max-width: 100%;
    }
  }
`;
