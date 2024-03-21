import styled from 'styled-components';

export const StyledCard = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 16px;
  .MuiRating-root {
    margin: 3% 0;
  }
  .cover-card {
    position: relative;
    padding: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
  }
  .card_cover_img {
    width: 100%;
    height: 100%;
  }
  .card_like_img {
    width: 80%;
    height: 100%;
  }
  .like-btn {
    border: none;
    position: absolute;
    cursor: pointer;
    padding: 0;
    max-width: 48px;
    max-height: 48px;
    border-radius: 50%;
    background: none;
    top: 4%;
    left: 7%;
  }

  .about-card {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
  }

  .name-athor {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    span:last-child {
      color: #b9bac3;
    }
  }

  .stars {
    display: flex;
    justify-content: start;
    align-items: center;
    .rateNumber {
      height: 20px;
      letter-spacing: 0;
      font-size: 16px;
      color: #b9bac3;
      margin-left: 15px;
    }
  }

  .cardCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 48px;
    border: solid 1px #344966;
    border-radius: 16px;
    font-size: 20px;
    color: #000000;
    button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f0f4ef;
      cursor: pointer;
    }
    .countCard {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f0f4ef;
      text-align: center;
    }
  }

  .btn {
    cursor: pointer;
    width: 100%;
    height: 48px;
    border-radius: 16px;
  }
  .btn-buy {
    border: solid 1px #344966;
  }

  .btn-price {
    background-color: #344966;
    border: none;
    .price {
      color: #f0f4ef;
      font-size: 20px;
      margin: 0 auto;
    }
    &:hover {
      background-color: #0d1821;
      transition: background-color 0.5s ease;
    }
    &:focus {
      box-shadow: 0 0 0 8px rgba(214, 216, 231, 1);
      transition: box-shadow 0.3s ease;
    }
  }

  @media (max-width: 550px) {
    .btn-price {
      background-color: #344966;
      border: none;
      .price {
        color: #f0f4ef;
        font-size: 16px;
        margin: 0 auto;
      }
      &:hover {
        background-color: #0d1821;
        transition: background-color 0.5s ease;
      }
      &:focus {
        box-shadow: 0 0 0 8px rgba(214, 216, 231, 1);
        transition: box-shadow 0.3s ease;
      }
    }
    .like-btn {
      border: none;
      position: absolute;
      cursor: pointer;
      padding: 0;
      max-width: 32px;
      border-radius: 50%;
      background: none;
      top: 4%;
      left: 7%;
    }
  }

`;
