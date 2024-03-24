import { Cart } from '@book-store/BookStoreLibrary';
import { StyledCartHolder } from './CartHolder.styled';
import CartBook from '../CartBook/CartBook';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@book-store/BookStoreLibrary';

interface PropsCartHolder {
  cart: Cart[];
  total: number;
}

const CartHolder: React.FC<PropsCartHolder> = ({ cart, total }) => {
  const navigate = useNavigate();
  return (
    <StyledCartHolder>
      <div className="border_con">
        {cart.map((book) => {
          return <CartBook key={book.bookId} {...book} />;
        })}
      </div>
      <div className="total_price">
        <h1 className="total_header">
          Total: <span>{total}$</span>{' '}
        </h1>
        <div className="btns_total">
          <button
            onClick={() => navigate(appRoutes.bookPath)}
            className="btn btn_continue"
          >
            Continue shopping
          </button>
          <button className="btn btn_checkout">Checkout</button>
        </div>
      </div>
    </StyledCartHolder>
  );
};

export default CartHolder;
