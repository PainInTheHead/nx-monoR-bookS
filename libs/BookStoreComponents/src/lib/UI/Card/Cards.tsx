import { StyledCard } from './card.styled';
import { useState } from 'react';
import Rating from './ratingStars/RatingBook';
import CoverCard from './coverCard/CoverCard';
import AboutCard from './aboutCard/aboutCard';

export interface Cart {
  bookId: number;
  title: string;
  price: number;
  count: number;
  author:string;
}

interface PropsCard {
  bookId: number;
  title: string;
  description: string;
  author: string;
  price: number;
  liked: boolean;
  average: number;
  cart: Cart[];
  hangleSetLikedBook: (bookId: number) => void;
  handleAddtoCart: (bookId: number, count: number) => void;
}

export function Card({
  bookId,
  title,
  author,
  average,
  price,
  liked,
  cart,
  hangleSetLikedBook,
  handleAddtoCart,
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
      <AboutCard
        handleAddtoCart={handleAddtoCart}
        name={title}
        author={author}
        price={price}
        value={average}
        bookId={bookId}
        cart={cart}
      />
    </StyledCard>
  );
}

export default Card;
