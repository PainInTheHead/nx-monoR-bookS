import styled from 'styled-components';

export const StyledCartBook = styled.div`
  display: flex;
  gap: 20px;
  height: 330px;
  .book_cover {
    width: 200px;
    height: 290px;
  }
  .about_cart_book {
    width: 430px;
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
      width: 32px;
      height: 32px;
      text-align: center;
    }
  }
`;
