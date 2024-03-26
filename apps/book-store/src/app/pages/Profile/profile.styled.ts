import styled from 'styled-components';

export const StyledPageProfile = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content:start;
  gap: 10rem;
  .hidden {
    display: none;
  }
  .avadiv {
    max-width: 305px;
    max-height: 305px;
    width: 100%;
    position: relative;
  }
  .Ava {
    max-width: 305px;
    max-height: 305px;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
  .profile-images {
    max-height: 305px;
    max-width: 305px;
    width: 100%;

    .btn-changeImage {
      background: none;
      position: absolute;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
    }
  }

  @media (max-width: 662px) {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    flex-direction: column;
    gap: 20px;

    .profile-images {
      max-height: 305px;

      .btn-changeImage {
        background: none;
        position: absolute;
        bottom: 1%;
        right: 5%;
        cursor: pointer;
      }
    }
    .avadiv {
      margin: 0 auto;
      max-width: 305px;
      max-height: 305px;
      width: 100%;
      position: relative;
    }
  }
`;
