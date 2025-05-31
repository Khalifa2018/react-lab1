import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoriteSlice";

function Movie({
  id,
  title,
  overview,
  release_date,
  adult,
  backdrop_path,
  genre_ids,
  original_language,
  popularity,
  poster_path,
  video,
  vote_average,
  vote_count,
}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.movies);
  const isFavorite = favorites.some(movie => movie.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({
        id,
        title,
        overview,
        release_date,
        adult,
        backdrop_path,
        genre_ids,
        original_language,
        popularity,
        poster_path,
        video,
        vote_average,
        vote_count,
      }));
    }
  };

  const imgBase = "https://image.tmdb.org/t/p/w500";
  const posterUrl = poster_path ? `${imgBase}${poster_path}` : null;
  const backdropUrl = backdrop_path ? `${imgBase}${backdrop_path}` : null;

  return (
    <div
      className="movie-card"
      style={
        backdropUrl ? { backgroundImage: `url(${backdropUrl})` } : undefined
      }
    >
      {posterUrl && (
        <img
          className="movie-poster"
          src={posterUrl}
          alt={`${title} poster`}
        />
      )}
      <div className="movie-info">
        <h1 className="movie-title">{title}</h1>
        <p>
          <strong>Release Date:</strong> {release_date}
        </p>
        <p>
          <strong>Adult:</strong> {adult ? "Yes" : "No"}
        </p>
        <p>
          <strong>Language:</strong> {original_language.toUpperCase()}
        </p>
        <p>
          <strong>Genres:</strong> {genre_ids.join(", ")}
        </p>
        <p>
          <strong>Popularity:</strong> {popularity}
        </p>
        <p>
          <strong>Overview:</strong> {overview}
        </p>
        <p>
          <strong>Video:</strong> {video ? "Yes" : "No"}
        </p>
        <p>
          <strong>Rating:</strong> {vote_average} ({vote_count} votes)
        </p>
        <div className="movie-actions">
          <Link
            to={`/movie/${id}`}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#646cff",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              marginRight: "10px"
            }}
          >
            View Details
          </Link>
          <button
            onClick={handleFavoriteClick}
            style={{
              padding: "10px 20px",
              backgroundColor: isFavorite ? "#ff4444" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;


