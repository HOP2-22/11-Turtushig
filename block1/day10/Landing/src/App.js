import { useState, useEffect, useRef } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
