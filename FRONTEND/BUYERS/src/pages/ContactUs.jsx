import React from "react";
import { Container, Typography, TextField, Button, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <Container maxWidth="sm">
      <motion.div
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <Typography variant="h3" align="center" className="contact-title">
          Get in Touch
        </Typography>
        <Typography variant="h5" align="center" className="contact-subtitle">
          We would love to hear from you. Please fill out the form below.
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { marginBottom: 2, backgroundColor: "#ffffff" },
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#333",
          }}
          noValidate
        >
          <Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Your Name"
      variant="outlined"
      required
      InputProps={{
        style: {
          color: "white", // Text color inside the input
        },
      }}
      InputLabelProps={{
        style: {
          color: "black", // Label color
        },
      }}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Your Email"
      variant="outlined"
      required
      InputProps={{
        style: {
          color: "white", // Text color inside the input
        },
      }}
      InputLabelProps={{
        style: {
          color: "black", // Label color
        },
      }}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Message"
      variant="outlined"
      multiline
      rows={4}
      required
      InputProps={{
        style: {
          color: "white", // Text color inside the input
        },
      }}
      InputLabelProps={{
        style: {
          color: "black", // Label color
        },
      }}
    />
  </Grid>
  <Grid item xs={12} sx={{ textAlign: "center" }}>
    <Button variant="contained" color="primary" type="submit">
      Send Message
    </Button>
  </Grid>
    </Grid>
        </Box>

        {/* Contact Info Section */}
        <Typography variant="h5" align="center" className="contact-info-title">
          Or Reach Us At:
        </Typography>
        <Box
          sx={{
            backgroundColor: "#222",
            padding: "10px 0",
            borderRadius: "8px",
            marginTop: "20px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="body1">📞 Phone: +251 911 000 000</Typography>
          <Typography variant="body1">📧 Email: support@flowershop.com</Typography>
          <Typography variant="body1">🌍 Location: Addis Ababa, Ethiopia</Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactUs;
