// import Rating from "../ratingStars/Rating";
import Rating from '@mui/material/Rating';
import RatingBook from '../ratingStars/RatingBook';
import { useEffect, useState } from 'react';
import { Cart, User } from '../Cards';

interface PropsAbout {
  name: string;
  author: string;
  price: number;
  value: number;
  handleAddtoCart: (bookId: number, count: number) => void;
  bookId: number;
  cart: Cart[];
  user: User;
}

const AboutCard: React.FC<PropsAbout> = ({
  name,
  author,
  price,
  value,
  bookId,
  cart,
  user,
  handleAddtoCart,
}) => {
  const curentCount = cart.find((book) => book.bookId === bookId);
  const counted = curentCount?.count;
  const [stateBuy, setStateBuy] = useState(false);
  const [count, setCount] = useState(counted);
  return (
    <div className="about-card">
      <div className="name-athor">
        <span>{name}</span>
        <span>{author}</span>
      </div>
      <RatingBook value={value} />
      <div>
        {count !== undefined && count > 0 && stateBuy && user.email ? (
          <div className="cardCounter">
            <button
              onClick={() => {
                handleAddtoCart(bookId, count - 1);
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span className="countCard">{count}</span>
            <button
              onClick={() => {
                handleAddtoCart(bookId, count + 1);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="btn-price btn"
            onClick={() => {
              setStateBuy(true);
              if (!count) {
                handleAddtoCart(bookId, 1);
                setCount(1);
              } else {
                handleAddtoCart(bookId, count);
                setCount(count);
              }
            }}
          >
            <span className="price">${price} USD</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
