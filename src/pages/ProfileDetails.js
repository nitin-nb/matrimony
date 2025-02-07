import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ProfileDetails = () => {
  const location = useLocation();
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
    fatherOccupation: "Retd",
    motherOccupation: "Homemaker",
    siblings: "No",
    familyType: "Joint",
    image: "path/to/image.jpg", // Add a placeholder image path if needed
    interests: ["Technology", "Reading", "Traveling"], // Example interests
    aboutMe: "I'm a passionate software engineer who loves to create innovative solutions. In my free time, I enjoy hiking, reading, and exploring new places. Looking for someone who shares similar interests and values intellectual conversations.",
    familyDetails: "I come from a loving family with strong values.",
    lifestyle: "I enjoy outdoor activities, reading, and spending time with friends.",
    partnerPreference: {
      age: "25-30",
      height: "5'5\"",
      education: "Bachelor's Degree",
      profession: "Engineer"
    }
  };
  const { profile } = location.state || {}; // Safely access profile data

  if (!profile) {
    return <Typography variant="h6">Profile not found</Typography>; // Handle case where profile is undefined
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#fff", borderRadius: "12px" }}>
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", padding: 3, alignItems: "stretch"}}
        >
          <Grid container spacing={2}>
            <Grid item xs={4} px={8}>
              <img
                src={profile.image}
                alt={profile.name}
                style={{ width: "100%",height: '400px', borderRadius: "12px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h4"
                color="secondary"
                sx={{ fontWeight: "bold", fontSize: "2.2rem" }}
              >
                {user.name}
              </Typography>
              <Typography variant="h6" pt={1}>Age: {user.age} years</Typography>
              <Typography variant="h6" pt={1}>
                Blood Group: {user.bloodGroup || "N/A"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Address: {user.address || "Not provided"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Profession: {user.occupation || "Not mentioned"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Religion: {user.religion || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  color: "white",
                  marginRight: "10px",
                }}
                startIcon={<FavoriteIcon />}
              >
                Interest
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#00847b", color: "white" }}
                startIcon={<MessageIcon />}
              >
                Message
              </Button>
              <Typography variant="h6" pt={2}>
                Height: {user.height || "N/A"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Horoscope: {user.horoscope || "N/A"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Star: {user.star || "N/A"}
              </Typography>
              <Typography variant="h6" pt={1}>
                Annual Salary: {user.annualIncome || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Main Content */}
        <Grid container spacing={2} p={4} pt={0}>
          {/* Left Section (2/3 width) */}
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#FDF0D7",
                borderRadius: "8px",
              }}
            >
              {/* About Me */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ color: "#374151" }}>
                {user.aboutMe || "No details provided."}
              </Typography>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#FDF0D7",
                borderRadius: "8px",
                marginTop: 2,
              }}
            >
              {/* Family Details */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Family Details
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Father's Occupation:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.fatherOccupation || "Not provided"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Mother's Occupation:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.motherOccupation || "Not provided"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Siblings:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.siblings || "Not provided"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Family Type:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.familyType || "Not provided"}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#FDF0D7",
                borderRadius: "8px",
                marginTop: 2,
              }}
            >
              {/* Partner Preference */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Partner Preference
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Age:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.partnerPreference.age || "Not specified"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Height:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.partnerPreference.height || "Not specified"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Education:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.partnerPreference.education || "Not specified"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: "#374151", fontWeight: "bold" }}>
                    Profession:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {user.partnerPreference.profession || "Not specified"}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right Section (1/3 width) */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: '2px solid #00847B'
              }}
            >
              {/* Contact Details */}
              <Typography variant="h6" pb={2} sx={{ fontWeight: "bold" }}>
                Contact Details
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ffcc00",
                  color: "black",
                  marginBottom: "12px",
                }}
                startIcon={<PhoneIcon />}
              >
                Connect through Phone Number
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#ffcc00", color: "black" }}
                startIcon={<WhatsAppIcon />}
              >
                Connect through WhatsApp
              </Button>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#FDF0D7",
                borderRadius: "8px",
                marginTop: 2,
              }}
            >
              {/* Verified Details */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Verified Details
              </Typography>
              <Typography variant="body1">
                <CheckCircleIcon sx={{ color: "#00847B", fontSize: "small", marginRight: 1 }} />
                Phone Number
              </Typography>
              <Typography variant="body1">
                <CheckCircleIcon sx={{ color: "#00847B", fontSize: "small", marginRight: 1 }} />
                Email ID
              </Typography>
              <Typography variant="body1">
                <CheckCircleIcon sx={{ color: "#00847B", fontSize: "small", marginRight: 1 }} />
                Education
              </Typography>
              <Typography variant="body1">
                <CheckCircleIcon sx={{ color: "#00847B", fontSize: "small", marginRight: 1 }} />
                Government ID
              </Typography>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#FDF0D7",
                borderRadius: "8px",
                marginTop: 2,
              }}
            >
              {/* Hobbies & Interests */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Hobbies & Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 1 }}>
                <Typography variant="body1" sx={{ backgroundColor: "white", padding: 1, margin: 0.5, borderRadius: '4px' }}>
                  Reading
                </Typography>
                <Typography variant="body1" sx={{ backgroundColor: "white", padding: 1, margin: 0.5, borderRadius: '4px' }}>
                  Hiking
                </Typography>
                <Typography variant="body1" sx={{ backgroundColor: "white", padding: 1, margin: 0.5, borderRadius: '4px' }}>
                  Cooking
                </Typography>
                <Typography variant="body1" sx={{ backgroundColor: "white", padding: 1, margin: 0.5, borderRadius: '4px' }}>
                  Photography
                </Typography>
                <Typography variant="body1" sx={{ backgroundColor: "white", padding: 1, margin: 0.5, borderRadius: '4px' }}>
                  Traveling
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
