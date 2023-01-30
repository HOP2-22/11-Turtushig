import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./App.css";

function Home() {
  const [enteredLink, setEnteredLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const shortenLink = async () => {
    try {
      const response = await axios.post("http://localhost:3333/", {
        shortenedLink: shortenLink,
        email: "test@example.com",
      });
      setShortenedLink(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="top">
        <a href="/" className="how">
          How does it work?
        </a>
        <button
          className="login"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </button>
      </div>
      <div className="main">
        <div></div>
        <div className="greenoval">
          <div className="whiteoval">
            <div className="greenstripe1"></div>
            <div className="greenstripe2"></div>
            <div className="greenstripe3"></div>
          </div>
        </div>
        <div
          className="name"
          onClick={() => {
            navigate("/");
          }}
        >
          Boginoo
        </div>

        <div className="Short">
          <input
            type={"text"}
            placeholder="https://www.web-huudas.mn"
            value={enteredLink}
            onChange={(e) => setEnteredLink(e.target.value)}
            className="SearchBar"
          />
          <button className="Shorten" onClick={shortenLink}>
            Shorten
          </button>
        </div>
        <div>
          <p>Short Link: {shortenedLink}</p>
        </div>
      </div>
      <div className="bot">
        <div className="botText1">Made with ♥️ by Pinecone Academy</div>
        <div className="botText2">©boginoo.io 2023</div>
      </div>
    </div>
  );
}
export default Home;
