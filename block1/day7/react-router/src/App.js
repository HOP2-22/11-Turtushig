import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserDetail from "./pages/UserDetail.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":username" element={<UserDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
