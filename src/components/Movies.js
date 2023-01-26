import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../redux/movies.js/fetch';
import Navbar from './Navbar';
import AOS from 'aos';
import '../styles/Movie.css'
import Movie from './Movie';

const Movies = () => {
   
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>     
        <div className="bg1">
        <Navbar />
          <div className="bg22">
        
            <section className="headline one">
              <section className="headline" data-aos="zoom-in">
                <h1 className="unlimited">Unlimited movies, <br /> TV shows, and more.</h1>
                <p className="text">Watch anywhere. anytime.</p>
              </section>
            </section>
          </div>
        </div>
      
      <div className="movies-container">
        <div className="movies-grid">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              type={movie.type}
              genres={movie.genres}
              name={movie.name}
              date={movie.ended}
              runtime={movie.runtime}
              language={movie.language}
              id={movie.id}
              rating={movie.rating.average}
              summary={movie.summary}
              image={movie.image.medium}
            />
          ))}
        </div>
      </div>
      </>
      )
}

      export default Movies
