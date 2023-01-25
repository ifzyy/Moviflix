import React from 'react'

const Movie = (props) => {
    const {name,language,id,summary,rating,image} = props
  return (
    <div className="all">
       <div className='movies' style={{backgroundImage: `url(${image})`}}>
         <p>{name}</p>
         {summary}
         {language}
         {id}
         {rating}
       </div>
    </div>
  )
}

export default Movie
