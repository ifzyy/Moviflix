import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import axios from 'axios';


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const handleSuccessfulLogin = (data) => {
    props.setLoggedInStatus(true);
    props.setuser(data)
    navigate('/')
  }

  const handleLogin = async (e) => {
    console.log(password.length)
    e.preventDefault();
    axios.post("http://localhost:3001/sessions", {
      user: {
        email: validator.isEmail(email) ? email : setMessage("Enter valid email*"),
        password: password,
      }
    }, { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        handleSuccessfulLogin(response.data.user)
        toast.success(`welcome back ${response.data.user}`)
      }
      else {
        console.log(response)
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
                <p className="error">{message}</p>
              </div>
              <div id="float-label">
                <input type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label className={password.length > 0 ? "Active" : ""} htmlFor="password">
                  Password
                </label>
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
