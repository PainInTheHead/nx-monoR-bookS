import { useState } from 'react';
import { StyledCartBook } from './CartBook.styled';
import { actionAddToCart } from '../../../store/slices/bookSlice';
import { useAppDispatch } from '../../../hooks/hookStore';
import { useNavigate } from 'react-router-dom';

interface PropsCart {
  bookId: number;
  title: string;
  author: string;
  price: number;
  count: number;
  cover: string;
}

const CartBook: React.FC<PropsCart> = ({
  bookId,
  title,
  author,
  price,
  count,
  cover,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateFunction = (path: string) => {
    navigate(path);
  };
  const formattedPrice = (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const currentPrice = (Number(formattedPrice.replace(/[^0-9.-]+/g, '')) * count).toFixed(2)


  const handleClick = (count : number) => {
    dispatch(actionAddToCart(bookId, count, navigateFunction));
  };


  return (
    <StyledCartBook>
      <div className="book_cover">
        <img src={cover} alt="book" />
      </div>
      <div className="about_cart_book">
        <h1 className="h1cart">{title}</h1>
        <h2 className="h2cart">{author}</h2>
        <div className="cardCounter">
          <button className="btn_count" onClick={() => handleClick(count - 1)}>
            -
          </button>
          <span className="countCard">{count}</span>
          <button className="btn_count" onClick={() => handleClick(count + 1)}>
            +
          </button>

          <button className="delete" onClick={() => handleClick(0)}>
            <img src="/cart/Delete.png" alt="delete" />
          </button>
        </div>
        <h3 className="total_price__book">
          ${currentPrice} USD
        </h3>
      </div>
    </StyledCartBook>
  );
};

export default CartBook;
