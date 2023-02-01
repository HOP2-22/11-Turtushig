import { Box, Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import Posts from "./components/Posts";
import Uses from "./components/Uses";
import Source from "./components/Source";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={Works} />
        <Route path="/Portfolio" element={Posts} />
        <Route path="/Skills" element={Uses} />
        <Route path="/Contact" element={Source} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
