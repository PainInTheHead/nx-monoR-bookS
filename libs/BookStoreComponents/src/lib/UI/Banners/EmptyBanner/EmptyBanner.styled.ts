import styled from 'styled-components';

export const StyledFavBanner = styled.div`
  .empty_con {
    display: flex;
    gap: 110px;
    justify-content: start;
  }
  .image {
    max-width: 425px;
    height: auto;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .about_empty {
    max-width: 460px;
    width: 100%;
    .cart_header {
      margin-top: 10px;
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
    }
    .description_cart {
      margin-top: 20px;
      margin-bottom: 60px;
      font-weight: 400px;
      font-size: 24px;
      line-height: 36px;
    }
  }
  .btn {
    height: 50px;
    text-align: center;
    border-radius: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    cursor: pointer;
  }
  .btn_checkout {
    background-color: #344966;
    width: 170px;
    color: #f0f4ef;
  }

  @media (max-width: 826px) {
    .empty_con {
      display: flex;
      gap: 5rem;
      justify-content: start;
    }
    .about_empty {
      max-width: 460px;
      .cart_header {
        margin-top: 10px;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
      }
      .description_cart {
        margin-top: 20px;
        margin-bottom: 60px;
        font-weight: 400px;
        font-size: 18px;
        line-height: 28px;
      }
    }
    .btn {
      height: 50px;
      text-align: center;
      border-radius: 16px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      cursor: pointer;
    }
    .btn_checkout {
      background-color: #344966;
      width: 170px;
      color: #f0f4ef;
    }
  }

  @media (max-width: 680px) {
    .image {
      max-width: 80%;
      height: auto;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .empty_con {
      display: flex;
      gap: 1rem;
      justify-content: start;
      flex-direction: column;
    }
    .about_empty {
      max-width: 100%;
      width: 100%;
      .cart_header {
        margin-top: 10px;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
      }
      .description_cart {
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 400px;
        font-size: 24px;
        line-height: 36px;
      }
    }
    .btn {
      height: 50px;
      text-align: center;
      border-radius: 16px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      cursor: pointer;
    }
    .btn_checkout {
      background-color: #344966;
      width: 170px;
      color: #f0f4ef;
    }
  }
`;
