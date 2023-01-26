import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import '../styles/Movie.css'
const Movie = (props) => {

  const { name, rating, image,date,genres,runtime,summary,bigImage } = props
  const [isOpen, setisOpen] = useState(false)
  const handleClick = () => {
    if(isOpen){
      setisOpen(false)
    }
    else {
      setisOpen(true)
    }
  
  };
  return (
    <>
        <div className={isOpen ? "movie_card" : "none"} id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={image} alt="big test" />
              <h1>{name}</h1>
              <h4>{date}</h4>
              <span className="minutes">{runtime} min</span>
              {genres.map(gen => (
                <p className="type">{gen}</p>))}
            </div>
            <div className="movie_desc">
              <p className="text">{summary}</p>
            </div>
            <div className="movie_social">
              <ul>
                <li><i className="material-icons">share</i></li>
                <li><i className="material-icons"></i></li>
                <li><i className="material-icons">chat_bubble</i></li>
              </ul>
            </div>
          </div>
          <div className="blur_back bright_back" style={{ background: `url(${bigImage})` }} />
        </div>

     
      <div className="card-container" style={{ background: `url(${image})` }}>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title" >{name}</h3>
          <div className="card-count">
            <div className="likes-count"><span> <AiOutlineHeart /></span>0</div>
            <div className="rating"><BsFillStarFill />{rating}</div>
          </div>
        </div>
        <div className="card-buttons">
          <button type="button" className='link'>Save</button>
          <button onClick={handleClick} type="button" className='link'> info</button>
        </div>
      </div>
    </div></>
    
  )
}

export default Movie
