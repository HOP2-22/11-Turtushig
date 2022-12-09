import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import "./App.css";

const characters = ["Lebron", "Curry", "Kobe", "Durant", "Lebron"];

function App() {
  const [myArray, setMyArray] = useState(characters);
  const [rotated, setRotated] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [card, setCards] = useState(false);

  const generate = () => {
    let newCharacters = [...characters, ...characters].sort(
      () => 0.5 - Math.random()
    );
    setCards(newCharacters);
  };
  useEffect(() => {
    // generate();
  });

  const onClickHandler = (character, index) => {
    if (selectedCard === null) {
      setRotated(!rotated);
      setSelectedCard({
        character: character,
        index: index,
      });
    } else if (selectedCard.index === selectedCard) {
      if (selectedCard.index === setSelectedCard) {
        console.log(setSelectedCard);
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
                    display: "flex",
                    flexDirection: "row",
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
                    className="flip-card-front"
                    style={{
                      background: "#2574E8",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={`images/Lebron.png`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
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
