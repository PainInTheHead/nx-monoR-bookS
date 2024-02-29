import HomePage from './pages/Home/HomePage';
import { GlobalStyled } from './global.styled';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/Profile/ProfilePage';
import LogInPage from './pages/Login/LoginPage';
import RegistragionPage from './pages/Registration/Registration';

export function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <HomePage /> */}
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/registration" element={<RegistragionPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
