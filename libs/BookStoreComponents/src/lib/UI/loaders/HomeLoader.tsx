import { Box, CircularProgress } from '@mui/material';
import type { MouseEventHandler } from 'react';



export function LoaderPage() {
  return (
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
  );
}

export default LoaderPage;
