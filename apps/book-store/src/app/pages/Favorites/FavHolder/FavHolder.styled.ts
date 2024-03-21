import styled from 'styled-components';

export const StyledFavHolder = styled.div`
  .border_con {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    gap: 10px;
  }

  @media screen and (max-width: 840px) {
    .border_con {
      grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    }
  }
`;
