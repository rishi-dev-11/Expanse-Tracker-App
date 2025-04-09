// import React from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   Box,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import { AccountBalanceWallet } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isDashboard = location.pathname === '/dashboard';

//   return (
//     <AppBar 
//       position="static" 
//       elevation={1}
//       sx={{
//         background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
//         mb: 4
//       }}
//     >
//       <Toolbar>
//         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//           <AccountBalanceWallet sx={{ mr: 2 }} />
//           <Typography 
//             variant="h6" 
//             component="div" 
//             sx={{ 
//               fontWeight: 700,
//               cursor: 'pointer'
//             }}
//             onClick={() => navigate('/')}
//           >
//             Expense Tracker
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button 
//             color="inherit" 
//             onClick={() => navigate('/')}
//             sx={{
//               opacity: isDashboard ? 0.7 : 1,
//               '&:hover': {
//                 opacity: 1
//               }
//             }}
//           >
//             Home
//           </Button>
//           <Button 
//             color="inherit" 
//             onClick={() => navigate('/dashboard')}
//             sx={{
//               opacity: isDashboard ? 1 : 0.7,
//               '&:hover': {
//                 opacity: 1
//               }
//             }}
//           >
//             Dashboard
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar; 


// updated code1

import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const isLoggedIn = path === '/dashboard'; // For demo purposes, we'll consider user logged in only when on dashboard

  return (
    <AppBar 
      position="static" 
      elevation={1}
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
        mb: 4
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <AccountBalanceWallet sx={{ mr: 2 }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            Expense Tracker
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            onClick={() => navigate('/')}
            sx={{
              opacity: path === '/' ? 1 : 0.7,
              '&:hover': {
                opacity: 1
              }
            }}
          >
            Home
          </Button>
          
          {isLoggedIn ? (
            <>
              <Button 
                color="inherit" 
                onClick={() => navigate('/dashboard')}
                sx={{
                  opacity: path === '/dashboard' ? 1 : 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                Dashboard
              </Button>
              <Button 
                color="inherit" 
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                onClick={() => {
                  // This would normally clear auth state
                  navigate('/');
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                color="inherit" 
                onClick={() => navigate('/login')}
                sx={{
                  opacity: path === '/login' ? 1 : 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                Login
              </Button>
              <Button 
                color="inherit" 
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
