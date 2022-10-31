import React from "react";
import { Link } from "react-router-dom";

const Card = ({ username, email, id }) => {
  return (
    <Link style={{ height: 200 }} key={id} to={username}>
      <h1>{(username, username)}</h1>
      <h1>{email}</h1>
    </Link>
  );
};

export default Card;
