import styled from 'styled-components';

const StyledDropDowns = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  gap: 20px;

  & > div:nth-child(-n + 3) {
    max-width: 197px;
  }

  .btn-dropmenu {
    width: 100%;
    max-width: 300px;
    color: #344966;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    cursor: pointer;
    background-color: #f0f4ef;
    gap: 2rem;
    span {
      max-width: 120px;
      /* flex-grow: 1; */
    }
    .rotate-image {
      transition: transform 0.2s ease;
    }

    .rotate-90 {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 618px) {
    flex-wrap: wrap;
    justify-content: start;
    width: 100%;
    & > div:nth-child(-n + 3) {
      max-width: 100%;
      width: 100%;
    }
    .btn-dropmenu {
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
    }
  }

  /* @media (max-width: 470px) {
    div:not(:last-child) {
      margin-right: 0;
    }
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 15px;
    .btn-dropmenu {
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
    }
  } */
`;

export { StyledDropDowns };
