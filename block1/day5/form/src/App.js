import React, { useState } from "react";
import "./App.css";
import users from "./users.json";

const styles = {
  userCardContainer: {},
};

function App() {
  const [output, setOutput] = useState(users);
  const search = (value) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(value.toLowerCase());
      });
    });
  };
  return (
    <div style={styles.container}>
      <div>
        <input
          type={"text"}
          onChange={(e) => {
            search(e.target.value);
          }}
          style={styles.searchInput}
        />
      </div>
      {output.length === 0 ? (
      <div>No User Found</div>
      ) : (
        output.map((userData, index) => {
          return <UserCard userdata={userData} key={index}
        })
      )}
      
    </div>
  );
}

export default App;
