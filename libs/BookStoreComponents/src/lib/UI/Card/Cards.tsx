import { StyledCard } from './card.styled';
import { useState } from 'react';
import Rating from './ratingStars/RatingBook';
import CoverCard from './coverCard/CoverCard';
import AboutCard from './aboutCard/aboutCard';

interface PropsCard {
  id: number;
  cover: string;
  name: string;
  author: string;
  rate: number;
  price: string;
}

export function Card({ id, cover, name, author, rate, price }: PropsCard) {
  const [liked, setLiked] = useState(false);
  const handleClickLikeBtn = () => {
    setLiked(!liked);
  };

  return (
    <StyledCard>
      <CoverCard
        handleClickLikeBtn={handleClickLikeBtn}
        liked={liked}
        cover={cover}
      />
      <AboutCard name={name} author={author} price={price} value={rate} />
    </StyledCard>
  );
}

export default Card;
