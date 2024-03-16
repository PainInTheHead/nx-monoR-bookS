import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PropsCover {
  handleClickLikeBtn: () => void;
  liked?: boolean;
  cover: string;
  bookId: number;
}

const CoverCard: React.FC<PropsCover> = ({
  handleClickLikeBtn,
  liked,
  cover,
  bookId,
}) => {
  const navigate = useNavigate();

  // http://localhost:3005/uploads/
  return (
    <div className="cover-card" onClick={() => navigate(`book/${bookId}`)}>
      <img
        src={cover}
        width={305}
        height={448}
        alt="cover"
      />
      {/* <img src={`${cover}.png`} width={305} height={448} alt="cover" /> */}
      <button
        className="like-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleClickLikeBtn();
        }}
      >
        <img
          src={`/card/${liked ? `liked` : `unliked`}.svg`}
          width={48}
          height={48}
          alt="like"
        />
      </button>
    </div>
  );
};

export default CoverCard;
