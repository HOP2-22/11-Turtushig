 import logo from "./logo.svg";
 import "./App.css";
 import List from "./components/List.jsx";
 import React, { useState } from "react";
 function App() {
   const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function remove(itemIndex) {
    const result = list.filter((item, index) => index !== itemIndex);
    setList(result);
  }

  return (
    <body>
      <div className="nav">
        <div className="Title">
          ToDo List
          <div className="Searchbar">
            <input
              type={"text"}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setList([...list, inputValue]);
              }}
            >
              Add
            </button>
            <div className="taskCard">
              <div className="list">
                {list.map((Todo, index) => {
                  return (
                    <p key={index}>
                      <input type="checkbox" onClick={() => {}} />
                      {Todo}
                      <button
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        X
                      </button>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;


