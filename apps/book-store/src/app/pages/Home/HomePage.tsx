import { StyledHome } from './homePage.styled';
import DropDowns from './UIHome/DropDowns/DropDowns';
import BookSlider from './UIHome/Pagination';
import CardHolder from './UIHome/CardHolder';
import { Layout } from '@book-store/BookStoreLibrary';
import { useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/hookStore';
import { userState, userEmailState } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';

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
        <div className="banner-header">
          <img alt="banner" width="1280" height="400" src="/banner.png" />
        </div>
        <div className="catalog-filter">
          <h1 className={`h1-home-page`}>Catalog</h1>
          <DropDowns />
        </div>
        <CardHolder />
        <BookSlider />
        {!userEmail && (
          <img
            src="/banner/bannerLow.svg"
            width={1280}
            height={462}
            alt="banner-low"
          />
        )}
      </StyledHome>
    </Layout>
  );
}

export default HomePage;
