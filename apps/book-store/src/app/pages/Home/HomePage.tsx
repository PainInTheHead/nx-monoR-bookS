import { StyledHome } from './homePage.styled';
import DropDowns from './UIHome/DropDowns/DropDowns';
import BookSlider from './UIHome/Pagination';
import CardHolder from './UIHome/CardHolder';
import { Layout } from '@book-store/BookStoreLibrary';
import { useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/hookStore';
import { userState, userEmailState } from '../../utils/selectors';
import { Link, useNavigate } from 'react-router-dom';
import BannetAuth from './UIHome/Banners/BannetAuth';
import BannerDefault from './UIHome/Banners/BannerDefault';

export function HomePage() {
  const navigate = useNavigate();
  const userEmail = useAppSelector(userEmailState);
  const user = useAppSelector(userState);
  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };
  return (
    <Layout user={userEmail} hangleExit={handleExitBtn}>
      <StyledHome>
        <BannerDefault />
        <div className="catalog-filter">
          <h1 className={`h1-home-page`}>Catalog</h1>
          <DropDowns />
        </div>
        <CardHolder />
        <BookSlider />
        {!userEmail && <BannetAuth />}
      </StyledHome>
    </Layout>
  );
}

export default HomePage;
