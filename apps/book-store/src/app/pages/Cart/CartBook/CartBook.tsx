import { useState } from 'react';
import { StyledCartBook } from './CartBook.styled';
import {
  incrementCart,
  actionAddToCart,
} from '../../../store/slices/bookSlice';
import { useAppDispatch } from '../../../hooks/hookStore';

interface PropsCart {
  bookId: number;
  title: string;
  author: string;
  price: number;
  count: number;
}

const CartBook: React.FC<PropsCart> = ({
  bookId,
  title,
  author,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();
  //   const [count, setCount] = useState(0);
  return (
    <StyledCartBook>
      <div className="book_cover">
        <img src="/card/covers/1.png" alt="book" />
      </div>
      <div className="about_cart_book">
        <h1 className="h1cart">{title}</h1>
        <h2 className="h2cart">{author}</h2>
        <div className="cardCounter">
          <button
            className="btn_count"
            onClick={() => {
              dispatch(actionAddToCart( bookId, count - 1));
            }}
          >
            -
          </button>
          <span className="countCard">{count}</span>
          <button
            className="btn_count"
            onClick={() => {
              dispatch(actionAddToCart(bookId, count + 1))
            }}
          >
            +
          </button>

          <button className="delete">
            <img src="/cart/Delete.png" alt="delete" />
          </button>
        </div>
        <h3 className="total_price__book">${price} USD </h3>
      </div>
    </StyledCartBook>
  );
};

export default CartBook;
