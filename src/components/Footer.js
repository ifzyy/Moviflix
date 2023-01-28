import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaAngellist } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import '../styles/Footer.css'
const Footer = () => {

  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-right">

          <a href="https://angel.co/u/johnson-emmanuel-2"><FaAngellist /></a>
          <a href="https://twitter.com/JohnsnEmmanuel"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/johnson-emmanuel/"><BsLinkedin /></a>
          <a href="https://github.com/ifzyy"><AiFillGithub /></a>

        </div>

        <div className="footer-left">

          <p className="footer-links">
            <a className="link-1" href="#home">Home</a>

            <a href="#enjoy">Enjoy</a>

            <a href="#kids">Kids</a>

            <a href="#download">Download</a>
            <a href="#faq">Enjoy</a>
          </p>

          <p>Moviflix © 2023</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
