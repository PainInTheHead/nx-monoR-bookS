import HomePage from './pages/Home/HomePage';
import { GlobalStyled } from './global.styled';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/Profile/ProfilePage';
import LogInPage from './pages/Login/LoginPage';
import RegistragionPage from './pages/Registration/Registration';
import RequireAuth from './utils/requreAuth';
import { useEffect, useState } from 'react';
import { getuserAction } from './store/slices/userSlice';
import { useAppDispatch, useAppSelector } from './hooks/hookStore';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BooksDetails from './pages/bookDetails/BooksDetails';
import CartPage from './pages/Cart/CartPage';
import FavoritesPage from './pages/Favorites/Favorites';
import {
  actionGetBooksUser,
  actionRequestCartBook,
  setPrices,
} from './store/slices/bookSlice';
import { userState } from './utils/selectors';

export function App() {
  const dispatch = useAppDispatch();
  const genresState = useAppSelector((books) => books.books.genres);
  const currentPage = useAppSelector((books) => books.books.currentPage) + 1;
  const priceBetween = useAppSelector((state) => state.books.prices);
  const sortBy = useAppSelector((state) => state.books.sortBy);
  const prices = priceBetween.map((price) => Math.floor(price / 100));
  const searchQuery = useAppSelector((state) => state.books.searchQuery);
  const user = useAppSelector(userState);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getuserAction());
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(
      actionGetBooksUser(genresState, currentPage, prices, sortBy, searchQuery)
    );
  }, [
    user,
    setPrices,
    genresState,
    currentPage,
    priceBetween,
    sortBy,
    dispatch,
    searchQuery,
  ]);

  useEffect(() => {
    if (user.email) {
      dispatch(actionRequestCartBook());
    }
  }, [user, dispatch]);
  return isLoading ? (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={100} color="success" />
    </Box>
  ) : (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <FavoritesPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/registration" element={<RegistragionPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/book/:id" element={<BooksDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
