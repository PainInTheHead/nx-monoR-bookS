import { Cart, CustomButton } from '@book-store/BookStoreLibrary';
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
          Total: <span>{total.toFixed(2)}$</span>{' '}
        </h1>
        <div className="btns_total">
          <CustomButton
            color=""
            text="Continue shopping"
            type="submit"
            width="244px"
            onClick={() => navigate(appRoutes.homePath)}
          />
          <CustomButton
            color=" #344966"
            text="Checkout"
            type="submit"
            width="160px"
          />
        </div>
      </div>
    </StyledCartHolder>
  );
};

export default CartHolder;
