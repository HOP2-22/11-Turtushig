import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPass, setSignUpPass] = useState("");
  const [user, setUser] = useState(null);

  const login = (e) => {
    axios
      .post("http://localhost:3333/login", {
        email: loginEmail,
        password: loginPass,
      })
      .then((e) => setUser(e.data.userName))
      .catch((e) => console.log(e));
    e.preventDefault();
  };

  const signUp = (e) => {
    axios
      .post("http://localhost:3333", {
        email: loginEmail,
        password: loginPass,
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
    e.preventDefault();
  };

  const LogOut = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <div className="top">
        <a href="#lmao" className="how">
          How does it work?
        </a>
        <button className="login">Login</button>
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
        <div className="name">Boginoo</div>
        <div>
          Login Email:
          <input type={"text"} />
        </div>
        <div>
          Password:
          <input type={"text"} />
          <button>Login</button>
        </div>
        <div>
          SignUp
          <div>
            Email:
            <input type={"text"} />
          </div>
          <div>
            Password:
            <input type={"text"} />
            <button>SignUp</button>
          </div>
        </div>

        {/* <div className="Short">
          <input
            type={"text"}
            placeholder="https://www.web-huudas.mn"
            row="30"
            className="SearchBar"
          />
          <button className="Shorten">Shorten</button>
        </div> */}
      </div>
      <div className="bot">
        <div className="botText1">Made with ♥️ by Nest Academy</div>
        <div className="botText2">©boginoo.io 2020</div>
      </div>
    </div>
  );
}

export default App;
