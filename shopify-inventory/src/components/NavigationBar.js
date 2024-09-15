// src/components/NavigationBar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#1976d2", marginBottom: "10px" }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Shopify
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            style={{ marginRight: "10px" }}
          >
            Home
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
