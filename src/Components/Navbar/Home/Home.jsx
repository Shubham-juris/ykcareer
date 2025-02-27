import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../../assets/Heroimg.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "Red",
        px: 2, // Padding for better responsiveness
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography variant="h3" fontWeight="bold">
        Empowering Careers, Inspiring Futures
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
