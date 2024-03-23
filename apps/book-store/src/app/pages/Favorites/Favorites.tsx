import { EmptyBanner, Layout } from '@book-store/BookStoreLibrary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { userEmailState, userState } from '../../utils/selectors';
import { StyledFavorites } from './Favorites.styled';
import {
  actionRequestCartBook,
} from '../../store/slices/bookSlice';
import { useEffect } from 'react';
import FavHolder from './FavHolder/FavHolder';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((book) => book.books.book);
  const likedBooks = books.filter((book) => book.liked === true);
  const cart = useAppSelector((cart) => cart.books.cart);
  const user = useAppSelector(userState);
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
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




  return (
    <Layout
      user={userEmail}
      hangleExit={handleExitBtn}
      totalQuantity={totalQuantity}
      likedCount={likedBooks.length}
    >
      <StyledFavorites>
        {likedBooks.length === 0 ? (
          <EmptyBanner place='favorites'/>
        ) : (
          <FavHolder cart={cart} user={user} likedBooks={likedBooks} />
        )}
      </StyledFavorites>
    </Layout>
  );
};

export default FavoritesPage;
