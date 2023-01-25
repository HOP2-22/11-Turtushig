import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./App.css";

function Home() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPass, setSignUpPass] = useState("");
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

  const login = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3333/login", {
        email: loginEmail,
        password: loginPass,
      })
      .then((e) => {
        Cookies.set("token", e.data.token);
        setUser(e.data.userName);
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
    e.preventDefault();
  };

  const signUp = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3333/register", {
        email: signUpEmail,
        password: signUpPass,
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
    e.preventDefault();
  };
  const request = async (e) => {
    const a = await axios.get(`http://localhost:3333`);
    console.log(a);
  };

  const LogOut = () => {
    Cookies.remove("token");
    setUser(null);
  };
  useEffect(() => {
    const getUser = async () => {
      const a = await axios.get(`http://localhost:3333`);
    };
  });

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
            row="30"
            className="SearchBar"
          />
          <button className="Shorten">Shorten</button>
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
