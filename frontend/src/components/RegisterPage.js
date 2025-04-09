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
//   Alert,
//   Stepper,
//   Step,
//   StepLabel
// } from '@mui/material';
// import {
//   AccountCircle,
//   Lock,
//   Email,
//   Person,
//   Visibility,
//   VisibilityOff,
//   CheckCircleOutline
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [registerError, setRegisterError] = useState('');

//   const steps = ['Personal Information', 'Account Setup', 'Complete'];

//   const validateStep0 = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }
    
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateStep1 = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
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
    
//     // Clear registration error when user changes input
//     if (registerError) {
//       setRegisterError('');
//     }
//   };

//   const handleNext = () => {
//     let isValid = false;
    
//     if (activeStep === 0) {
//       isValid = validateStep0();
//     } else if (activeStep === 1) {
//       isValid = validateStep1();
//     }
    
//     if (isValid) {
//       setActiveStep(prevStep => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep(prevStep => prevStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (activeStep === steps.length - 1) {
//       // Placeholder for registration logic - will be replaced with actual backend integration later
//       console.log('Registration data:', formData);
      
//       // For demonstration, simulate registration success and navigate to login
//       // In a real app, this would be replaced with actual registration
//       navigate('/login');
//     } else {
//       handleNext();
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(prev => !prev);
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <Person color="primary" />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   error={!!errors.lastName}
//                   helperText={errors.lastName}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <Person color="primary" />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
//               <Button
//                 variant="outlined"
//                 onClick={() => navigate('/login')}
//                 sx={{ mr: 1 }}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleNext}
//               >
//                 Next
//               </Button>
//             </Box>
//           </>
//         );
//       case 1:
//         return (
//           <>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Email color="primary" />
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
//               autoComplete="new-password"
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
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="confirmPassword"
//               label="Confirm Password"
//               type={showConfirmPassword ? 'text' : 'password'}
//               id="confirmPassword"
//               autoComplete="new-password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock color="primary" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle confirm password visibility"
//                       onClick={toggleShowConfirmPassword}
//                       edge="end"
//                     >
//                       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
//               <Button
//                 onClick={handleBack}
//                 variant="outlined"
//               >
//                 Back
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleNext}
//               >
//                 Next
//               </Button>
//             </Box>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Box sx={{ textAlign: 'center', my: 3 }}>
//               <CheckCircleOutline sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
//               <Typography variant="h5" gutterBottom>
//                 Registration Complete!
//               </Typography>
//               <Typography variant="body1" color="text.secondary" paragraph>
//                 Your account has been successfully created. You can now log in to access your dashboard.
//               </Typography>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={() => navigate('/login')}
//               >
//                 Go to Login
//               </Button>
//             </Box>
//           </>
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <Container component="main" maxWidth="sm">
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
//           <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
//             Create Account
//           </Typography>

//           <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
          
//           {registerError && (
//             <Alert severity="error" sx={{ mb: 3 }}>
//               {registerError}
//             </Alert>
//           )}
          
//           <form onSubmit={handleSubmit}>
//             {getStepContent(activeStep)}
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

// export default RegisterPage;




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
  Stepper,
  Step,
  StepLabel,
  CircularProgress
} from '@mui/material';
import {
  AccountCircle,
  Lock,
  Email,
  Person,
  Visibility,
  VisibilityOff,
  CheckCircleOutline
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const steps = ['Personal Information', 'Account Setup', 'Complete'];

  const validateStep0 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
    
    // Clear registration error when user changes input
    if (registerError) {
      setRegisterError('');
    }
  };

  const handleNext = () => {
    let isValid = false;
    
    if (activeStep === 0) {
      isValid = validateStep0();
    } else if (activeStep === 1) {
      isValid = validateStep1();
      
      if (isValid) {
        // Submit registration
        handleRegistration();
        return;
      }
    }
    
    if (isValid) {
      setActiveStep(prevStep => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleRegistration = async () => {
    setLoading(true);
    
    try {
      const { confirmPassword, ...registrationData } = formData;
      await axios.post('http://localhost:5000/api/auth/register', registrationData);
      
      setRegistrationSuccess(true);
      setActiveStep(2); // Move to success step
    } catch (error) {
      setRegisterError(
        error.response?.data?.message || 
        'Registration failed. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      navigate('/login');
    } else {
      handleNext();
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/login')}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
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
              autoComplete="new-password"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={toggleShowConfirmPassword}
                      edge="end"
                      disabled={loading}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              disabled={loading}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                onClick={handleBack}
                variant="outlined"
                disabled={loading}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleRegistration}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
              </Button>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box sx={{ textAlign: 'center', my: 3 }}>
              <CheckCircleOutline sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Registration Complete!
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Your account has been successfully created. You can now log in to access your dashboard.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate('/login')}
              >
                Go to Login
              </Button>
            </Box>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container component="main" maxWidth="sm">
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
          <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Create Account
          </Typography>

          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {registerError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {registerError}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
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

export default RegisterPage;
