import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'
import "../styles/Movie.scss";

const Details = () => {
  const navigate = useNavigate()
  const handleClickList = () => {
    toast.success("added to watchlist")
  };
const closePop = ()=>{
  navigate("/movies")
}
  const { movie } = useParams();
  const details = useSelector((state) => state.movies.movies);
   const MovieDetails = details.filter(detail =>detail.name === movie)
    const { name, image, date, genres, runtime, summary} = MovieDetails[0]
  return (
    <div className="centtt"><div className="movie_card" id="bright" key={name}>
      <div className="info_section" key={name}>
     <div className="close" onClick={closePop}><AiOutlineClose /></div>
        <div className="movie_header">
          <img className="locandina" src={image.medium} alt="text"/>
          <h1>{name}</h1>
          <h4>{date}</h4>
          <span className="minutes">{runtime}min</span>
          {genres.map(genre =>(
              <p className="type">{genre}</p>))}
        </div>
        <div className="movie_desc">
          <p className="text">
           {summary}
          </p>
        </div>
        <div className="movie_social">
          <ul>
            <li onClick={handleClickList}  className="link ">Save to watchlist</li>
          </ul>
        </div>
      </div>
          <div className="blur_back bright_back" style={{ background: `url(${image.original})` }} />
    </div>

</div>
  );
};

export default Details;
