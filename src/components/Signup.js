import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import '../styles/Signup.css'
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate()
  const handleSuccesfulAuth = () => {
    props.setLoggedInStatus(true);
    navigate('/')
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/registrations", {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }
    }, { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        handleSuccesfulAuth()
      }
      else {
        console.log(response)
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
              <h2>Sign up</h2> 
              <div id="float-label">
                <input type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                <label className={name.length > 0 ? "Active" : ""} htmlFor="Name">
                  Name
                </label>
              </div>
              <div id="float-label">
                <input type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label className={email.length > 0 ? "Active" : ""} htmlFor="email">
                 Email adress
                </label>
              </div>
              <div id="float-label">
                <input type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label className={password.length > 0 ? "Active" : ""} htmlFor="password">
                  Password
                </label>
              </div>
              <div id="float-label">
                <input type="text"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <label className={passwordConfirmation.length > 0 ? "Active" : ""} htmlFor="confirm password">
                  Confirm password
                </label>
              </div>
              <input
                className="submit"
                type="submit"
                value="Register"
                onClick={handleSignup} />
              <div className="remember">Already have an account? <a href="/login">Login</a></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
