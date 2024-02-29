import styled from "styled-components";

export const StyledPageProfile = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  .hidden {
    display: none;
  }
  .Ava {
    width: 305px;
    height: 305px;
    border-radius: 16px;
    object-fit: cover;
  }
  .profile-images {
    height: 305px;
    position: relative;
    margin-right: 120px;
    .btn-changeImage {
      background: none;
      position: absolute;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
    }
  }
`;
