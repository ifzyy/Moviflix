import React, { useState } from "react";
import {  useNavigate } from "react-router";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
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

  const userStatus = {
    online: true
  }

  const handleSuccessfulLogin = (data) => {
    const use = JSON.parse(localStorage.getItem("user"))
    const userOnline = JSON.parse(localStorage.getItem("online"))
    if (use.email === data.email) {
      props.setLoggedInStatus(userOnline.online)
      props.setuser(use)
    }
    navigate('/')
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post("https://weathered-bird-9392.fly.dev/sessions", {
      user: {
        email: validator.isEmail(email) ? email : toast.error("Enter valid email"),
        password: password,
      }
    }, { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        toast.success(`welcome back ${response.data.user.name}`)
         localStorage.setItem("online", JSON.stringify(userStatus))
        localStorage.setItem('user', JSON.stringify(response.data.user));
        handleSuccessfulLogin(response.data.user)
      }
      else {
        toast.error(`${response.data.message}. Enter correct details`)
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
              <div className="remember">New to Moviflix? <Link to="/signup">Sign up</Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
