import { Box, Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import Posts from "./components/Posts";
import Uses from "./components/Uses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={Works} />
        <Route path="/Posts" element={Posts} />
        <Route path="/Uses" element={Uses} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
