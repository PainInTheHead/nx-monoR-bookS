import styled from 'styled-components';

export const HeaderMain = styled.header`
  margin: 0 auto;

  margin-bottom: 40px;

  max-width: 1280px;
  height: 65px;
  button {
    cursor: pointer;
    background: none;
  }
  .logo {
    max-width: 88px;
    min-width: 62px;
    height: 46px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search-section {
    z-index: 1000;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    .search-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      min-width: 250px;
      max-width: 630px;
      flex-grow: 1;

      .input-con-search-container {
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-radius: 15px;
        background-color: #f0f4ef;
        width: 100%;
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
          flex: 1;
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
      min-width: 135px;
      width: 100%;
      max-width: 231px;
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

    max-width: 198px;
    height: 48px;
    buttons {
      cursor: pointer;
    }
    & > button {
      position: relative;
      height: auto;
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

  @media (max-width: 710px) {
    .search-section {
      gap: 20px;
    }
    .btn-login-con {
    }
  }
  @media (max-width: 605px) {
    .search-section {
    }
    .btn-login-con {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    height: 128px;
    .search-section {
      flex-wrap: wrap;
      .search-container {
        order: 1;
        flex-basis: 100%;
      }
      .btn-login-con {
        min-width: 100px;
        max-width: 50%;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 390px) {
    .search-section {
      flex-wrap: wrap;
      .search-container {
        order: 1;
        flex-basis: 100%;
      }
      .btn-login-con {
        min-width: 100px;
        max-width: 35%;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 407px) {
    .user-buttons {
      display: flex;
      align-items: center;
      max-width: 198px;
      height: 48px;
      buttons {
        cursor: pointer;
      }
      & > button {
        position: relative;
        height: auto;
        width: 35px;
        height: 35px;
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
        .icons {
          width: 20px;
        }

        .cart-img-count {
          display: flex;
          width: 18px;
          height: 18px;
          color: #344966;
          border-radius: 50%;
          position: absolute;
          top: 10%;
          left: 90%;
          transform: translate(-50%, -50%);
          background-color: #bfcc94;
          font-size: 10px;
          justify-content: center;
          align-items: center;
        }
      }

      & > button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  @media (max-width: 350px) {
     .search-section {
    gap: 10px;
     }
    .user-buttons {
      display: flex;
      align-items: center;
      max-width: 198px;
      height: 48px;
      buttons {
        cursor: pointer;
      }
      & > button {
        position: relative;
        height: auto;
        width: 35px;
        height: 35px;
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
        .icons {
          width: 20px;
        }

        .cart-img-count {
          display: flex;
          width: 18px;
          height: 18px;
          color: #344966;
          border-radius: 50%;
          position: absolute;
          top: 10%;
          left: 90%;
          transform: translate(-50%, -50%);
          background-color: #bfcc94;
          font-size: 10px;
          justify-content: center;
          align-items: center;
        }
      }

      & > button:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
`;
