import React from "react";
import { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState();

  return (
    <div className="wrapper">
      <Box className="wrapper">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              width: "100%",
            }}
          >
            <input
              style={{
                display: "flex",
                justifyContent: "flexstart",
                width: "988px",
                height: "52px",
              }}
              type={Text}
              placeholder={"Search All The Gifs And Stickers"}
            ></input>
            <Button>
              <SearchIcon />
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default App;
