import { StyledHome } from './homePage.styled';
import DropDowns from './UIHome/DropDowns/DropDowns';
import Pagination from './UIHome/Pagination';
import CardHolder from './UIHome/CardHolder';
import { Layout } from '@book-store/BookStoreLibrary';
import { exitUser } from '../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { userEmailState } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';
import BannetAuth from './UIHome/Banners/BannetAuth';
import BannerDefault from './UIHome/Banners/BannerDefault';
import { changeSearchQuery } from '../../store/slices/bookSlice';

export function HomePage() {
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const bookState = useAppSelector((books) => books.books.book);
  const cart = useAppSelector((state) => state.books.cart);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);

  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };

  const hangleSetCearch = (SearchQuery: string) => {
    dispatch(changeSearchQuery(SearchQuery));
  };
  const likedBooks = bookState.filter((book) => book.liked === true);
  return (
    <Layout
      totalQuantity={totalQuantity}
      user={userEmail}
      hangleExit={handleExitBtn}
      hangleSetCearch={hangleSetCearch}
      likedCount={likedBooks.length}
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
