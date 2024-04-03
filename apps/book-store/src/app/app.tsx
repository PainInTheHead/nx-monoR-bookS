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
import BooksDetails from './pages/bookDetails/BooksDetails';
import CartPage from './pages/Cart/CartPage';
import FavoritesPage from './pages/Favorites/Favorites';
import { actionRequestCartBook } from './store/slices/bookSlice';
import { appRoutes } from '@book-store/BookStoreLibrary';
import { LoaderPage } from '@book-store/BookStoreLibrary';
import useGetBooksUserEffect from './hooks/useGetBooks';
import { ThemeProvider } from 'styled-components';
import { theme } from '@book-store/BookStoreLibrary';

export function App() {
  const {
    homePath,
    cartPath,
    favoritesPath,
    profilePath,
    registrationPath,
    loginPath,
    bookPath,
  } = appRoutes;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getuserAction());
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (user.email) {
      dispatch(actionRequestCartBook());
    }
  }, [user, dispatch]);

  return isLoading ? (
    <LoaderPage />
  ) : (
    <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routes>
          <Route path={homePath} element={<HomePage />}></Route>
          <Route
            path={profilePath}
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path={cartPath}
            element={
              <RequireAuth>
                <CartPage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path={favoritesPath}
            element={
              <RequireAuth>
                <FavoritesPage />
              </RequireAuth>
            }
          ></Route>
          <Route path={registrationPath} element={<RegistragionPage />}></Route>
          <Route path={loginPath} element={<LogInPage />}></Route>
          <Route path={bookPath} element={<BooksDetails />}></Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
