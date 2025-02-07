import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginBG from '../assets/4.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Predefined credentials
  const predefinedEmail = 'boss@gmail.com';
  const predefinedPassword = 'Boss@1234';

  // Initialize local storage with default credentials if not already set
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (!userProfile) {
      const defaultProfile = {
        email: predefinedEmail,
        password: predefinedPassword,
      };
      localStorage.setItem('userProfile', JSON.stringify(defaultProfile));
    }
  }, []);

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    console.log('Attempting to log in with:', email, password); // Debugging log

    // Check against predefined credentials
    if (email === predefinedEmail && password === predefinedPassword) {
      toast.success('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to dashboard or desired page
      }, 2000);
      return;
    }

    // Check against registered users in local storage
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
      console.log('User profile found in local storage:', userProfile); // Debugging log
      if (email === userProfile.email && password === userProfile.password) {
        toast.success('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard or desired page
        }, 2000);
        return;
      }
    }

    // If login fails
    toast.error('Invalid email or password!');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Image Section */}
      <Box
        sx={{
          flex: '0 0 70%',
          backgroundImage: `url(${loginBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Form Section */}
      <Box
        sx={{
          flex: '0 0 30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          boxShadow: 3,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h4" gutterBottom color="text.primary">
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
          InputLabelProps={{
            sx: {
              color: '#005f4b',
              '&.Mui-focused': {
                color: '#005f4b',
              },
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
          sx={{ mb: 2 }}
          InputLabelProps={{
            sx: {
              color: '#005f4b',
              '&.Mui-focused': {
                color: '#005f4b',
              },
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <Button
          variant="contained"
          sx={{
            color: '#005f4b',
            '&:hover': {
              backgroundColor: '#004a3d',
              color: 'white',
            },
            mb: 2,
            fontWeight: 'bold',
          }}
          fullWidth
          onClick={handleLogin} // Call handleLogin on button click
        >
          Login
        </Button>
        <Divider sx={{ width: '100%', mb: 2 }}>or</Divider>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ mb: 2 }}
        >
          Login with Google
        </Button>
        <Typography variant="body2" color="text.primary">
          Don't have an account?{' '}
          <Typography
            component="span"
            color="primary"
            sx={{ fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' }}
            onClick={handleSignUpClick}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Login;
