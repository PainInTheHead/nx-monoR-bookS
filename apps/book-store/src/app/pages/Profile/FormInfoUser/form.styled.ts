import styled from "styled-components";

export const StyledFormChange = styled.div`
  width: 522px;
color:#344966;
  input:focus {
    outline: none;
color:#344966;
    
  }
  .pers-info-header {
    display: flex;
    justify-content: space-between;
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
    width: 170px;
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
  }
  .conteiner {
    width: 522px;
  }
`;
