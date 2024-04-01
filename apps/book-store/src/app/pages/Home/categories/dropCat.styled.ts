import { Theme } from "react-toastify";
import styled from "styled-components";
import type { ThemeApp } from "@book-store/BookStoreLibrary";

const StyledDropdownCategories = styled.div<{ theme: ThemeApp }>`
  position: relative;
  color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  .dropdown-options.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-options {
    box-sizing:border-box;
    width:100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    position: absolute;
    top: 130%;
    left: 0;
    z-index: 1000;
    /* background: #f0f4ef; */
    background: ${(props) => props.theme.colors.primary};
    padding: 15px;
    border: none;
    border-radius: 16px;
    .three {
      width: auto;
      height: auto;
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
        background: url('/Default.png') no-repeat;
        background-size: 24px 24px;
        width: 24px;
        height: 24px;
      }
      .uncheked {
        background: url('/uncheked.png') no-repeat;
        background-size: 24px 24px;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export { StyledDropdownCategories };
