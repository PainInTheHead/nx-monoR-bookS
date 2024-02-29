import { StyledLogIn } from './login.styled';
import LoginForm from './Form/Form';
import { Layout } from '@book-store/BookStoreLibrary';

export function LogInPage() {
  return (
    <Layout>
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
