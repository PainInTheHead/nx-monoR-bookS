import { StyledLogIn } from './registration.styled';
import LoginForm from './Form/Form';
import { Layout } from '@book-store/BookStoreLibrary';
import { useAppSelector } from '../../hooks/hookStore';
import { userEmailState } from '../../utils/selectors';
import { useAppDispatch } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';


export function RegistragionPage() {
  const user = useAppSelector(userEmailState)
  const dispatch = useAppDispatch()
  const handleExitBtn = () => {
    dispatch(exitUser())
    localStorage.clear()
  }
  return (
    <Layout user={user}  hangleExit={handleExitBtn}>
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

export default RegistragionPage;
