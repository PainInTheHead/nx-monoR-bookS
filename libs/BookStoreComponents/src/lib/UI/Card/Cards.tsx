import { StyledCard } from './card.styled';
import { useState } from 'react';
import Rating from './ratingStars/RatingBook';
import CoverCard from './coverCard/CoverCard';
import AboutCard from './aboutCard/aboutCard';

interface PropsCard {
  bookId: number;
  title: string;
  description: string;
  author: string;
  price: number;
  liked: boolean;
  average: number;
  hangleSetLikedBook: (bookId: number) => void;
}

export function Card({
  bookId,
  title,
  author,
  average,
  price,
  liked,
  hangleSetLikedBook,
}: PropsCard) {
  const cover = '/card/covers/1';

  

  return (
    <StyledCard>
      <CoverCard
        handleClickLikeBtn={() => hangleSetLikedBook(bookId)}
        liked={liked}
        cover={cover}
        bookId={bookId}
      />
      <AboutCard name={title} author={author} price={price} value={average} />
    </StyledCard>
  );
}

export default Card;
