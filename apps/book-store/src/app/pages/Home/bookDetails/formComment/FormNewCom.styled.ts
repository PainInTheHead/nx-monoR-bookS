import styled from 'styled-components';

export const StyledFormNewCom = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  width: 740px;
  .input_comment {
    display: flex;
    height: 130px;
    width: 100%;
    border-radius: 16px;
    background-color: #f0f4ef;
    text-align: start;
    justify-content: start;
    align-items: start;
    box-sizing: border-box;
    padding: 15px;
    textarea {
      background: none;
      width: 100%;
      height: 100%;
      overflow-wrap: break-word;
      border: none;
      resize: none;
      outline: none;
      color: #344966;
    }
  }
  .btn-com {
    margin-top: 30px;
    width: 280px;
    height: 50px;
    text-align: center;
    background-color: #344966;
    border-radius: 16px;
    color: #f0f4ef;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.75px;
  }
`;

