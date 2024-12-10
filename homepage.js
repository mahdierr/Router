import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
          <Link to={`/movie/${movie.id}`}>Voir la description</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
