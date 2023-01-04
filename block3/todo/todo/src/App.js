import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/RemoveCircleRounded";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (Todo) =>
    checked.includes(Todo) ? "checked-item" : "not-checked-item";

  function remove(itemIndex) {
    const result = list.filter((item, index) => index !== itemIndex);
    setList(result);
  }
  return (
    <div className="wrapper">
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "480px",
            width: "480px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <h1>Todo App</h1>
          <Box>
            <span>
              <input
                placeholder="Add your new todo"
                style={{
                  width: "408px",
                  height: "32px",
                }}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#904DEC",
                  color: "#fff",
                }}
                onClick={() => {
                  setList([...list, inputValue]);
                }}
              >
                <AddIcon />
              </Button>
            </span>
            <div className="taskCard">
              <div className="list">
                {list.map((Todo, index) => {
                  return (
                    <Box
                      sx={{
                        marginTop: "3px",
                        width: "480px",
                        height: "50px",
                        backgroundColor: "#C0C0C0",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "5px",
                        justifyContent: "space-between",
                        maxHeight: "200px",
                      }}
                    >
                      <span className={isChecked(Todo)}>
                        <p
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            value={Todo}
                            type="checkbox"
                            onChange={handleCheck}
                          />
                          {Todo}
                          <Button
                            sx={{
                              height: "50px",
                              widht: "50px",
                            }}
                            color="error"
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            <Delete />
                          </Button>
                        </p>
                      </span>
                    </Box>
                  );
                })}
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Typography>You have {4} pending tasks</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#904DEC",
                  color: "#fff",
                }}
                onClick={() => {}}
              >
                Clear all
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
