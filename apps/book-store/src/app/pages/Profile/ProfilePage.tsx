import FormChangeProfile from './FormInfoUser/Form';
import { StyledPageProfile } from './profile.styled';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import { Layout } from '@book-store/BookStoreLibrary';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@book-store/BookStoreLibrary';

export function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate(appRoutes.loginPath);
  };
  const user = useAppSelector((state) => state.user.user.email);
  const cart = useAppSelector((state) => state.books.cart);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const books = useAppSelector(state => state.books.book)
  const likedBooks = books.filter((book) => book.liked === true);
  return (
    <Layout
    user={user}
    hangleExit={handleExitBtn}
    totalQuantity={totalQuantity}
    likedCount={likedBooks.length}
    >
      <StyledPageProfile>
        <ProfileAvatar />
        <FormChangeProfile />
      </StyledPageProfile>
    </Layout>
  );
}

export default ProfilePage;
