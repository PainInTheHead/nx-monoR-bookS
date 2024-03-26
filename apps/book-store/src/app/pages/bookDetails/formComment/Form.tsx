import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import { StyledFormNewCom } from './Form.styled';
import { useAppDispatch } from '../../../hooks/hookStore';
import { actionPutNewComment } from '../../../store/slices/bookSlice';

const FormNewCom: React.FC<{ bookId: number }> = ({ bookId }) => {
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionPutNewComment(bookId, comment));
    setComment('');
  };

  return (
    <StyledFormNewCom onSubmit={handleSubmit}>
      <div className="input_comment">
        <textarea
          placeholder="Share a comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className="btn-com" type="submit">
        Post a comment
      </button>
    </StyledFormNewCom>
  );
};

export default FormNewCom;
