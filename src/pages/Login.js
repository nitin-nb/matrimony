import React from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import loginBG from '../assets/4.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
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
          InputProps={{
            sx: {
              '& input::placeholder': {
                color: '#005f4b',
              },
              '& input:focus::placeholder': {
                color: '#005f4b',
              },
            },
          }}
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
          InputProps={{
            sx: {
              '& input::placeholder': {
                color: '#005f4b',
              },
              '& input:focus::placeholder': {
                color: '#005f4b',
              },
            },
          }}
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
    </Box>
  );
};
  
export default Login;
