import React from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";

function UserDetail() {
  const { username } = useParams();

  const userData = users.find((user) => user.first_name === username);
  console.log(userData);
  return (
    <div>
      <h1>{userData.first_name}</h1>
      <h1>{userData.email}</h1>
    </div>
  );
}

export default UserDetail;
