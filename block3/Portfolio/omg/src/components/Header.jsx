import React from "react";
import { Box, Container, TypoGraphy, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";
import PetsIcon from "@mui/icons-material/Pets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container maxWidth="md">
        <nav className="Nav">
          <span className="Navbar">
            <a
              href="/"
              onClick={() => {
                navigate("/");
              }}
              className="name"
            >
              <PetsIcon className="Icon" />
              Turtushig Enkhtaivan
            </a>
            <a
              href="/Works"
              onClick={() => {
                navigate("/Works");
              }}
              className="navBar1"
            >
              Works
            </a>
            <a
              href="/Posts"
              onClick={() => {
                navigate("/Posts");
              }}
              className="navBar1"
            >
              Posts
            </a>
            <a
              href="/Uses"
              onClick={() => {
                navigate("/Uses");
              }}
              className="navBar1"
            >
              Uses
            </a>
            <a
              className="navBar1"
              href="https://github.com/HOP2-22/11-Turtushig/tree/main/block3/Portfolio/omg"
            >
              <GitHubIcon sx={{ fontSize: "medium" }} />
              Source
            </a>
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

export default Home;
