import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Kids.css'
const Kids = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="kids" id="kids">
          <div className="kids1" data-aos="zoom-in-right">
              <div className="kids-tv">Create profiles for kids.</div>
              <div className="watch">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </div>
          </div>
          <div className="kids2" data-aos="zoom-in-left">
              <img className="kid" src="../images/kids.png" alt="" />
          </div>
    </div>
  )
}

export default Kids
