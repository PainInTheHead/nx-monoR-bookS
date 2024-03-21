import styled from 'styled-components';

export const StyledCartHolder = styled.div`
  .border_con > *:not(:last-child) {
    border-bottom: 1px solid #d6d8e7;
    margin-bottom: 40px;
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
  .border_con > *:not(:last-child) {
    border-bottom: 1px solid #d6d8e7;
    margin-bottom: 40px;
  }

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

  .btns_total {
    margin-top: 30px;
    display:flex;
    width:100%;
    gap:20px;
  }

  .btn_continue {
    color: #0d1821;
    max-width: 270px;
    width:100%;
    border: 1px solid #0d1821;
    background: none;
  }
  .btn_checkout {
    color: #f0f4ef;
    background-color: #344966;
    width: 174px;
    border: none;
  }
`;
