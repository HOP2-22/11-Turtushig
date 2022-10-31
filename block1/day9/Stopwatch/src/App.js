import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    return () => clearInterval(a.current);
  }, []);

  let a = useRef();

  function startTime() {
    a.current = setInterval(() => {
      setSecond((prev) => prev + 1);
      console.log(second);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>{second}</h1>
      <button onClick={() => startTime()}>Start</button>
      <button onClick={() => clearInterval(a.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(a.current);
          setSecond(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
