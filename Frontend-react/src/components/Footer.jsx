import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#212121",
        color: "white",
        mt: "auto", // Pushes footer to the bottom
        width: "100vw", // Full-width
        py: 3,
        px: 2, // Padding for better spacing
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* About Us */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">Company Info</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Press</Typography>
          </Grid>

          {/* Customer Care */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Customer Care</Typography>
            <Typography variant="body2">Help Center</Typography>
            <Typography variant="body2">Returns</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Grid>

          {/* Policies */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Policies</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms & Conditions</Typography>
            <Typography variant="body2">Security</Typography>
          </Grid>

          {/* Social Media Links & Payment */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Typography variant="body2">Facebook | Twitter | Instagram</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Payment Methods</Typography>
            <Typography variant="body2">Visa | MasterCard | PayPal</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Typography variant="body2" align="center" sx={{ mt: 2, py: 1, width: "100%" }}>
        © 2025 Flipkart Clone. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
