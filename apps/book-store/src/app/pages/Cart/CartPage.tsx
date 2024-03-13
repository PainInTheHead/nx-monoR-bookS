import { Layout } from '@book-store/BookStoreLibrary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { userEmailState } from '../../utils/selectors';
import { StyledCart } from './CartPage.styled';
import CartBook from './CartBook/CartBook';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const cart = useAppSelector((state) => state.books.cart);
  const total = cart.reduce((sum, book) => sum + book.price, 0);
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Layout user={userEmail} hangleExit={handleExitBtn}>
      <StyledCart>
        {cart.length === 0 ? (
          <div className='empty_con'>
            <img src="/cart/Books.png" alt="Books" />
            <div className='about_empty'>
              <h1 className='cart_header'>Your cart is empty</h1>
              <p className='description_cart'>
                Add items to cart to make a purchase.Go to the catalogue no.
              </p>
              <button
                className="btn btn_checkout"
                onClick={() => navigate('/')}
              >
                Go to catalog
              </button>
            </div>
          </div>
        ) : (
          <>
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
                <button className="btn btn_continue">Continue shopping</button>
                <button className="btn btn_checkout">Checkout</button>
              </div>
            </div>
          </>
        )}
      </StyledCart>
    </Layout>
  );
};

export default CartPage;
