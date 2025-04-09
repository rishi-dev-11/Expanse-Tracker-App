// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Link,
//   Grid,
//   InputAdornment,
//   IconButton,
//   Alert
// } from '@mui/material';
// import {
//   AccountCircle,
//   Lock,
//   Visibility,
//   VisibilityOff
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginError, setLoginError] = useState('');

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
    
//     // Clear login error when user changes input
//     if (loginError) {
//       setLoginError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     // Placeholder for login logic - will be replaced with actual backend integration later
//     console.log('Login attempt with:', formData);
    
//     // For demonstration, simulate login success and navigate to dashboard
//     // In a real app, this would be replaced with actual authentication
//     // For now, we'll just redirect to dashboard
//     navigate('/dashboard');
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           marginBottom: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Paper 
//           elevation={3} 
//           sx={{ 
//             p: 4, 
//             width: '100%',
//             borderRadius: 2,
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//           }}
//         >
//           <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}>
//             Log In
//           </Typography>
          
//           {loginError && (
//             <Alert severity="error" sx={{ mb: 3 }}>
//               {loginError}
//             </Alert>
//           )}
          
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle color="primary" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock color="primary" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={toggleShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, py: 1.5 }}
//             >
//               Sign In
//             </Button>
//             <Grid container justifyContent="space-between">
//               <Grid item>
//                 <Link href="#" variant="body2" sx={{ color: 'primary.main' }}>
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link 
//                   variant="body2" 
//                   sx={{ color: 'primary.main', cursor: 'pointer' }}
//                   onClick={() => navigate('/register')}
//                 >
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//         <Button
//           variant="outlined"
//           sx={{ mt: 3 }}
//           onClick={() => navigate('/')}
//         >
//           Back to Home
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default LoginPage;





import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Grid,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear login error when user changes input
    if (loginError) {
      setLoginError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Save token and user data in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setLoginError(
        error.response?.data?.message || 
        'Login failed. Please check your credentials and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            width: '100%',
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}>
            Log In
          </Typography>
          
          {loginError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {loginError}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                ),
              }}
              disabled={loading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              disabled={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: 'primary.main' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link 
                  variant="body2" 
                  sx={{ color: 'primary.main', cursor: 'pointer' }}
                  onClick={() => navigate('/register')}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Button
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
