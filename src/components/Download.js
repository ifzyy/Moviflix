import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Download.css'
const Download = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="download">
            <div className="download2" data-aos="zoom-in-up">
                <img className="mobile" src="../images/mobile.jpg" alt="" />
                <div className="detail">
                    <div></div>
                    <div></div>
                    <div></div>
                    <img className="box" src="../images/boxshot.png" alt="" />
                     <div className="name">Stranger Things <br/> <span>Downloading...</span> </div>
                     <img className="icon" src="../images/download-icon.gif" alt="" />
                </div>
            </div>

            <div className="download1" data-aos="zoom-in-left">
                <div className="download-tv">Download your shows to watch offline.</div>
                <div className="watch">Save your favorites easily and always have something to watch.
                </div>
            </div>

        </div>
    )
}

export default Download
