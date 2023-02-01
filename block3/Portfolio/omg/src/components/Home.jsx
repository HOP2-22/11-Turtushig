import React from "react";
import { Box, Container, TypoGraphy, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container maxWidth="md">
        <nav>
          <a
            href="/"
            onClick={() => {
              navigate("/");
            }}
            className="name"
          >
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
          <a href="https://github.com/HOP2-22/11-Turtushig/tree/main/block3/Portfolio/omg">
            Source
          </a>
        </nav>
      </Container>
    </Box>
  );
};

export default Home;
