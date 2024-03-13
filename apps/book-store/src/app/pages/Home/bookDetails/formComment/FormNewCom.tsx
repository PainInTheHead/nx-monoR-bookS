import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { StyledFormNewCom } from './FormNewCom.styled';

const FormNewCom = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Действия при отправке комментария - добавление на сервер, обновление данных и т.д.
    console.log('Comment submitted:', comment);
    setComment(''); // Очистим форму после отправки
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
      <button className='btn-com' type="submit">Post a comment</button>
    </StyledFormNewCom>
  );
};

export default FormNewCom;
