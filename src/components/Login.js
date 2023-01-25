import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import axios from 'axios';


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const showPass = () => {
    if (show) {
      setShow(false)
    }
    else {
      setShow(true)
    }

  }
  const handleSuccessfulLogin = (data) => {
    props.setLoggedInStatus(true);
    props.setuser(data)
    navigate('/')
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post("https://throbbing-water-6757.fly.dev/sessions", {
      user: {
        email: validator.isEmail(email) ? email : toast.error("Enter valid email"),
        password: password,
      }
    }, { withCredentials: true }
    ).then(response => {
      console.log(response)
      if (response.data.status === "created") {
        toast.success(`welcome back ${response.data.user.name}`)
           handleSuccessfulLogin(response.data.user)
      }
      else {
        toast.error(`${response.data.message}`)
      }
    })
  };

  return (
    <div>
      <div className="bg">
        <div className="bg2">
          <header className="header">
            <div className="logo"><a className="logo " href="/">Moviflix</a> </div>
          </header>
          <Toaster position="top-center" />
          <div className="cent">
            <form className="form">
              <h2>Login</h2>
              <div id="float-label">
                <input type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label className={email.length > 0 ? "Active" : ""} htmlFor="email">
                  Email adress
                </label>
              </div>
              <div id="float-label">
                <input type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label className={password.length > 0 ? "Active" : ""} htmlFor="password">
                  Password
                </label>
                <button className="show" onClick={showPass} type="button">{show ? "hide" : "show"}</button>
              </div>

              <input
                className="submit"
                type="submit"
                value="Login"
                onClick={handleLogin} />
              <div className="remember">New to Moviflix? <a href="/signup">Sign up</a></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
