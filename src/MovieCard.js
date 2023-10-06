import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  var x=`/movie/${movie.title}`
  return (
    <div className="movie-card">
      <Link to={x}>hh</Link>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <span>Rating: {movie.rating}</span>
    </div>

  );
};

export default MovieCard;
