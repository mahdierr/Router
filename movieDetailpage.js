import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Trouver un film en fonction de son ID
function MovieDetailPage() {
  const { movieId } = useParams();
  const movie = movies.find(m => m.id === parseInt(movieId));

  if (!movie) {
    return <p>Film non trouvé.</p>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div>
        <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">Voir la bande-annonce</a>
      </div>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetailPage;
