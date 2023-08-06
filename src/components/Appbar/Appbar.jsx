import React, { useState } from "react";
import { AppBar, Box, Typography, IconButton, TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

import "./Appbar.style.css";

export default function Appbar({ setSearchText }) {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <AppBar position="fixed" className="appbar" elevation={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <WestIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Titillium Web" }}
          >
            Romantic Comedy
          </Typography>
        </Box>
        {showSearchBox ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TextField
              id="seaech-box"
              label="Search Movie"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "1rem",
                fontFamily: "Titillium Web",
              }}
              onChange={(e) => {
                handleSearchText(e);
              }}
            />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setShowSearchBox(false);
                setSearchText("");
              }}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowSearchBox(true)}
          >
            <SearchIcon />
          </IconButton>
        )}
      </Box>
    </AppBar>
  );
}
