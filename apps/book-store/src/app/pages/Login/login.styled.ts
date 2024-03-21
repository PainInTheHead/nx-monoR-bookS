import styled from 'styled-components';

export const StyledLogIn = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  .chel {
    width: 100%;
    height: auto;
    max-width: 622px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    .chel {
      width: 100%;
      height: auto;
      max-width: 60%;
      object-fit: contain;
    }
  }

  @media (max-width: 780px) {
    .chel {
      width: 100%;
      height: auto;
      max-width: 50%;
      object-fit: contain;
    }
  }

  @media (max-width: 620px) {
    flex-wrap: wrap;
    .chel {
      width: 100%;
      height: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;
