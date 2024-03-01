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
  return (
    <Layout user={user} hangleExit={handleExitBtn}>
      <StyledLogIn>
        <LoginForm />
        <img
          className="chel"
          src="/login/chel1.png"
          width={612}
          height={522}
          alt="chel"
        />
      </StyledLogIn>
    </Layout>
  );
}

export default LogInPage;
