import { Layout } from '@book-store/BookStoreLibrary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { userEmailState, userState } from '../../utils/selectors';
import { StyledFavorites } from './Favorites.styled';
import {
  actionAddToCart,
  actionAddToFavorite,
  actionRequestCartBook,
} from '../../store/slices/bookSlice';
import { useEffect } from 'react';
import FavHolder from './FavHolder/FavHolder';
import FavBanner from './FavBanner/FavBanner';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((book) => book.books.book);
  const likedBooks = books.filter((book) => book.liked === true);
  const cart = useAppSelector((cart) => cart.books.cart);
  const user = useAppSelector(userState);
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const total = cart.reduce((sum, book) => sum + book.price * book.count, 0);
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    if (user.email) {
      dispatch(actionRequestCartBook());
    }
  }, [user, dispatch]);

  const hangleSetLikedBook = (bookId: number) => {
    dispatch(actionAddToFavorite(bookId));
  };

  const handleAddtoCart = (bookId: number, count: number) => {
    dispatch(actionAddToCart(bookId, count));
  };

  return (
    <Layout
      user={userEmail}
      hangleExit={handleExitBtn}
      totalQuantity={totalQuantity}
      likedCount={likedBooks.length}
    >
      <StyledFavorites>
        {likedBooks.length === 0 ? (
          <FavBanner />
        ) : (
          <FavHolder cart={cart} user={user} likedBooks={likedBooks} />
        )}
      </StyledFavorites>
    </Layout>
  );
};

export default FavoritesPage;
