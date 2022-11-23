import React from "react";
import { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const search = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=NyWkIs62b2otHWoqEXqFQ7txM4BRZ1cU&q=${input}&limit=25&offset=0&rating=g&lang=en `
    );
    setResults(res.data.data);
  };

  return (
    <div className="wrapper">
      <Container>
        <Box className="wrapper">
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
              placeholder={"Search All The Gifs And Stickers"}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <Button onClick={search}>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
        {results.map((result) => {
          console.log(results);
          return (
            <Grid>
              <img src={result.images.fixed_height.url} alt="" />
            </Grid>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
