import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from "../redux/movies.js/fetch";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import { useState } from "react";
import AOS from "aos";
import "../styles/Movie.css";
import Movie from "./Movie";
import Search from "./Search";
import Pagination from "./Pagination";
import { toast } from "react-hot-toast";


const Movies = (props) => {
  const navigate = useNavigate()
  const movies = useSelector((state) => state.movies.movies);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
   
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
if(props.loggedInStatus ){
  return (
    <>
      <div className="bg1">
        <Navbar />
        <div className="bg22">
          <section className="headline one">
            <section className="headline" data-aos="zoom-in">
              <h1 className="unlimited">
                Unlimited movies, <br /> TV shows, and more.
              </h1>
              <p className="text">Watch anywhere. anytime.</p>
              <div className="searchInput">
                <input
                  type="textInput"
                  placeholder="Search"
                  aria-label="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="searchIcon link">Search</div>
              </div>
            </section>
          </section>
        </div>
      </div>
      <h1 className="all-movies">All movies{movies.length}</h1>
      <div className="searchInput">
        <input
          type="textInput"
          placeholder="Search"
          aria-label="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="searchIcon link">Search</div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
      
      <div className="movies-container">
        <div className="movies-grid">   
          {
            // eslint-disable-next-line consistent-return
            // eslint-disable-next-line
            movies.filter((element) => {
              if (search === "") {
                return element;
              }
              if (element.name.toLowerCase().includes(search.toLowerCase())) {
                return element;
              }
            }).map(movie => (<Search
              key={movie.id}
              name={movie.name}
              rating={movie.rating.average}
              image={movie.image.medium}
              search={search}
            />))}         
             {currentPosts.map((movie) =>(
                <Movie
                  key={movie.id}
                  name={movie.name}
                  rating={movie.rating.average}
                  image={movie.image.medium}
                />
              ))
             }

        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
    </>
  );}
  else{
    toast.error("please log in or sign up first")
  navigate("/") 
  }
};

export default Movies;
