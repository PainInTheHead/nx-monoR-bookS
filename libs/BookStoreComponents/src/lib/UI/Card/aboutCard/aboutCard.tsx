// import Rating from "../ratingStars/Rating";
import Rating from '@mui/material/Rating';
import RatingBook from '../ratingStars/RatingBook';
import { useEffect, useState } from 'react';
import { Cart, User } from '../Cards';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const navigateFunction = (path: string) => {
    navigate(path);
  };
  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement; // приводим тип event.target к HTMLElement
    if (
      target &&
      !target.closest('.cardCounter') &&
      !target.closest('.btn-price')
    ) {
      setStateBuy(false);
    }
  };

  const formattedPrice = (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="about-card" onClick={(event) => handleClickOutside(event)}>
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
            <span className="price">{formattedPrice} USD</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
