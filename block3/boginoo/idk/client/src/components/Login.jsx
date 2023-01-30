import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const login = async () => {
    try {
      const response = await axios
        .post("http://localhost:3333/login", {
          email: loginEmail,
          password: loginPass,
        })
        .then((e) => {
          Cookies.set("token", e.data.token);
          setUser(e.data.email);
        });
      setUser(response.data.email);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(user);

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
        <d
          iv
          className="name"
          onClick={() => {
            navigate("/");
          }}
        >
          Boginoo
        </d>
        <div className="login-Logo">Login</div>
        <div className="Login-bar">
          <div className="Email-pass">Email:</div>
          <input
            type={"text"}
            value={loginEmail}
            placeholder="name@mail.domain"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            className="Email-passBar"
          />
          <div className="Email-pass">Password</div>
          <input
            type={"password"}
            placeholder=" ••••••••••"
            value={loginPass}
            onChange={(event) => {
              setLoginPass(event.target.value);
            }}
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
          <button className="Login-login" onClick={login}>
            Login
          </button>
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
        <div className="botText1">Made with ♥️ by Pinecone Academy</div>
        <div className="botText2">©boginoo.io 2023</div>
      </div>
    </div>
  );
};

export default Login;
