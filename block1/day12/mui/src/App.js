import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "./components/Card";
import CardList from "./components/cardMedia.json";
import { Switch } from "@mui/material";
import { ColorModeContext } from "./context/ThemeContext";
import { useContext } from "react";

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
              color: theme === "light" ? "black" : "white",
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
        sx={{ width: "100vw", height: "350px", backgroundColor: "#252B3B" }}
      ></Box>
    </Box>
  );
};

export default App;
