import { StyledLogIn } from './registration.styled';
import LoginForm from './Form/Form';
import { Layout } from '@book-store/BookStoreLibrary';
import { useAppSelector } from '../../hooks/hookStore';
import { useAppDispatch } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';

export function RegistragionPage() {
  const user = useAppSelector(state => state.user.user.email);
  const dispatch = useAppDispatch();
  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
  };
  const books = useAppSelector(state => state.books.book)
  const cart = useAppSelector((state) => state.books.cart);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
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

export default RegistragionPage;
