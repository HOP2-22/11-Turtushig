import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/contact"> contact </Link>
      <Link to="/login"> login </Link>
    </div>
  );
};

export default Home;
