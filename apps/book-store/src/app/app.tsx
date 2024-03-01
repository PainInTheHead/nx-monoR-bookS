import HomePage from './pages/Home/HomePage';
import { GlobalStyled } from './global.styled';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/Profile/ProfilePage';
import LogInPage from './pages/Login/LoginPage';
import RegistragionPage from './pages/Registration/Registration';
import RequireAuth from './utils/requreAuth';
import { useEffect, useState } from 'react';
import { getuserAction } from './store/slices/userSlice';
import { useAppDispatch } from './hooks/hookStore';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function App() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getuserAction());
    setLoading(false);
  }, []);
  return isLoading ? (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={100} color="success" />
    </Box>
  ) : (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/registration" element={<RegistragionPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
