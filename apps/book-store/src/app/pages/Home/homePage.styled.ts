import styled from 'styled-components';

export const StyledHome = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  border: none;
  .catalog-filter {
    margin-top: 20px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h1-home-page {
      font-size: 40px;
    }
  }
  .catalog-content {
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .banner-header {
    position: absolute;
    width: auto;
    height: auto;
    z-index: 1;
    top: 3%;
  }
  .HomeBanner {
    position: relative;
    width: 1280px;
    height: 400px;
    background-color: #f0f4ef;
    border-radius: 16px;
  }

  .imageCon {
    z-index: 1; /* Lower z-index to be below aboutHomeBanner */
  }

  .booksImg {
    position: absolute;
    bottom: 0%;
    left: 0%;
  }
  .girlImg {
    position: absolute;
    top: 0%;
    right: 0%;
  }
  .aboutHomeBanner {
    position: absolute;
    z-index: 2; /* Increasing the z-index to make it appear above imageCon */
    top: 20%; /* Adjust as per your layout */
    left: 5%;
    h1 {
      cursor: default;

      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
    }
    p {
      cursor: default;
      width: 220px;
      color: #344966;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }
    button {
      cursor: pointer;
      width: 230px;
      height: 44px;
      text-align: center;
      background-color: #344966;
      color: #f0f4ef;
      border-radius: 16px;
      margin-top: 40px;
    }
  }

  .CastleImg {
    position: absolute;
    bottom: 0%;
    left: 10%;
  }

  .FeayImg {
    position: absolute;
    top: -20%;
    right: 0%;
  }

  .aboutAuthBanner {
    position: absolute;
    z-index: 2; /* Increasing the z-index to make it appear above imageCon */
    top: 20%; /* Adjust as per your layout */
    right: 20%;
    h1 {
      cursor: default;

      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
    }
    p {
      cursor: default;

      width: 220px;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }
  }
  .btn-login-con {
    margin-top: 40px;
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
`;
