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

export interface User {
  email: string;
  password: string | null;
  username: string | 'Guest';
  id: number | null;
  avatar?: string;
  active?: boolean;
}

interface PropsCard {
  bookId: number;
  title: string;
  description: string;
  author: string;
  price: number;
  cover: string;
  liked: boolean;
  average: number;
  cart: Cart[];
  user: User;
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
  cover,
  user,
  hangleSetLikedBook,
  handleAddtoCart,
}: PropsCard) {
  // const cover = '/card/covers/1';

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
        user={user}
      />
    </StyledCard>
  );
}

export default Card;
