import styled from "styled-components";




export const StyledComment = styled.div`
margin-bottom:5px;
  .comment_user {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 740px;
    padding: 30px 0;
    border-radius: 16px;
    background-color: #f0f4ef;
    .circle_avatar {
      img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 1px solid #344966;
      }
    }
    .current_full_comment {
      width: 600px;
      .nick_name {
        margin-top: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75px;
      }
      .time_ago {
        margin-top: 5px;
        color: #b9bac3;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.75px;
      }
      .comment_current {
        margin-top: 9px;
        color: #344966;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75px;
      }
    }
  }
`;