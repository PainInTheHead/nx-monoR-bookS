import styled from "styled-components";

const StyledDropDowns = styled.div`
  display: flex;
  div:not(:last-child) {
    margin-right: 20px;
  }
  .btn-dropmenu {
    width: 200px;
    color: #344966;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    cursor: pointer;
    background-color: #f0f4ef;
    /* background-color: red; */
    span {
      margin: 0 3px;
    }
    .rotate-image {
      transition: transform 0.2s ease;
    }

    .rotate-90 {
      transform: rotate(90deg);
    }
  }
`;

export { StyledDropDowns };
