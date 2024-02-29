import styled from "styled-components";

export const StyledCard = styled.div`
  width: 305px;
  height: 663px;
  border-radius: 16px;
  .MuiRating-root{
    margin:15px 0;
  }
  .cover-card {
    position: relative;
    padding: 0;
    width: 305px;
    height: 448px;
    border-radius: 16px;
  }
  .like-btn {
    border: none;
    position: absolute;
    cursor: pointer;
    padding: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: none;
    top: 4%;
    left: 7%;
  }

  .about-card {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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
    .rateNumber{
      height: 20px;
      letter-spacing: 0;
      font-size: 16px;
      color: #b9bac3;
      margin-left:15px;
    }
  }

  .btn-price {
    cursor: pointer;
    width: 100%;
    height: 48px;
    background-color: #344966;
    border-radius: 16px;
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
