import FormChangeProfile from './FormInfoUser/Form';
import { StyledPageProfile } from './profile.styled';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import { Layout } from '@book-store/BookStoreLibrary';
import { userEmailState } from '../../utils/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hookStore';
import { exitUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleExitBtn = () => {
    dispatch(exitUser())
    localStorage.clear()
    navigate('/login')
  }
  const user = useAppSelector(userEmailState)
  return (
    <Layout user={user}  hangleExit={handleExitBtn}>
      <StyledPageProfile>
        <ProfileAvatar />
        <FormChangeProfile />
      </StyledPageProfile>
    </Layout>
  );
}

export default ProfilePage;
