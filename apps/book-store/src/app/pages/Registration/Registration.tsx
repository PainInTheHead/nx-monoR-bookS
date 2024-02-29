import { StyledLogIn } from './registration.styled';
import LoginForm from './Form/Form';
import { Layout } from '@book-store/BookStoreLibrary';

export function RegistragionPage() {
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

export default RegistragionPage;
