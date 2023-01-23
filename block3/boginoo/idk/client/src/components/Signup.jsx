import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
        <div className="login-Logo">Sign Up</div>
        <div className="Login-bar">
          <div className="Email-pass">Enter Email:</div>
          <input
            type={"text"}
            placeholder="name@mail.domain"
            className="Email-passBar"
          />
          <div className="Email-pass">Enter Password:</div>
          <input
            type={"password"}
            placeholder=" ••••••••••"
            className="Email-passBar"
          />
          <div>
            <div className="Email-pass">Enter Password Again:</div>
            <input
              type={"password"}
              placeholder=" ••••••••••"
              className="Email-passBar"
            />
            <div></div>
            <button className="Login-login">Sign Up</button>
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

export default Signup;
