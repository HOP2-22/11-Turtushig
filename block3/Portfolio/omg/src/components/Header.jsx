import React from "react";
import { Box, Container, TypoGraphy, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";
import PetsIcon from "@mui/icons-material/Pets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container maxWidth="md">
        <nav className="Nav">
          <span className="Navbar">
            <div
              href="/"
              onClick={() => {
                navigate("/");
              }}
              className="name"
            >
              <PetsIcon className="Icon" />
              Turtushig Enkhtaivan
            </div>
            <div
              href="/Works"
              onClick={() => {
                navigate("/Works");
              }}
              className="navBar1"
            >
              Works
            </div>
            <div
              href="/Posts"
              onClick={() => {
                navigate("/Posts");
              }}
              className="navBar1"
            >
              Posts
            </div>
            <div
              href="/Uses"
              onClick={() => {
                navigate("/Uses");
              }}
              className="navBar1"
            >
              Uses
            </div>
            <div
              className="navBar1"
              href="https://github.com/HOP2-22/11-Turtushig/tree/main/block3/Portfolio/omg"
            >
              <GitHubIcon sx={{ fontSize: "medium" }} />
              Source
            </div>
          </span>
          <span>
            <button className="LightModeIcon" aria-label="Toggle theme">
              <LightModeOutlinedIcon />
            </button>
          </span>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;
