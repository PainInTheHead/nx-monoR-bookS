import styled from 'styled-components';

export const StyledRecommendations = styled.div`
  .recommendations {
    margin-top: 30px;
    /* .catalog_content {
      margin-top: 20px;
      display: flex;
      gap: 20px;
    } */
    .header_rec {
      color: #0d1821;
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
    }
  }
  .catalog_content {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    gap: 10px;
  }

  @media (max-width: 422px) {
    .recommendations {
    margin-top: 30px;
    /* .catalog_content {
      margin-top: 20px;
      display: flex;
      gap: 20px;
    } */
    .header_rec {
      color: #0d1821;
      font-weight: 700;
      font-size: 30px;
      line-height: 60px;
    }
  }
}
`;
