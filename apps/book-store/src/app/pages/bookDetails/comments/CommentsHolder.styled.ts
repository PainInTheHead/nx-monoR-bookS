import styled from 'styled-components';

export const StyledCommentsHolder = styled.div`
  .first_comment {
    font-size: 40px;
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

  @media (max-width: 422px) {
    .headerDetail {
      color: #0d1821;
      font-weight: 700;
      font-size: 30px;
      line-height: 60px;
    }
  }
`;
