import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';

// Styled Chip for rectangular shape
const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  padding: '8px 16px',
  backgroundColor: '#fbc300',
  color: '#fff',
  fontWeight: 'bold',
  marginRight: '8px',
}));

const ProfileDetails = () => {
  const location = useLocation();
  const { state } = location;
  const user = state.user;

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      {/* Profile Image */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img
          src={user.image} // Assuming user object has an image property
          alt={user.name}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </Box>

      {/* Action Badges */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <StyledChip
          icon={<FontAwesomeIcon icon={faHeart} style={{ color: '#fff' }} />}
          label="Share Interest"
        />
        <StyledChip
          icon={<FontAwesomeIcon icon={faComment} style={{ color: '#fff' }} />}
          label="Message"
        />
      </Box>

      {/* Name and Age */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        {user.name}, {user.age}
      </Typography>

      {/* User Details in Rectangular Cards */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={3}>
          <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Religion</Typography>
              <Typography>{user.religion || 'Christian'}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Occupation</Typography>
              <Typography>{user.occupation || 'Software Engineer'}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">School</Typography>
              <Typography>{user.school || 'XYZ University'}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Height</Typography>
              <Typography>{user.height || '170 cm'}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* About Me Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {user.aboutMe || 'I am a passionate individual with a love for technology and innovation.'}
      </Typography>

      {/* Interests as Badges */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Interests
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 4 }}>
        {user.interests && user.interests.length > 0 ? (
          user.interests.map((interest, index) => (
            <StyledChip key={index} label={interest} />
          ))
        ) : (
          <Typography>No interests available</Typography> // Fallback message if no interests
        )}
      </Box>

      {/* Family Details and Lifestyle */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Family Details
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {user.familyDetails || 'I come from a loving family with strong values.'}
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Lifestyle
      </Typography>
      <Typography variant="body1">
        {user.lifestyle || 'I enjoy outdoor activities, reading, and spending time with friends.'}
      </Typography>
    </Box>
  );
};

export default ProfileDetails;
