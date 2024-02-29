import styled from "styled-components";

const StyledPriceSlider = styled.div`
  position: relative;
  color: #344966;
  .dropdown-options.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-options {
    width: 390px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    position: absolute;
    top: 130%;
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
`;

export { StyledPriceSlider };
