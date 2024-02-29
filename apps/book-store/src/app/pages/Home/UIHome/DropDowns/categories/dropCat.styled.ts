import styled from "styled-components";

const StyledDropdownCategories = styled.div`
  position: relative;
  color: #344966;
  .dropdown-options.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-options {
    width: 275px;
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
      width:auto;
      height:auto;
      position: absolute;
      top: -7%;
      left: 5%;
    }

    label {
      height: 25px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      cursor: pointer;
      input {
        position: absolute;
        height: 0;
        width: 0;
        opacity: 0;
      }

      div {
        margin-right: 10px;
      }

      .checked {
        background: url("/Default.png") no-repeat;
        background-size: 24px 24px;
        width: 24px;
        height: 24px;
      }
      .uncheked {
        background: url("/uncheked.png") no-repeat;
        background-size: 24px 24px;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export { StyledDropdownCategories };
