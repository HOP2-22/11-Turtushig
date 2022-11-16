import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "./components/Card";
import CardList from "./components/cardMedia.json";
import { Switch } from "@mui/material";
import { ColorModeContext } from "./context/ThemeContext";
import { useContext } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const App = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        backgroundColor: theme === "dark" ? "#121212" : "white",
        boxShadow: "none",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Mulish",
              fontSize: "30px",
              fontWeight: "800",
              lineHeight: "37.65px",
              textAlign: "center",
              color: theme === "light" ? "black" : "white !important",
            }}
          >
            team.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: "Mulish",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            <Switch checked={theme === "dark"} onChange={() => changeTheme()} />
            <Typography
              sx={{ color: "grey !important", textDecoration: "underline" }}
            >
              Products
            </Typography>
            <Typography
              sx={{ color: "grey !important", textDecoration: "underline" }}
            >
              Services
            </Typography>
            <Typography
              sx={{ color: "grey !important", textDecoration: "underline" }}
            >
              Contact
            </Typography>
            <Typography
              sx={{ color: "grey !important", textDecoration: "underline" }}
            >
              Log in
            </Typography>
            <Button variant="outlined">Get Access</Button>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Mulish",
              color: "black",
              fontSize: "48px",
              fontWeight: "800",
              lineHeight: "60px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Blog posts
          </Typography>
          <Typography
            paragraph={true}
            sx={{
              fontFamily: "Mulish",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "29px",
              color: "grey !important",
              display: "flex",
              alignItems: "center",
            }}
          >
            Our latest updates and blogs about managing your team
          </Typography>
          <Box>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {CardList.map((card) => (
                <Grid xs={4}>
                  <Card
                    header={card.CardContentHeader}
                    name={card.CardContentName}
                    image={card.Image}
                    mainText={card.CardContentBody}
                    avatar={""}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box></Box>
      </Container>
      <Box
        sx={{
          width: "100vw",
          height: "350px",
          backgroundColor: "#252B3B",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "200px",
            }}
          >
            <Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
              ></Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "Mulish",
                    fontWeight: "800",
                    fontSize: "30px",
                    lineHeight: "27px",
                  }}
                >
                  team.
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <InstagramIcon />
                  Instagram
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <FacebookIcon />
                  Facebook
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <TwitterIcon />
                  Twitter
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <InstagramIcon />
                  Instagram
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <FacebookIcon />
                  Facebook
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  <TwitterIcon />
                  Twitter
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Use Cases
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  UI Design
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  UX Design
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Prototyping
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  UI Design
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  UX Design
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Prototyping
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Explore
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Figma
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Customers
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Why I Love Figma
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Figma
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Customers
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Why I Love Figma
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Resources
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Community Resources Hub
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Support
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Education
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Community Resources Hub
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Support
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Education
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: "#ffffff !important",
                    fontFamily: "karla",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "27px",
                  }}
                >
                  Subscribe to our newsletter
                </Typography>
                <input type={Text} placeholder={"Email"} />
                <Button>
                  <ArrowForwardIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
