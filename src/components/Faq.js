import React from "react";
import { useState,useEffect } from "react";
import "../styles/Faq.css";
import AOS from 'aos'
const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const handleClick = () => {
    if (open) {
      setopen(false);
    } else {
      setopen(true);
      setopen1(false);
      setopen2(false);
    }
  };
  const handleClickOne = () => {
    if (open1) {
      setopen1(false);
    } else {
      setopen1(true);
      setopen(false);
      setopen2(false);
    }
  };
  const handleClickTwo = () => {
    if (open2) {
      setopen2(false);
    } else {
      setopen2(true);
      setopen(false);
      setopen1(false);
    }
  };
  console.log(open, open1, open2);
  return (
    <div className="faq-card" id="faq" data-aos="zoom-in">
      <h2>Frequently asked questions</h2>
      <ul className="faq">
        <li>
          {" "}
          <div className="space">
            What is moviflix?
            <button className={open ? "opened" : ""} onClick={handleClick}>+</button>
          </div>
          <div className={open ? "open" : "closed"}>
            Moviflix is an app that was built by Johnson Emmanuel a full stack
            software developer that graduated from Microverse. It was built to
            showcase his skills on the frontend, backend and database side of
            things. It was built with Postgresql,Ruby on rails,React
            js,API,CSS,Sass,Git adn Github. Here is a link to my portfolio:
            <a href="https://johnsn.netlify.app " style={{ color: "red" }}>
              portfolio
            </a>
            Github:{" "}
            <a href="https://github.com/ifzyy" style={{ color: "red" }}>
              Github
            </a>
          </div>
        </li>
        <li>
          {" "}
          <div className="space">
            What can i watch on moviflix?
            <button className={open1 ? "opened" : ""} onClick={handleClickOne}>+</button>
          </div>
          <div className={open1 ? "open1" : "closed1"}>
            Well as a solo side project you currently cant 't watch anything on
            Moviflix.
          </div>
        </li>
        <li>
          {" "}
          <div className="space">
            Is moviflix good for kids?
            <button className={open2 ? "opened" : ""} onClick={handleClickTwo}>+</button>
          </div>
          <div className={open2 ? "open2" : "closed2"}>
            100% There is no R18 content on the page so it is completely good
            and safe for kids
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
