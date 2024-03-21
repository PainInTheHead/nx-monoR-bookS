import styled from 'styled-components';

export const StyledCartBook = styled.div`
  display: flex;
  gap: 20px;
  max-height: 330px;
  .book_cover {
    max-width: 200px;
    min-width: 120px;
    height: auto;
    margin-bottom: 1em;
  }
  .about_cart_book {
    max-width: 430px;
    .counter {
    }
    .total_price__book {
      color: #0d1821;
      font-weight: 400;
      font-size: 36px;
      line-height: 54px;
    }

    .h1cart {
      color: #0d1821;
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
    }
    .h2cart {
      color: #0d1821;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
  }

  .cardCounter {
    display: flex;
    align-items: center;
    margin: 50px 0;
    gap: 17px;
    font-size: 15px;
    color: #000000;
    button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
    }
    .btn_count {
      background: #f0f4ef;
    }
    .delete {
      margin-left: 60px;
      background: none;
      img {
        display: flex;
        align-items: center;
      }
    }
    .countCard {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 32px;
      height: 32px;
      text-align: center;
    }
  }

  @media (max-width: 448px) {
    .about_cart_book {
      max-width: 430px;
      .counter {
      }
      .total_price__book {
        color: #0d1821;
        font-weight: 400;
        font-size: 24px;
        line-height: 54px;
      }

      .h1cart {
        color: #0d1821;
        font-weight: 700;
        font-size: 28px;
        line-height: 60px;
      }
      .h2cart {
        color: #0d1821;
        font-weight: 400;
        font-size: 17px;
        line-height: 36px;
      }
    }

    .cardCounter {
      display: flex;
      align-items: center;
      margin: 20px 0;
      gap: 17px;
      font-size: 15px;
      color: #000000;
      button {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
      }
      .btn_count {
        background: #f0f4ef;
      }
      .delete {
        margin-left: 30px;
        background: none;
        img {
          display: flex;
          align-items: center;
        }
      }
      .countCard {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 32px;
        height: 32px;
        text-align: center;
      }
    }
  }

  @media (max-width: 370px) {
    .about_cart_book {
      max-width: 430px;
      .counter {
      }
      .total_price__book {
        color: #0d1821;
        font-weight: 400;
        font-size: 12px;
        line-height: 54px;
      }

      .h1cart {
        color: #0d1821;
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
      }
      .h2cart {
        color: #0d1821;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
      }
    }

    .cardCounter {
      display: flex;
      align-items: center;
      margin: 20px 0;
      gap: 10px;
      font-size: 15px;
      color: #000000;
      button {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
      }
      .btn_count {
        background: #f0f4ef;
      }
      .delete {
        margin-left: 20px;
        background: none;
        img {
          display: flex;
          align-items: center;
        }
      }
      .countCard {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 32px;
        height: 32px;
        text-align: center;
      }
    }
  }
`;
