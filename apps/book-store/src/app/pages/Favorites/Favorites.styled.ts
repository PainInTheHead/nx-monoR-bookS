import styled from 'styled-components';

export const StyledFavorites = styled.div`
  width: 1280px;
  margin: 0 auto;
  .total_price {
    .total_header {
      font-weight: 400;
      font-size: 36px;
      line-height: 54px;
      span {
        font-weight: 700;
      }
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
  .btns_total {
    margin-top: 30px;
  }
  .btn_continue {
    color: #0d1821;
    margin-right: 20px;
    width: 270px;
    border: 1px solid #0d1821;
    background: none;
  }
  .btn_checkout {
    background-color: #344966;
    width: 170px;
    color: #f0f4ef;
  }

  .empty_con {
    display: flex;
    gap: 110px;
  }
  .about_empty {
    width: 460px;
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
`;
