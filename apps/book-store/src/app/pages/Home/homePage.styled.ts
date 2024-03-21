import styled from 'styled-components';

export const StyledHome = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  border: none;
  .catalog-filter {
    margin-top: 20px;
    min-height: 72px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .h1-home-page {
      margin-right: 20px;

      font-size: 40px;
    }
  }
  .catalog-content {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    gap: 10px;
  }
  .banner-header {
    position: absolute;
    width: auto;
    height: auto;
    z-index: 1;
    top: 3%;
  }

  @media screen and (max-width: 840px) {
    .catalog-content {
      grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    }
  }
  @media (max-width: 618px) {
    .catalog-filter {
      flex-wrap: wrap;
      .h1-home-page {
      }
    }
  }
`;
