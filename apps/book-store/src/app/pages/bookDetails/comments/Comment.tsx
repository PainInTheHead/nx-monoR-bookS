import { Comments } from 'apps/book-store/src/app/store/slices/bookSlice';
import { StyledComment } from './Comments.styled';

interface PropsComment {
  comment: Comments;
}

const Comment: React.FC<PropsComment> = ({ comment }) => {
  const { value, avatar, username, timeAgo } = comment;
  return (
    <StyledComment>
      <div className="comment_user">
        <div className="circle_avatar">
          <img
            src={
              avatar
                ? `http://localhost:3005/uploads/${avatar}`
                : `/profilePage/noneChel.png`
            }
            alt="chel"
          />
        </div>
        <div className="current_full_comment">
          <h2 className="nick_name">{username}</h2>
          <p className="time_ago">{timeAgo}</p>
          <p className="comment_current">{value}</p>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
