import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import "../styles/Movie.css";
import { toast } from "react-hot-toast";

const Movie = (props) => {
  const URL =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xLiN0HftfnOpCg20r7dS/likes";

  const { id, name, rating, image } = props;

  const likes = useSelector((state) => state.likes.likes);
  const likesFiltered = likes.filter((item) => item.item_id === id);

  const postLikes = async (id) => {
    fetch(`${URL}`, {
      body: JSON.stringify({
        item_id: id,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const navigate = useNavigate();
  const handleClickList = () => {
    toast.success("added to watchlist");
  };

  const handleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <>
      <div
        className="card-container"
        id={id}
        style={{ background: `url(${image})` }}
      >
        <div className="card">
          <div className="card-content">
            <h3 className="card-title" id={name}>{name}</h3>
            <div className="card-count">
              <div className="likes-count">
                <span  
                  onClick={(e) => {
                    postLikes(parseInt(e.target.closest(".card-container").id, 10))
                    const prevLikes = parseInt((e.target.closest('span')).innerText, 10)
                    console.log(e.target.closest('span'))
                    e.target.closest('span').innerText = `${prevLikes + 1} likes`
                  }
                  } >   
                    <AiOutlineHeart />         
                  {likesFiltered.length > 0 ? likesFiltered[0].likes : 0}likes
                </span>
              </div>
              <div className="rating">
                <BsFillStarFill />
                {rating}
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button id={name} onClick={handleClickList} type="button" className="link">
              Save
            </button>
            <button onClick={handleClick} type="button" className="link">
              {" "}
              info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
