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

const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    location: "New York",
    religion: "Christian",
    occupation: "Engineer",
    image: img1,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 26,
    location: "Los Angeles",
    religion: "Hindu",
    occupation: "Doctor",
    image: img2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 30,
    location: "Chicago",
    religion: "Muslim",
    occupation: "Lawyer",
    image: img3,
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 27,
    location: "San Francisco",
    religion: "Christian",
    image: img1,
  },
  {
    id: 5,
    name: "David Brown",
    age: 32,
    location: "Miami",
    religion: "Hindu",
    image: img2,
  },
  {
    id: 6,
    name: "Sophia Wilson",
    age: 29,
    location: "Seattle",
    religion: "Muslim",
    image: img3,
  },
  {
    id: 7,
    name: "James Taylor",
    age: 35,
    location: "Austin",
    religion: "Christian",
    image: img1,
  },
  {
    id: 8,
    name: "Olivia Martinez",
    age: 24,
    location: "Boston",
    religion: "Hindu",
    image: img2,
  },
  {
    id: 9,
    name: "Liam Anderson",
    age: 31,
    location: "Denver",
    religion: "Muslim",
    image: img3,
  },
  {
    id: 10,
    name: "Ava Thomas",
    age: 26,
    location: "Phoenix",
    religion: "Christian",
    image: img1,
  },
  {
    id: 11,
    name: "Noah Jackson",
    age: 28,
    location: "Las Vegas",
    religion: "Hindu",
    image: img2,
  },
  {
    id: 12,
    name: "Isabella White",
    age: 27,
    location: "Atlanta",
    religion: "Muslim",
    image: img3,
  },
  {
    id: 13,
    name: "Mason Harris",
    age: 29,
    location: "Philadelphia",
    religion: "Christian",
    image: img1,
  },
  {
    id: 14,
    name: "Charlotte Clark",
    age: 25,
    location: "Dallas",
    religion: "Hindu",
    image: img2,
  },
  {
    id: 15,
    name: "Ethan Lewis",
    age: 33,
    location: "San Diego",
    religion: "Muslim",
    image: img3,
  },
  {
    id: 16,
    name: "Amelia Robinson",
    age: 30,
    location: "Orlando",
    religion: "Christian",
    image: img1,
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 10;

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

  const handleCardClick = (user) => {
    navigate('/profileDetails', { state: { user } }); // Navigate to ProfileDetails with user data
  };

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile"); // Check if user profile exists
    if (!userProfile) {
      // If not authenticated, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box sx={{ minHeight: "100vh" }}>

      <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#005f4b" }}
        >
          Profiles
        </Typography>

        {/* Filters Section */}
        <Box
          sx={{
            marginBottom: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
            <InputLabel sx={{ color: "#005f4b" }} shrink={!!selectedReligion}>Religion</InputLabel>
            <TextField
              value={selectedReligion}
              onChange={(e) => setSelectedReligion(e.target.value)}
              select
              variant="outlined"
              sx={{ backgroundColor: "#fff9c4" }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      width: 250,
                    },
                  },
                },
              }}
            >
              <MenuItem value="Christian">Christian</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
              <MenuItem value="Muslim">Muslim</MenuItem>
            </TextField>
          </FormControl>
          <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
            <InputLabel sx={{ color: "#005f4b" }} shrink={!!selectedLocation}>Location</InputLabel>
            <TextField
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              select
              sx={{ backgroundColor: "#fff9c4" }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      width: 250,
                    },
                  },
                },
              }}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
            </TextField>
          </FormControl>
          <FormControl sx={{ minWidth: 130, marginRight: 2 }}>
            <InputLabel sx={{ color: "#005f4b" }} shrink={!!selectedOccupation}>Occupation</InputLabel>
            <TextField
              value={selectedOccupation}
              onChange={(e) => setSelectedOccupation(e.target.value)}
              select
              sx={{ backgroundColor: "#fff9c4" }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      width: 250,
                    },
                  },
                },
              }}
            >
              <MenuItem value="Engineer">Engineer</MenuItem>
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Lawyer">Lawyer</MenuItem>
            </TextField>
          </FormControl>
        </Box>

        {/* Display Selected Filters */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6">Selected Filters:</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {selectedReligion && <Chip label={`Religion: ${selectedReligion}`} onDelete={() => setSelectedReligion('')} />}
            {selectedLocation && <Chip label={`Location: ${selectedLocation}`} onDelete={() => setSelectedLocation('')} />}
            {selectedOccupation && <Chip label={`Occupation: ${selectedOccupation}`} onDelete={() => setSelectedOccupation('')} />}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {currentProfiles.map((profile) => (
            <Grid item xs={12} sm={6} md={3} key={profile.id}>
              <Card
                sx={{
                  padding: 2,
                  backgroundColor: "#fff9c4",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 20 },
                }}
                onClick={() => handleCardClick(profile)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "linear-gradient(to bottom, #d3d3d3, #a9a9a9)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#005f4b" }}>
                    {profile.name}
                  </Typography>
                  <Typography>Age: {profile.age}</Typography>
                  <Typography>Location: {profile.location}</Typography>
                  <Typography>Religion: {profile.religion}</Typography>
                </CardContent>
              </Card>
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
        {/* <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>
            Want to see more profiles?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/subscribe"
            sx={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Subscribe to Premium
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
