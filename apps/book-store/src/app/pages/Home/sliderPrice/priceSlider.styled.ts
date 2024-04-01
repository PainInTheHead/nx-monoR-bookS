import styled from "styled-components";

const StyledPriceSlider = styled.div`
  position: relative;
  color: #344966;
  width: 100%;
  .dropdown-options.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-options {
    box-sizing:border-box;
    width:210%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 1000;
    background: #f0f4ef;
    padding: 15px;
    border: none;
    border-radius: 16px;
    .three {
      position: absolute;
      top: -7%;
      left: 5%;
    }
  }
   @media (max-width: 618px) {
    .dropdown-options {
      width:100%;
    }

   }
`;

export { StyledPriceSlider };
