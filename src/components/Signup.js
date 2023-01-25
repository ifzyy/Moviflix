import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import '../styles/Signup.css'
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleSuccesfulAuth = () => {
    navigate('/login')
  }

  const showPass = () => {
    if (show) {
      setShow(false)
    }
    else {
      setShow(true)
    }

  }

  const handleSignup = async (e) => {
    e.preventDefault();
    if ((name !== '' && password !== '') && password.length > 6) {
      axios.post("https://moviflix-backend.fly.dev/registrations", {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          logged_in: true
        }
      }, { withCredentials: true }
      ).then(response => {
        if (response.data.status === "created") {
          console.log(response)
          toast.success("Sign up successful")
          handleSuccesfulAuth()

        }
        else {
          toast.error(response.data.message)
        }
      })
    }
    else {
      toast.error("Something went wrong")
    }
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
                <button onClick={showPass} className="show" type="button" >{show ? "hide" : "show"}</button>
              </div>
              <div id="float-label">
                <input type={show ? "text" : "password"}
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <label className={passwordConfirmation.length > 0 ? "Active" : ""} htmlFor="confirm password">
                  Confirm password
                </label>
                <button className="show" onClick={showPass} type="button">{show ? "hide" : "show"}</button>
              </div>
              <input
                className="submit"
                type="submit"
                value="Register"
                onClick={handleSignup} />
              <div className="remember">Already have an account? <Link to="/login">Login</Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
