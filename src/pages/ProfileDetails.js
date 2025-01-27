import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';

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
  const user1 = state.user;
  // Static JSON data
  const user = {
    name: "Boss",
    phoneNumber: "9999999999",
    email: "boss@gmail.com",
    password: "Boss@1234",
    confirmPassword: "Boss@1234",
    address: "coimbatore",
    dob: "1995-01-01",
    height: "170",
    bloodGroup: "O+",
    religion: "Hindu",
    motherTongue: "tamil",
    maritalStatus: "",
    education: "graduated",
    occupation: "software",
    annualIncome: "300000",
    workingSector: "Private",
    caste: "nadar",
    horoscope: "kumbam",
    star: "sadhayam",
    workLocation: "coimbatore",
    familyMembers: "5",
    image: "path/to/image.jpg", // Add a placeholder image path if needed
    interests: ["Technology", "Reading", "Traveling"], // Example interests
    aboutMe: "I am a passionate individual with a love for technology and innovation.",
    familyDetails: "I come from a loving family with strong values.",
    lifestyle: "I enjoy outdoor activities, reading, and spending time with friends."
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        {/* Profile Image */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center', height: '100%' }}>
          <img
            src={user1.image} // Assuming user object has an image property
            alt={user1.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid>

        {/* Main Details */}
        <Grid item xs={12} sm={8}>
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

          {/* Name, Age, Phone Number, Address, and DOB */}
          <Typography variant="h4" align="left" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            {user.name}, {user.dob ? new Date().getFullYear() - new Date(user.dob).getFullYear() : ''} {/* Calculate age */}
          </Typography>
          <Typography variant="h6" align="left" sx={{ marginBottom: 1 }}>
            Phone: {user.phoneNumber}
          </Typography>
          <Typography variant="h6" align="left" sx={{ marginBottom: 1 }}>
            Address: {user.address}
          </Typography>
          <Typography variant="h6" align="left" sx={{ marginBottom: 4 }}>
            DOB: {user.dob}
          </Typography>

          {/* User Details in Rectangular Cards */}
          <Grid container spacing={2} justifyContent="flex-start" sx={{ marginBottom: 4 }}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
                <CardContent>
                  <Typography variant="h6">Religion</Typography>
                  <Typography>{user.religion || 'Christian'}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
                <CardContent>
                  <Typography variant="h6">Occupation</Typography>
                  <Typography>{user.occupation || 'Software Engineer'}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#005f4b', color: '#fff' }}>
                <CardContent>
                  <Typography variant="h6">Height</Typography>
                  <Typography>{user.height || '170 cm'}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* New Card for Additional Details */}
          <Card sx={{ backgroundColor: '#005f4b', color: '#fff', marginBottom: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Additional Details
              </Typography>
              <Typography variant="h6">Blood Group: {user.bloodGroup}</Typography>
              <Typography variant="h6">Caste: {user.caste}</Typography>
              <Typography variant="h6">Horoscope: {user.horoscope}</Typography>
              <Typography variant="h6">Star: {user.star}</Typography>
            </CardContent>
          </Card>

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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
