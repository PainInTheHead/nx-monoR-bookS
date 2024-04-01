import styled from 'styled-components';
import { ThemeApp } from '../../themes/themeDefault';

export const AuthBanStyled = styled.div<{ theme: ThemeApp }>`
  max-width: 1280px;
  height: 500px;
  margin-top: 150px;
  overflow: hidden;
  position: relative;
  .containerhidden {
    position: absolute;
    bottom: 0;
    border-radius: 16px;
    width: 100%;
    height: 90%;
    background-color: ${(props) => props.theme.colors.primary};
  }
  .aboutAuthBanner {
    position: absolute;
    z-index: 1000; 
    top: 20%; 
    right: 20%;
    h1 {
      cursor: default;

      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizes.title};
      line-height: 60px;
    }
    p {
      cursor: default;

      width: 220px;
      font-weight: 400;
      font-size: ${(props) => props.theme.fontSizes.text};
      line-height: 30px;
    }
  }

  .imageCon {
    z-index: 10;
  }

  .CastleImg {
    position: absolute;
    bottom: 0%;
    left: 10%;
    z-index: 100;
  }

  .FeayImg {
    position: absolute;
    top: -20%;
    right: 0%;
  }

  .btn-login-con {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 231px;
    height: 44px;
    background-color: ${(props) => props.theme.colors.primaryDark};
    border-radius: 16px;
    .btn-login {
      color: ${(props) => props.theme.colors.primary};
      background: none;
    }
  }
  @media (max-width: 1159px) {
    .aboutAuthBanner {
      position: absolute;
      top: 20%;
      right: 10%;
      h1 {
        cursor: default;

        font-weight: 700;
        
        line-height: 60px;
      }
      p {
        cursor: default;

        width: 220px;
        font-weight: 400;
        
        line-height: 30px;
      }
    }
    .CastleImg {
      position: absolute;
      bottom: 0%;
      left: 0%;
    }

    .FeayImg {
      position: absolute;
      top: -21%;
      right: 0%;
    }
  }

  @media (max-width: 863px) {
    height: 400px;
    .containerhidden {
      /* position: absolute;
      bottom: 0;
      border-radius: 16px;
      width: 100%;
      height: 400px;
      background-color: #f0f4ef; */
    }
    .aboutAuthBanner {
      position: absolute;
      top: 20%;
      right: 0%;
      h1 {
        cursor: default;

        font-weight: 700;
        
        line-height: 60px;
      }
      p {
        cursor: default;

        width: 220px;
        font-weight: 400;
        
        line-height: 30px;
      }
    }
    .CastleImg {
      width: 52%;
      position: absolute;
      bottom: 0%;
      left: 0%;
    }

    .FeayImg {
      width: 50%;
      position: absolute;
      top: -5%;
      right: 0%;
    }
  }

  @media (max-width: 657px) {
    height: 1000px;
    .containerhidden {
      /* position: absolute;
      bottom: 0;
      border-radius: 16px;
      width: 100%;
      height: 400px;
      background-color: #f0f4ef; */
    }
    .aboutAuthBanner {
      position: absolute;
      top: 5%;
      right: 40%;
      h1 {
        cursor: default;

        font-weight: 700;
        
        line-height: 60px;
      }
      p {
        cursor: default;

        width: 220px;
        font-weight: 400;
        
        line-height: 30px;
      }
    }
    .CastleImg {
      width: 90%;
      position: absolute;
      bottom: 0%;
      left: 3%;
    }

    .FeayImg {
      width: 60%;
      position: absolute;
      top: -2%;
      right: 0%;
    }
  }

  @media (max-width: 529px) {
    height:700px;
    .aboutAuthBanner {
      position: absolute;
      top: 5%;
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
    .CastleImg {
      width: 90%;
      position: absolute;
      bottom: 0%;
      left: 3%;
    }

    .FeayImg {
      width: 60%;
      position: absolute;
      top: -2%;
      right: 0%;
    }
  }
`;

export const HomeStyledBan = styled.div<{ theme: ThemeApp }>`
  position: relative;
  max-width: 1280px;
  height: 400px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 16px;
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
      color: ${(props) => props.theme.colors.primaryDark};
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }
    button {
      cursor: pointer;
      width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }
  .imageCon {
    z-index: 1; /* Lower z-index to be below aboutHomeBanner */
  }

  .booksImg {
    position: absolute;
    bottom: 0%;
    left: 0%;
    max-width: 542px;
    max-height: 327px;
  }
  .girlImg {
    position: absolute;
    bottom: 0%;
    right: 0%;
    max-width: 406px;
    max-height: 400px;
  }
  @media (max-width: 882px) {
    height: 370px;
    .aboutHomeBanner {
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primaryDark};
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 75%;
      bottom: 0%;
      left: 0%;
    }
    .girlImg {
      max-width: 50%;
      position: absolute;
      bottom: 0%;
      right: 0%;
    }
  }
  @media (max-width: 750px) {
    height: 320px;
    .aboutHomeBanner {
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 24px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primaryDark};
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 75%;
      bottom: 0%;
      left: 0%;
    }
    .girlImg {
      max-width: 50%;
      position: absolute;
      bottom: 0%;
      right: 0%;
    }
    button {
      font-size: 16px;
      cursor: pointer;
      max-width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }

  @media (max-width: 601px) {
    height: 650px;
    .aboutHomeBanner {
      position: absolute;
      z-index: 2;
      top: 8%;
      left: 8%;
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 32px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primaryDark};
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 100%;
      bottom: 60%;
      left: 0%;
    }
    .girlImg {
      max-width: 100%;
      position: absolute;
      bottom: 0%;
      right: 10%;
    }
    button {
      font-size: 16px;
      cursor: pointer;
      max-width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }

  @media (max-width: 520px) {
    height: 650px;
    .aboutHomeBanner {
      position: absolute;
      z-index: 2;
      top: 8%;
      left: 8%;
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 32px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primaryDark};
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 100%;
      bottom: 63%;
      left: 0%;
    }
    .girlImg {
      max-width: 80%;
      position: absolute;
      bottom: 0%;
      right: 6%;
    }
    button {
      font-size: 16px;
      cursor: pointer;
      max-width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }

  @media (max-width: 450px) {
    height: 600px;
    .aboutHomeBanner {
      position: absolute;
      z-index: 2;
      top: 8%;
      left: 8%;
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 26px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primaryDark};
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 100%;
      bottom: 63%;
      left: 0%;
    }
    .girlImg {
      max-width: 80%;
      position: absolute;
      bottom: 0%;
      right: 6%;
    }
    button {
      font-size: 16px;
      cursor: pointer;
      max-width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }

  @media (max-width: 387px) {
    height: 480px;
    .aboutHomeBanner {
      position: absolute;
      z-index: 2;
      top: 0%;
      left: 8%;
      h1 {
        cursor: default;

        font-weight: 700;
        font-size: 20px;
        line-height: 60px;
      }
      p {
        cursor: default;
        width: 220px;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
      }
    }
    .booksImg {
      max-width: 100%;
      bottom: 63%;
      left: 0%;
    }
    .girlImg {
      max-width: 80%;
      position: absolute;
      bottom: 0%;
      right: 6%;
    }
    button {
      font-size: 16px;
      cursor: pointer;
      max-width: 230px;
      height: 44px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.primaryDark};
      color: ${(props) => props.theme.colors.primary};
      border-radius: 16px;
      margin-top: 40px;
    }
  }
`;
