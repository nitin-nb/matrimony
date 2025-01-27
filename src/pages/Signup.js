import React, { useState } from 'react';
import { Box, TextField, Button, Divider, MenuItem, Grid, Paper, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons for visibility toggle
import signupImage from '../assets/signup2.jpeg'; // Make sure to replace with your actual image path
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmation password field
    address: '',
    dob: '',
    height: '',
    bloodGroup: '',
    religion: '',
    motherTongue: '',
    maritalStatus: '',
    education: '',
    occupation: '',
    annualIncome: '',
    workingSector: '',
    caste: '', // New field for caste
    horoscope: '', // New field for horoscope
    star: '', // New field for star
    workLocation: '', // New field for work location
    familyMembers: '', // New field for family members
  });

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  // Sample options for dropdowns
  const createdByOptions = ['User', 'Admin'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Other'];
  const maritalStatus = ['Single', 'Married', 'Divorced', 'Widowed'];
  const workingSectors = ['Information Technology', 'Private', 'Govt'];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    // Store user data in local storage as JSON
    localStorage.setItem('userProfile', JSON.stringify(formData));

    console.log('Form Data:', formData);
    const jsonData = JSON.stringify(formData);
    console.log('Profile created:', jsonData);
    
    toast.success('Profile created successfully! Redirecting to login...');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '100%', maxWidth: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Image Section with Centered Text */}
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={signupImage}
            alt="Signup"
            sx={{
              width: '100%',
              height: '500px', // Reduced height
              objectFit: 'cover', // Maintain aspect ratio
              padding: 0, // Remove padding
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Find Your Perfect Match
          </Typography>
        </Box>

        {/* Back to Login Button */}
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button // Back to Login button
            variant="contained" // Same style as Submit button
            color="primary" // Same color as Submit button
            onClick={() => navigate('/login')} // Navigate to login page
            sx={{ width: '200px', marginBottom: 2, fontWeight: 600 }} // Added fontWeight
          >
            Back to Login
          </Button>
        </Box>

        <Box sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            {/* General Information Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                General Information
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Phone Number"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Password"
                InputLabelProps={{ style: { color: '#005f4b' } }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />

              <TextField
                type={showConfirmPassword ? 'text' : 'password'} // Toggle confirm password visibility
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Confirm Password"
                InputLabelProps={{ style: { color: '#005f4b' } }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />

              <TextField
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Full Address"
                multiline
                rows={2}
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                select
                name="country"
                value="India" // Static value for demonstration
                disabled
                fullWidth
                margin="normal"
                variant="outlined"
                label="Country"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              >
                <MenuItem value="India">India</MenuItem>
              </TextField>
              
              <TextField
                name="workLocation"
                value={formData.workLocation}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Work Location"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />
            </Grid>

            {/* Personal Details Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <TextField
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker()}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{ style: { color: '#005f4b' } }}
                InputProps={{
                  inputProps: {
                    max: new Date().toISOString().split("T")[0], // Prevent future dates
                  },
                }}
              />

              <TextField
                name="height"
                value={formData.height}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Height (cm)"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Blood Group"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              >
                <MenuItem value="" disabled>Select your blood group</MenuItem>
                {bloodGroups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Religion"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              >
                <MenuItem value="" disabled>Select your religion</MenuItem>
                {religions.map((religion) => (
                  <MenuItem key={religion} value={religion}>
                    {religion}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mother Tongue"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Caste"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                name="horoscope"
                value={formData.horoscope}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Horoscope"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                name="star"
                value={formData.star}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Star"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />

              <TextField
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Family Members"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              />
            </Grid>

            {/* Professional Details Section */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Professional Details
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Education Details"
                    InputLabelProps={{ style: { color: '#005f4b' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Occupation"
                    InputLabelProps={{ style: { color: '#005f4b' } }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Annual Income"
                    InputLabelProps={{ style: { color: '#005f4b' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    name="workingSector"
                    value={formData.workingSector}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Working Sector"
                    InputLabelProps={{ style: { color: '#005f4b' } }}
                  >
                    <MenuItem value="" disabled>Select your working sector</MenuItem>
                    {workingSectors.map((sector) => (
                      <MenuItem key={sector} value={sector}>
                        {sector}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Button Section */}
          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '200px', fontWeight: 600 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
      <ToastContainer /> {/* Add ToastContainer to render toast notifications */}
    </Box>
  );
};

export default Signup;