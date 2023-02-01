import React from "react";
import { Box, Container, TypoGraphy, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container>
        <nav>
          <a
            href="/"
            onClick={() => {
              navigate("/");
            }}
          >
            Turtushig Enkhtaivan
          </a>
          <a
            href="/Works"
            onClick={() => {
              navigate("/Works");
            }}
          >
            Works
          </a>
          <a
            href="/Posts"
            onClick={() => {
              navigate("/Posts");
            }}
          >
            Posts
          </a>
          <a
            href="/Uses"
            onClick={() => {
              navigate("/Uses");
            }}
          >
            Uses
          </a>
          <a href="https://github.com/HOP2-22/11-Turtushig">Source</a>
        </nav>
      </Container>
    </Box>
  );
};

export default Home;
