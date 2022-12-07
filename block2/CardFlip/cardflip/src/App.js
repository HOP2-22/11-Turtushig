import { useState, useEffect, useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import "./App.css";

const characters = ["a", "a", "c", "d", "e"];

function App() {
  const [myArray, setMyArray] = useState(characters);
  const [rotated, setRotated] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onClickHandler = (character, index) => {
    if (selectedCard === null) {
      setRotated(!rotated);
      setSelectedCard({
        character: character,
        index: index,
      });
    } else {
      if (character === selectedCard.character) {
        const temp = [...myArray];
        console.log(temp, "temp", myArray);
      }
    }
  };
  console.log(selectedCard);
  return (
    <div className="wrapper">
      <Box>
        <Container>
          <Box>
            {myArray.map((character, index) => {
              return (
                <div
                  key={index}
                  onClick={() => onClickHandler(character, index)}
                  style={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                    transform: `rotateY(${rotated ? "180deg" : "0deg"})`,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.1s",
                    margin: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#39FF14",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                    }}
                  ></div>
                  <div
                    style={{
                      background: "#2574E8",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  ></div>
                </div>
              );
            })}
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;
