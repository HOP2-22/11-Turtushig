import React from "react";
import { Container, Box, Grid, AppBar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  <AppBar>
    <Container>
      <Box>
        <Typography
        >team.</Typography>
        <Box>
          <Switch {...label} defaultChecked />
          <Typography>Home</Typography>
          <Typography>Blog</Typography>
          <Typography>Contact</Typography>
          <Typography>Log in</Typography>
          <Button>Get Access</Button>
        </Box>
      </Box>
      <Box>
        <Grid></Grid>
      </Box>
    </Container>
  </AppBar>;
}
export default App;
