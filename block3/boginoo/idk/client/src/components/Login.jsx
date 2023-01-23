import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="top">
        <a href="#lmao" className="how">
          How does it work?
        </a>
      </div>
      <div className="main">
        <div></div>
        <div className="greenoval-sm">
          <div className="whiteoval-sm">
            <div className="greenstripe1"></div>
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
        <div className="login-Logo">Login</div>
        <div className="Login-bar">
          <div className="Email-pass">Email:</div>
          <input
            type={"text"}
            placeholder="name@mail.domain"
            className="Email-passBar"
          />
          <div className="Email-pass">Password</div>
          <input
            type={"password"}
            placeholder=" ••••••••••"
            className="Email-passBar"
          />
          <div className="Rem">
            <span className="Checkbox-text">
              <input type={"checkbox"} />
              Remember Me
            </span>
            <a href="/lel" className="Forgot">
              Forgot Password?
            </a>
          </div>
          <button className="Login-login">Login</button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <a href="/Signup" className="Signup">
              Signup?
            </a>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="botText1">Made with ♥️ by Nest Academy</div>
        <div className="botText2">©boginoo.io 2020</div>
      </div>
    </div>
  );
};

export default Login;
