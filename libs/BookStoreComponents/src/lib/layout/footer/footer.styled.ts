import styled from 'styled-components';

export const FooterMain = styled.footer`
  /* position: static; */
  width: 100%;
  height: 100%;
  background-color: #0d1821;
  /* margin: 0 auto; */
  margin-top: 150px;
  /* padding: 60px 80px; */
  .conteiner {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: start;
    height: 100%;
    color: #f0f4ef;
    padding: 60px 0px;
    margin: 0 auto;
    max-width: 1280px;
    gap: 20px;
    .contacts-con {
      .logoDark {
        margin-bottom: 30px;
      }
      .contacts {
        display: flex;
        flex-direction: column;
      }
    }
    .nav-footer {
      .btn-exit {
        cursor: pointer;
        background: none;
        color: #f0f4ef;
      }
      min-width: 52px;
    }
    .map-footer {
      display: flex;
      flex-direction: column;
      max-width: 413px;
      max-height: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 1280px) {
    .conteiner {
      padding: 60px 5px;
    }
  }
  @media (max-width: 737px) {
    .conteiner {
      /* flex-wrap: wrap;
      justify-content: space-between; */
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    .conteiner {
      flex-direction:column;
      justify-content: center;
      /* align-items:center; */
      font-size:14px;
    }
  }
`;
