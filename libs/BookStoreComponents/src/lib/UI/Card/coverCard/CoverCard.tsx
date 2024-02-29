import React from "react";

interface PropsCover {
  handleClickLikeBtn?: () => void;
  liked?: boolean;
  cover: string;
}

const CoverCard: React.FC<PropsCover> = ({
  handleClickLikeBtn,
  liked,
  cover,
}) => {
  return (
    <div className="cover-card">
      <img
        src={`${cover}.png`}
        width={305}
        height={448}
        alt="cover"
      />
      <button className="like-btn" onClick={handleClickLikeBtn}>
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
