import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Enjoy.css'

const Enjoy = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="enjoy">
            <div className="enjoy1" data-aos="zoom-in-right">
                <div className="enjoy-tv">Enjoy your Tv</div>
                <div className="watch">Watch on Smart TVs,
                    Playstation, Xbox, Chromecast,
                    Apple TV, Blu-ray players, and more.
                </div>
            </div>
            <div className="enjoy2" data-aos="zoom-in-left">
                <img className="tv" src="../images/tv.png" alt="" />
                <video className="vid" src="../media/video.m4v" autoPlay playsInline muted loop> </video>
            </div>
        </div>
    )
}

export default Enjoy
