import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../redux/movies.js/fetch';
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
  return (
    <div>
      {movies.map((movie) =>(
        
        <Movie
          key={movie.id}
          genres={movie.genres}
          name={movie.name}
          language={movie.language}
          id={movie.id}
          rating={movie.rating}
          summary={movie.summary}
          image={movie.image.original}
        />
      ))}
    </div>
  )
}

export default Movies
