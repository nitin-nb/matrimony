import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
} from "@mui/material";
import img1 from "../assets/profiles/LV4A0266.jpg";
import img2 from "../assets/profiles/Matrimonial-Suited-Groom-04.jpg";
import img3 from "../assets/profiles/Matrimonial-Suited-Groom-05.jpg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    location: "New York",
    religion: "Christian",
    occupation: "Engineer",
    image: img1,
    premium: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 26,
    location: "Los Angeles",
    religion: "Hindu",
    occupation: "Doctor",
    image: img2,
    premium: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 30,
    location: "Chicago",
    religion: "Muslim",
    occupation: "Lawyer",
    image: img3,
    premium: true,
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 27,
    location: "San Francisco",
    religion: "Christian",
    image: img1,
    premium: true,
  },
  {
    id: 5,
    name: "David Brown",
    age: 32,
    location: "Miami",
    religion: "Hindu",
    image: img2,
    premium: false,
  },
  {
    id: 6,
    name: "Sophia Wilson",
    age: 29,
    location: "Seattle",
    religion: "Muslim",
    image: img3,
    premium: true,
  },
  {
    id: 7,
    name: "James Taylor",
    age: 35,
    location: "Austin",
    religion: "Christian",
    image: img1,
    premium: false,
  },
  {
    id: 8,
    name: "Olivia Martinez",
    age: 24,
    location: "Boston",
    religion: "Hindu",
    image: img2,
    premium: true,
  },
  {
    id: 9,
    name: "Liam Anderson",
    age: 31,
    location: "Denver",
    religion: "Muslim",
    image: img3,
    premium: false,
  },
  {
    id: 10,
    name: "Ava Thomas",
    age: 26,
    location: "Phoenix",
    religion: "Christian",
    image: img1,
    premium: true,
  },
  {
    id: 11,
    name: "Noah Jackson",
    age: 28,
    location: "Las Vegas",
    religion: "Hindu",
    image: img2,
    premium: false,
  },
  {
    id: 12,
    name: "Isabella White",
    age: 27,
    location: "Atlanta",
    religion: "Muslim",
    image: img3,
    premium: true,
  },
  {
    id: 13,
    name: "Mason Harris",
    age: 29,
    location: "Philadelphia",
    religion: "Christian",
    image: img1,
    premium: false,
  },
  {
    id: 14,
    name: "Charlotte Clark",
    age: 25,
    location: "Dallas",
    religion: "Hindu",
    image: img2,
    premium: true,
  },
  {
    id: 15,
    name: "Ethan Lewis",
    age: 33,
    location: "San Diego",
    religion: "Muslim",
    image: img3,
    premium: false,
  },
  {
    id: 16,
    name: "Amelia Robinson",
    age: 30,
    location: "Orlando",
    religion: "Christian",
    image: img1,
    premium: true,
  },
];

const ageRanges = [
  { label: "18-25", value: [18, 25] },
  { label: "26-35", value: [26, 35] },
  { label: "36-45", value: [36, 45] },
  { label: "46-55", value: [46, 55] },
  { label: "56-65", value: [56, 65] },
  { label: "66-75", value: [66, 75] },
  { label: "76-100", value: [76, 100] },
];

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  position: 'relative', // For positioning the wishlist button
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ImageContainer = styled('div')({
  width: '100%',
  height: '200px',
  backgroundColor: '#e0e0e0', // Placeholder background color
  borderRadius: '12px 12px 0 0',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Badge = styled('span')({
  backgroundColor: '#00624F',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '12px',
  fontSize: '0.8rem',
  marginLeft: '8px', // Space between name and badge
});

const ProfileImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain', // Change to contain to show faces correctly
});

// Styled Filter Container
const FilterContainer = styled(Box)({
  display: 'flex',
  marginBottom: '20px', // Add margin below the filter container
  padding: '10px', // Add padding to the filter container
});

