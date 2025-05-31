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
      className="relative my-5 mx-auto max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-lg bg-cover bg-center bg-blend-overlay"
      style={backdropUrl ? { backgroundImage: `url(${backdropUrl})` } : undefined}
    >
      {posterUrl && (
        <img
          className="w-48 h-auto rounded-lg m-5 shadow-lg transition-transform duration-300 hover:scale-105"
          src={posterUrl}
          alt={`${title} poster`}
        />
      )}
      <div className="p-5 text-gray-100">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{title}</h1>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Release Date:</span> {release_date}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Adult:</span> {adult ? "Yes" : "No"}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Language:</span> {original_language.toUpperCase()}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Genres:</span> {genre_ids.join(", ")}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Popularity:</span> {popularity}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Overview:</span> {overview}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-300">Video:</span> {video ? "Yes" : "No"}
        </p>
        <p className="mb-4">
          <span className="font-semibold text-blue-300">Rating:</span> {vote_average} ({vote_count} votes)
        </p>
        <div className="flex gap-4">
          <Link
            to={`/movie/${id}`}
            className="inline-block px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={handleFavoriteClick}
            className={`px-5 py-2.5 text-white rounded-lg transition-colors ${
              isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;


