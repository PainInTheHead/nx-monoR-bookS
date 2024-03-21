import { StyledLogIn } from './login.styled';
import LoginForm from './Form/Form';
import { Layout } from '@book-store/BookStoreLibrary';
import { userEmailState } from '../../utils/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';

export function LogInPage() {
  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
  };
  const user = useAppSelector(userEmailState);
  const cart = useAppSelector((state) => state.books.cart);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const books = useAppSelector((state) => state.books.book);
  const likedBooks = books.filter((book) => book.liked === true);

  return (
    <Layout
      user={user}
      hangleExit={handleExitBtn}
      totalQuantity={totalQuantity}
      likedCount={likedBooks.length}
    >
      <StyledLogIn>
        <LoginForm />
        <img
          className="chel"
          src="/login/chel1.png"
          alt="chel"
        />
      </StyledLogIn>
    </Layout>
  );
}

export default LogInPage;
