import styled from "styled-components";

export const StyledBookSlider = styled.div`
  width: 240px;
  height: 24px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom:80px;
  display: flex;
  justify-content: space-between;
  .btn {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background:none;
  }
  .btn-right {
    transform: rotate(180deg);
  }
  .btn-dots{
    display:flex;
    gap:15px;
  }
`;
