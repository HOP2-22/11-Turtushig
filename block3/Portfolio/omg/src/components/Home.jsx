import React from "react";
import { Box, TypoGraphy, Container, Appbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Home = () => {
  const navigate = useNavigate("");
  return (
    <Box>
      <Container maxWidth="sm">
        <div
          style={{
            color: "white",
          }}
        >
          Dog goes here
        </div>
        <div className="intro">
          Hello, I'm a learning programmer in Mongolia!
        </div>
        <div className="introduction">
          <div>
            <h2 className="intro-intro"> Turtushig Enkhtaivan</h2>
            <p className="intro-intro-intro">
              Computer Enthusiast( MERN Developer / PineCone Student )
            </p>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1012257590740275211/1012611321625313360/Screen_Shot_2022-08-26_at_14.35.37.png"
            className="circle-pfp"
          />
        </div>
        <div>
          <h3 className="Work">Work</h3>
          <p className="workText">
            Turtushig enkhtaivan is a 17-year-old student from mongolia who is
            pursuing a career in the field of technology. Born and raised in
            mongolia most of his life, turtushig developed an interest in coding
            at a young age and decided to pursue it as a career. He enrolled in"
            <a href="https://pinecone.mn/" className="link">
              PineCone
            </a>
            ", a renowned institution that offers courses in coding and
            technology, to further his education and knowledge.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => {
                navigate("/Works");
              }}
              className="HomePortfolioButton"
            >
              My portfolio
              <NavigateNextIcon />
            </button>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Home;
