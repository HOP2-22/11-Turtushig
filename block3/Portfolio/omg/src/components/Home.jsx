import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

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
          <div className="imgBorder">
            <img
              src="https://cdn.discordapp.com/attachments/1012257590740275211/1012611321625313360/Screen_Shot_2022-08-26_at_14.35.37.png"
              className="circle-pfp"
              alt="bruh"
            />
          </div>
        </div>
        <div>
          <h3 className="header3">Work</h3>
          <p className="text">
            &nbsp;&nbsp;&nbsp;Turtushig enkhtaivan is a 17-year-old student from
            mongolia who is pursuing a career in the field of technology. Born
            and raised in mongolia most of his life, turtushig developed an
            interest in coding at a young age and decided to pursue it as a
            career. He enrolled in&nbsp;
            <a href="https://pinecone.mn/" className="link">
              PineCone
            </a>
            &nbsp;, a renowned institution that offers courses in coding and
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
        <div>
          <h3 className="header3">Bio</h3>
          <div className="text">
            <span className="year">2006</span>
            Born in Ulaanbatar (Улаанбаатар), Mongolia
          </div>
          <div className="text">
            <span className="year">2022</span>
            Enrolled in PineCone
          </div>
        </div>
        <div className="text">
          <h3 className="header3">I ♥</h3>
          <p> Computers, Technology, Music, Programming, </p>
        </div>
        <div className="web">
          <h3 className="header3">On the Web</h3>
          <a
            href="https://github.com/E-Turtushig"
            className="Socials github"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: "medium" }} />
            @E-Turtushig
          </a>
          <a
            href=" https://instagram.com/turtushigenkhtaivan "
            className="Socials"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: "medium" }} />
            @turtushigenkhtaivan
          </a>
          <a
            href="https://www.facebook.com/turtushig.enkhtaivan.3"
            target="_blank"
            className="Socials"
          >
            <FacebookIcon sx={{ fontSize: "medium" }} />
            @turtushigenkhtaivan
          </a>
        </div>
        <div className="also">
          <div className="ytVid" href="">
            <div className="borderwht">
              <div className="previewWindow-l">
                <img
                  src="https://cdn.discordapp.com/attachments/1012257590740275211/1072825532565176400/fireship.png"
                  width="100x"
                  height="100px"
                  alt="bruh"
                />
              </div>
            </div>
            <div className="NameOfWindow">FireShip</div>
            <div className="NameOfWindow">SampleText</div>
          </div>
          <div className="Bogino">
            <div className="borderwht">
              <div className="previewWindow-r">
                <img
                  src="https://cdn.discordapp.com/attachments/1011857629905166367/1072839520048910406/Screenshot_2023-02-08_at_7.07.52_PM.png"
                  width="162px"
                  height="100px"
                />
              </div>
            </div>
            <div className="NameOfWindow">Boginoo</div>
            <div className="NameOfWindow">A app that shortens links</div>
          </div>
        </div>
        <div className="NameOfWindow">
          <button
            onClick={() => {
              navigate("/Posts");
            }}
            className="HomePortfolioButton"
          >
            Popular Posts
            <NavigateNextIcon />
          </button>
        </div>
      </Container>
    </Box>
  );
};

export default Home;
