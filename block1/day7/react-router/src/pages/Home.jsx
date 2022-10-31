import React from "react";
import Card from "../components/Card";
import users from "../users.json";

function Home() {
  return (
    <div>
      {users.map((user) => {
        return (
          <Card username={user.first_name} email={user.email} id={user.id} />
        );
      })}
    </div>
  );
}

export default Home;