const StyledFormControl = styled(FormControl)({
  minWidth: 120,
  backgroundColor: 'white', // Set background color to white
  marginRight: '10px', // Add some space between dropdowns
});

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 10;

  // State for wishlist icon
  const [wishlist, setWishlist] = useState({}); // Object to track wishlist status for each profile

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;

  // State for filters
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");

  // Function to filter profiles based on selected criteria
  const filteredProfiles = profiles.filter((profile) => {
    const isReligionMatch = selectedReligion
      ? profile.religion === selectedReligion
      : true;
    const isLocationMatch = selectedLocation
      ? profile.location === selectedLocation
      : true;
    const isOccupationMatch = selectedOccupation
      ? profile.occupation === selectedOccupation
      : true;
    return (
      isReligionMatch && isLocationMatch && isOccupationMatch
    );
  });

  // Calculate the current profiles to display
  const currentProfiles = filteredProfiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCardClick = (profile) => {
    navigate('/profileDetails', { state: { profile } }); // Navigate to ProfileDetails with profile data
  };

  const handleWishlistClick = (profileId) => {
    setWishlist((prev) => ({
      ...prev,
      [profileId]: !prev[profileId], // Toggle the wishlist status
    }));
  };

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile"); // Check if user profile exists
    if (!userProfile) {
      // If not authenticated, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#FDF0D7', minHeight: '100vh' }}>
      <FilterContainer>
        <StyledFormControl variant="outlined" size="small">
          <Select defaultValue="18-25">
            <MenuItem value="18-25">Age: 18-25</MenuItem>
            <MenuItem value="26-35">Age: 26-35</MenuItem>
            <MenuItem value="36-45">Age: 36-45</MenuItem>
            <MenuItem value="46+">Age: 46+</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl variant="outlined" size="small">
          <Select defaultValue="All">
            <MenuItem value="All">Location: All</MenuItem>
            <MenuItem value="USA">Location: USA</MenuItem>
            <MenuItem value="UK">Location: UK</MenuItem>
            <MenuItem value="Canada">Location: Canada</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl variant="outlined" size="small">
          <Select defaultValue="All">
            <MenuItem value="All">Religion: All</MenuItem>
            <MenuItem value="Christianity">Religion: Christianity</MenuItem>
            <MenuItem value="Islam">Religion: Islam</MenuItem>
            <MenuItem value="Hinduism">Religion: Hinduism</MenuItem>
          </Select>
        </StyledFormControl>
      </FilterContainer>
      <Grid container spacing={4}>
        {currentProfiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard onClick={() => handleCardClick(profile)}>
              <ImageContainer>
                <ProfileImage
                  src={profile.image}
                  alt={profile.name}
                />
                <IconButton
                  sx={{ position: 'absolute', top: 8, right: 8, color: wishlist[profile.id] ? '#FF4081' : '#000' }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    handleWishlistClick(profile.id);
                  }}
                >
                  <FavoriteIcon color={wishlist[profile.id] ? 'error' : 'inherit'} />
                </IconButton>
              </ImageContainer>
              <CardContent>
                <Typography variant="h5" color="#00624F" fontWeight="bold" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {profile.name}
                  {profile.premium && <Badge>Premium</Badge>}
                </Typography>
                <Typography variant="body1" color="#4B5563" sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon fontSize="small" sx={{ marginRight: 1, color: '#4B5563' }} /> {profile.age} years
                </Typography>
                <Typography variant="body1" color="#4B5563" sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon fontSize="small" sx={{ marginRight: 1, color: '#4B5563' }} /> {profile.location}
                </Typography>
                <Typography variant="body1" color="#4B5563" sx={{ display: 'flex', alignItems: 'center' }}>
                  <WorkIcon fontSize="small" sx={{ marginRight: 1, color: '#4B5563' }} /> {profile.occupation}
                </Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2, fontWeight: 'bold', color: '#00624F' }}>
                  View Profile
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProfile >= filteredProfiles.length}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
