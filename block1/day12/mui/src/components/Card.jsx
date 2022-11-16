import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { ColorModeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function MediaCard({ mainText, name, avatar, header, image }) {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 400,
        background: theme === "light" ? "white" : "#212529",
        borderRadius: "30px",
        color: theme === "dark" ? "gray !important" : "blac !important",
      }}
    >
      <CardMedia component="img" height="140" image={image} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme === "dark" ? "gray" : "black",
          }}
        >
          {mainText}
        </Typography>
      </CardContent>
      <CardActions>
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography
          sx={{
            color: theme === "dark" ? "gray !important" : "black !important",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: theme === "dark" ? "gray !important" : "black !important",
          }}
        >
          I
        </Typography>
        <Typography
          sx={{
            color: theme === "dark" ? "gray !important" : "black !important",
          }}
        >
          2nd January, 2022
        </Typography>
      </CardActions>
    </Card>
  );
}
