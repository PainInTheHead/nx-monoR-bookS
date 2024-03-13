import { StyledComment } from "./Comments.styled";





const Comment = () => {
    return (
        <StyledComment >
          <h1 className="headerDetail Comment_headader">Comments</h1>
          <div className="comment_user">
            <div className="circle_avatar">
              <img src="/profilePage/noneChel.png" alt="chel" />
            </div>
            <div className="current_full_comment">
              <h2 className="nick_name">Floyd Miles </h2>
              <p className="time_ago">Left a comment two days ago</p>
              <p className="comment_current">
                Love this so much! This book opened up a new world for me! I
                advise everyone to get acquainted with the author of this book.
                He is awesome!
              </p>
            </div>
          </div>
        </StyledComment>
    );
}
 
export default Comment;