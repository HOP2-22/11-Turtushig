import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function MediaCard({ mainText, name, avatar, header, image }) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia component="img" height="140" image={image} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mainText}
        </Typography>
      </CardContent>
      <CardMedia>
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography sx={{ color: "gray" }}>{name}</Typography>
        <Typography sx={{ color: "silver" }}>I</Typography>
        <Typography sx={{ color: "gray" }}>2nd January, 2022</Typography>
      </CardMedia>
    </Card>
  );
}
