import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  AccountBalanceWallet, 
  TrendingUp, 
  Assessment, 
  Security 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const features = [
    {
      icon: <AccountBalanceWallet sx={{ fontSize: 40 }} />,
      title: 'Easy Expense Tracking',
      description: 'Track your daily expenses with just a few clicks'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Smart Analytics',
      description: 'Get insights into your spending patterns'
    },
    {
      icon: <Assessment sx={{ fontSize: 40 }} />,
      title: 'Detailed Reports',
      description: 'Generate comprehensive expense reports'
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Secure & Private',
      description: 'Your financial data is safe with us'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Smart Expense Tracker
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Take control of your finances with our easy-to-use expense tracking solution
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
                onClick={() => navigate('/dashboard')}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/expense-tracker-illustration.svg"
                alt="Expense Tracker"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  display: { xs: 'none', md: 'block' },
                  mx: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
            }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Start Tracking Your Expenses?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of users who are already managing their finances better
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{ px: 4 }}
            >
              Start Free Trial
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 