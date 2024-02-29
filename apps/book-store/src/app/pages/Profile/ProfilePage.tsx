import FormChangeProfile from './FormInfoUser/Form';
import { StyledPageProfile } from './profile.styled';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import { Layout } from '@book-store/BookStoreLibrary';

export function ProfilePage() {
  return (
    <Layout>
      <StyledPageProfile>
        <ProfileAvatar />
        <FormChangeProfile />
      </StyledPageProfile>
    </Layout>
  );
}

export default ProfilePage;
