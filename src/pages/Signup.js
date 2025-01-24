import React, { useState } from 'react';
import { Box, TextField, Button, Divider, MenuItem, Grid, Paper, Typography } from '@mui/material';
import signupImage from '../assets/signup2.jpeg'; // Make sure to replace with your actual image path

const Signup = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    createdBy: '',
    phoneNumber: '',
    email: '',
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
  });

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
    console.log('Form Data:', formData);
    // Add your form submission logic here
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

        <Box sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            {/* General Information Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                General Information
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <TextField
                select
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Profile Created By"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              >
                <MenuItem value="" disabled>Select an option</MenuItem>
                {createdByOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

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
                label="Height"
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
                select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Marital Status"
                InputLabelProps={{ style: { color: '#005f4b' } }}
              >
                <MenuItem value="" disabled>Select your marital status</MenuItem>
                {maritalStatus.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
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

          {/* Submit Button */}
          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '200px' }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;