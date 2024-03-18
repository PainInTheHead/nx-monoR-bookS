import styled from 'styled-components';

export const StyledAboutDetailCard = styled.div`
  .book_about_warapper {
    display: flex;
    justify-content: space-between;
  }
  .coverBookDetail {
    width: 522px;
    height: 780px;
    margin-right: 128px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headerDetail {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  .Comment_headader {
    margin-top: 110px;
    margin-bottom: 50px;
  }
  .aboutCardDetail {
    width: 630px;
    .authorDetail {
      color: #0d1821;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
    .descDetail {
      color: #344966;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    .rate {
      width: 505px;
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 30px 0;
      .rateAverage {
        color: #b9bac3;
        font-weight: 400;
        font-size: 16px;
        height: 20px;
        letter-spacing: 0;
      }
      .RateThisBook {
        display: flex;
        flex-direction: row;
        height: 20px;

        align-items: center;
        gap: 15px;
        width: 100%;
      }
      .starDetails {
        display: flex;
        align-items: center;
      }
    }

    .descDetail {
      margin-top: 30px;
      color: #0d1821;
      font-weight: 400;
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
    }
    .fullDesc {
      margin-top: 10px;
      color: #344966;
      font-size: 16px;
      line-height: 24px;
    }

    .btn-group-details {
      display: flex;
      margin-top: 80px;
      .btn {
        margin-top: 15px;
        width: 240px;
        height: 50px;
        border-radius: 16px;
        color: #f0f4ef;
      }
      .Paperback {
        display: flex;
        flex-direction: column;
        margin-right: 85px;
        .btn-paper {
          background-color: #b9bac3;
        }
      }
      .Hardcover {
        display: flex;
        flex-direction: column;
        .btn-hard {
          background-color: #344966;
        }
      }
    }
  }
  .cardCounter {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 240px;
    height: 50px;
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
`;
