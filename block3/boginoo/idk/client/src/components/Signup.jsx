import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      const response = await axios.post("http://localhost:3333/register", {
        email: signUpEmail,
        password: signUpPassword,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="top">
        <a href="/" className="how">
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
            value={signUpEmail}
            onChange={(e) => {
              setSignUpEmail(e.target.value);
            }}
            className="Email-passBar"
          />
          <div className="Email-pass">Enter Password:</div>
          <input
            type={"password"}
            placeholder=" ••••••••••"
            value={signUpPassword}
            onChange={(e) => {
              setSignUpPassword(e.target.value);
            }}
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
            <button className="Login-login" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="botText1">Made with ♥️ by Pinecone Academy</div>
        <div className="botText2">©boginoo.io 2023</div>
      </div>
    </div>
  );
};

export default Signup;
