import styled from 'styled-components';

export const FooterMain = styled.footer`
  position: static;
  width: 100%;
  background-color: #0d1821;
  /* margin: 0 auto; */
  margin-top: 150px;
  /* padding: 60px 80px; */
  .conteiner {
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 220px;
    color: #f0f4ef;
    padding: 60px 80px;
    margin: 0 auto;
    width: 1280px;
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
    }
    .map-footer {
      display: flex;
      flex-direction: column;
    }
  }
`;
