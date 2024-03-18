import { StyledComment } from './Comments.styled';

interface PropsComment {
  value: string;
  avatar: string;
  username: string;
  timeAgo: string;
}

const Comment: React.FC<PropsComment> = ({
  value,
  avatar,
  username,
  timeAgo,
}) => {
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
