import { Layout } from '@book-store/BookStoreLibrary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { userEmailState, userState } from '../../utils/selectors';
import { StyledCart } from './CartPage.styled';
import CartBook from './CartBook/CartBook';
import { actionRequestCartBook } from '../../store/slices/bookSlice';
import { useEffect } from 'react';
import EmptyBanner from './EmptyBanner/EmptyBanners';
import CartHolder from './CartHolder/CartHolder';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const cart = useAppSelector((state) => state.books.cart);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const total = cart.reduce(
    (sum, book) => sum + (book.price / 100) * book.count,
    0
  );
  const books = useAppSelector((state) => state.books.book);
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };
  const user = useAppSelector(userState);

  useEffect(() => {
    if (user.email) {
      dispatch(actionRequestCartBook());
    }
  }, [user, dispatch]);
  const likedBooks = books.filter((book) => book.liked === true);

  return (
    <Layout
      user={userEmail}
      hangleExit={handleExitBtn}
      totalQuantity={totalQuantity}
      likedCount={likedBooks.length}
    >
      <StyledCart>
        {cart.length === 0 ? (
          <EmptyBanner />
        ) : (
          <CartHolder cart={cart} total={total} />
        )}
      </StyledCart>
    </Layout>
  );
};

export default CartPage;
