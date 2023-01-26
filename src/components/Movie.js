import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import '../styles/Movie.css'
const Movie = (props) => {

  const { name, rating, image } = props

  return (
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
          <button type="button" className='link'> info</button>
        </div>
      </div>
    </div>
  )
}

export default Movie
