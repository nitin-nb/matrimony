import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import img1 from '../assets/profiles/LV4A0266.jpg'
import img2 from '../assets/profiles/Matrimonial-Suited-Groom-04.jpg'
import img3 from '../assets/profiles/Matrimonial-Suited-Groom-05.jpg'

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    height: '5\'9"',
    religion: 'Christian',
    image: img1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 26,
    height: '4\'5"',
    religion: 'Hindu',
    image: img2,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    age: 30,
    height: '6\'0"',
    religion: 'Muslim',
    image: img3,
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#005f4b' }}>
        Matrimony Profiles
      </Typography>
      <Grid container spacing={4}>
        {profiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Card sx={{ backgroundColor: '#fbc300', transition: '0.3s', '&:hover': { boxShadow: 20 } }}>
              <CardMedia
                component="img"
                height="350"
                image={profile.image}
                alt={profile.name}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{profile.name}</Typography>
                <Typography >Age: {profile.age}</Typography>
                <Typography >Height: {profile.height}</Typography>
                <Typography >Religion: {profile.religion}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Want to see more profiles?
        </Typography>
        <Button variant="contained" color="primary" href="/subscribe" sx={{ padding: '10px 20px', fontSize: '16px' }}>
          Subscribe to Premium
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
