import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="Header">
        <nav>
          <Link className="l-nav" to={Home}>
            team.
          </Link>
          <Link className="r-nav">Products</Link>
          <Link className="r-nav">Services</Link>
          <Link className="r-nav">Contact</Link>
          <Link className="r-nav">Login in</Link>
          <Link className="r-nav">Get Access</Link>
        </nav>
      </div>
      <div className="Main"></div>
    </div>
  );
};

export default Home;
