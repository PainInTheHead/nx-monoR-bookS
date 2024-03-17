import { StyledHome } from './homePage.styled';
import DropDowns from './UIHome/DropDowns/DropDowns';
import Pagination from './UIHome/Pagination';
import CardHolder from './UIHome/CardHolder';
import { Cart, Layout } from '@book-store/BookStoreLibrary';
import { exitUser } from '../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { userState, userEmailState } from '../../utils/selectors';
import { Link, useNavigate } from 'react-router-dom';
import BannetAuth from './UIHome/Banners/BannetAuth';
import BannerDefault from './UIHome/Banners/BannerDefault';
import { useEffect, useRef } from 'react';
import {
  actionAddToCart,
  actionGetBooks,
  actionGetBooksUser,
  actionRequestCartBook,
  changeSearchQuery,
  setPrices,
  setSortBy,
} from '../../store/slices/bookSlice';

export function HomePage() {
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const user = useAppSelector(userState);
  const bookState = useAppSelector((books) => books.books.book);
  const genresState = useAppSelector((books) => books.books.genres);
  const currentPage = useAppSelector((books) => books.books.currentPage) + 1;
  const priceBetween = useAppSelector((state) => state.books.prices);
  const sortBy = useAppSelector((state) => state.books.sortBy);
  const prices = priceBetween.map((price) => Math.floor(price / 100));
  const cart = useAppSelector((state) => state.books.cart);
   const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
const searchQuery = useAppSelector((state) => state.books.searchQuery)
  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };
  useEffect(() => {
    if (user.email) {
      dispatch(
        actionGetBooksUser(
          genresState,
          currentPage,
          prices,
          sortBy,
          searchQuery
        )
      );
    } else {
      dispatch(
        actionGetBooks(genresState, currentPage, prices, sortBy, searchQuery)
      );
    }
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

  const hangleSetCearch = (SearchQuery : string) => {
    dispatch(changeSearchQuery(SearchQuery));
  };
  return (
    <Layout
      totalQuantity={totalQuantity}
      user={userEmail}
      hangleExit={handleExitBtn}
      hangleSetCearch={hangleSetCearch}
    >
      <StyledHome>
        <BannerDefault />
        <div className="catalog-filter">
          <h1 className={`h1-home-page`}>Catalog</h1>
          <DropDowns />
        </div>
        <CardHolder />
        <Pagination />
        {!userEmail && <BannetAuth />}
      </StyledHome>
    </Layout>
  );
}

export default HomePage;
