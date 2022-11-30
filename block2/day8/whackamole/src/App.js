import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import Button from "@mui/material/Button";

function App() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00");
  const [running, setRunning] = useState(false);
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );

  useEffect(() => {
    let interval;

    if (running) {
      let interval = setInterval(() => {
        const temp = [...rats];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 5; j++) {
            temp[i][j] = Math.random() > 0.5;
          }
        }
        setRats(temp);
      }, 1000);
    }

  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#b40001",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "36px",
              color: "#fff",
            }}
          >
            Time:{second}
          </Typography>
          <Countdown />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "36px",
              color: "#fff",
            }}
          >
            Score:0
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => startTime()}>Play</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
