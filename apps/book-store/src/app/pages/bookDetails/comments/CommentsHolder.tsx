import { Comments } from '../../../store/slices/bookSlice';
import { StyledCommentsHolder } from './CommentsHolder.styled';
import Comment from './Comment';

interface PropsCommentsHolder {
  coments: Comments[] | undefined;
}

const CommentsHolder: React.FC<PropsCommentsHolder> = ({ coments }) => {
  return (
    <StyledCommentsHolder>
      <h1 className="headerDetail Comment_headader">Comments</h1>
      <div className="all_comments__curentbook">
        {coments?.length === 0 ? (
          <p className="first_comment">Be the first to comment!</p>
        ) : (
          coments?.map((comment) => {
            return <Comment key={comment.id} comment={comment}/>;
          })
        )}
      </div>
    </StyledCommentsHolder>



  );
};

export default CommentsHolder;
