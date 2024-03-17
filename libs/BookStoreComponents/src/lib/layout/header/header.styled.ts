import styled from 'styled-components';

export const HeaderMain = styled.header`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 1280px;
  height: 65px;
  button {
    cursor: pointer;
    background: none;
  }
  .search-section {
    z-index: 1000;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    .search-container {
      display: flex;
      align-items: center;
      font-size: 16px;
      .input-con-search-container {
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-radius: 15px;
        margin-left: 30px;
        background-color: #f0f4ef;
        width: 630px;
        height: 64px;
        .btn-input {
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          margin-right: 15px;
        }
        .input {
          background-color: #f0f4ef;
          width: 100%;
        }
        .input::-webkit-input-placeholder {
          color: #b9bac3;
        }
        .input:focus {
          outline: none;
        }
      }
    }
    .btn-login-con {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 231px;
      height: 44px;
      background-color: #344966;
      border-radius: 16px;
      .btn-login {
        color: #f0f4ef;
        background: none;
      }
    }
  }

  .user-buttons {
    display: flex;

    width: 198px;
    height: 48px;
    buttons {
      cursor: pointer;
    }
    & > button {
      position: relative;
      height: 48px;
      width: 48px;
      background: #344966;
      padding: auto;
      border-radius: 50%;
      .cart-img {
        position: absolute;
        top: 50%;
        left: 48%;
        transform: translate(-50%, -50%);
      }
      .favorites_img {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .user_img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    & > button:not(:last-child) {
      margin-right: 27px;
    }
  }
  .cart-img-count {
    width: 23px;
    height: 23px;
    color: #344966;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: 90%;
    transform: translate(-50%, -50%);
    background-color: #bfcc94;
  }
`;
