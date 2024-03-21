import styled from 'styled-components';

export const StyledAboutDetailCard = styled.div`
  .book_about_warapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
  .coverBookDetail {
    max-width: 522px;
    max-height: 780px;
    min-width: 366px;
    width: 100%;
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
    max-width: 630px;
    max-height: 600px;
    width: 100%;
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
      max-width: 505px;
      width: 100%;
      display: grid;
      max-height: 30px;
      grid-template-areas: 'first second third';

      align-items: center;
      justify-content: space-between;
      gap: 5px;
      margin: 30px 0;
      .soloStarCon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 60px;
        width: 100%;
        .soloStar {
          height: auto;
          max-width: 30px;
          max-height: 30px;
          width: 100%;
        }
        .rateAverage {
          color: #b9bac3;
          font-weight: 400;
          font-size: 16px;
          height: 20px;
          letter-spacing: 0;
        }
      }
      .RateThisBook {
        display: flex;
        flex-direction: row;
        height: 20px;

        align-items: center;
        gap: 15px;
        min-width: 100px;
        max-width: 150px;
        width: 100%;
      }
      .starDetails {
        width: 100%;
        display: flex;
        align-items: center;
      }
    }

    .rate .first {
      grid-area: first;
      width: 60px; /* Ширина первого элемента будет автоматически сжиматься до 60px */
    }

    .rate .second,
    .rate .third {
      grid-area: second;
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
      width: 100%;
      justify-content: space-between;
      gap: 20px;
      .btn {
        margin-top: 15px;
        max-width: 240px;
        width: 100%;
        height: 50px;
        border-radius: 16px;
        color: #f0f4ef;
      }
      .Paperback {
        display: flex;
        flex-direction: column;
        width: 100%;
        .btn-paper {
          background-color: #b9bac3;
        }
      }
      .Hardcover {
        display: flex;
        flex-direction: column;
        width: 100%;
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
  .ratethisbookp {
    max-width: 103px;
    min-width: 66px;
    text-align: center;
  }

  /* @media (max-width: 961px) {
    .book_about_warapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  } */
  @media (max-width: 830px) {
    .aboutCardDetail {
      max-width: 630px;
      max-height: 600px;
      width: 100%;
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
        max-width: 505px;
        width: 100%;
        display: grid;
        max-width: 100%;
        max-height: 200px;
        grid-template-areas:
          'first first'
          'second third';

        align-items: center;
        justify-content: space-between;
        gap: 5px;
        margin: 30px 0;
        .soloStarCon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 60px;
          width: 100%;
          .soloStar {
            height: auto;
            max-width: 30px;
            max-height: 30px;
            width: 100%;
          }
          .rateAverage {
            color: #b9bac3;
            font-weight: 400;
            font-size: 16px;
            height: 20px;
            letter-spacing: 0;
          }
        }
        .RateThisBook {
          display: flex;
          flex-direction: row;
          height: 20px;

          align-items: center;
          gap: 15px;
          min-width: 100px;
          max-width: 150px;
          width: 100%;
        }
        .starDetails {
          width: 100%;
          display: flex;
          align-items: center;
        }
      }

      .rate .soloStarCon {
        grid-area: first;
        width: 1fr; /* Ширина первого элемента будет автоматически сжиматься до 60px */
      }

      .rate .starDetails {
        grid-area: second;
      }
      .rate .RateThisBook {
        grid-area: third;
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
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        .btn {
          margin-top: 15px;
          max-width: 240px;
          width: 100%;
          height: 50px;
          border-radius: 16px;
          color: #f0f4ef;
        }
        .Paperback {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-paper {
            background-color: #b9bac3;
          }
        }
        .Hardcover {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-hard {
            background-color: #344966;
          }
        }
      }
    }
  }

  @media (max-width: 715px) {
    .book_about_warapper {
      flex-direction: column;
    }
    .coverBookDetail {
      width: 100%;
      margin: 0 auto;
    }
    .aboutCardDetail {
      max-width: 100%;
      max-height: 600px;
      width: 100%;
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
        max-width: 400px;
        width: 100%;
        display: grid;
        max-height: 200px;
        grid-template-areas: 'first second third';

        align-items: center;
        justify-content: space-between;
        gap: 5px;
        margin: 30px 0;
        .soloStarCon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 60px;
          width: 100%;
          .soloStar {
            height: auto;
            max-width: 30px;
            max-height: 30px;
            width: 100%;
          }
          .rateAverage {
            color: #b9bac3;
            font-weight: 400;
            font-size: 16px;
            height: 20px;
            letter-spacing: 0;
          }
        }
        .RateThisBook {
          display: flex;
          flex-direction: row;
          height: 20px;

          align-items: center;
          gap: 15px;
          min-width: 100px;
          max-width: 150px;
          width: 100%;
        }
        .starDetails {
          width: 100%;
          display: flex;
          align-items: center;
        }
      }

      .rate .soloStarCon {
        grid-area: first;
        width: 60px; /* Ширина первого элемента будет автоматически сжиматься до 60px */
      }

      .rate .starDetails {
        grid-area: second;
        width: 200px;
      }
      .rate .RateThisBook {
        grid-area: third;
        width: 160px;
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
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        margin-top: 20px;
        .btn {
          margin-top: 15px;
          max-width: 240px;
          width: 100%;
          height: 50px;
          border-radius: 16px;
          color: #f0f4ef;
        }
        .Paperback {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-paper {
            background-color: #b9bac3;
          }
        }
        .Hardcover {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-hard {
            background-color: #344966;
          }
        }
      }
    }
  }

  @media (max-width: 422px) {
    .book_about_warapper {
      flex-direction: column;
    }
    .coverBookDetail {
      max-width: 522px;
      max-height: 780px;
      min-width: 200px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .aboutCardDetail {
      max-width: 100%;
      max-height: 600px;
      width: 100%;
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
        max-width: 400px;
        min-width: 100px;
        width: 100%;
        display: grid;
        max-height: 200px;
        grid-template-areas:
          'first first'
          'second third';

        align-items: center;
        justify-content: space-between;
        gap: 5px;
        margin: 30px 0;
        .soloStarCon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 60px;
          width: 100%;
          .soloStar {
            height: auto;
            max-width: 30px;
            max-height: 30px;
            width: 100%;
          }
          .rateAverage {
            color: #b9bac3;
            font-weight: 400;
            font-size: 16px;
            height: 20px;
            letter-spacing: 0;
          }
        }
        .RateThisBook {
          display: flex;
          flex-direction: row;
          height: 20px;

          align-items: center;
          gap: 15px;
          min-width: 100px;
          max-width: 150px;
          width: 100%;
        }
        .starDetails {
          width: 100%;
          display: flex;
          align-items: center;
        }
      }

      .rate .soloStarCon {
        grid-area: first;
        width: 60px; /* Ширина первого элемента будет автоматически сжиматься до 60px */
      }

      .rate .starDetails {
        grid-area: second;
        width: 200px;
      }
      .rate .RateThisBook {
        grid-area: third;
        max-width: 160px;
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
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        margin-top: 20px;
        .btn {
          margin-top: 15px;
          max-width: 240px;
          width: 100%;
          height: 50px;
          border-radius: 16px;
          color: #f0f4ef;
        }
        .Paperback {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-paper {
            background-color: #b9bac3;
          }
        }
        .Hardcover {
          display: flex;
          flex-direction: column;
          width: 100%;
          .btn-hard {
            background-color: #344966;
          }
        }
      }
    }
  }
`;
