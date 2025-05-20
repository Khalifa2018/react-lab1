import { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    const {
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
    } = this.props;

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
        </div>

        <Link to="movie/950387">Details</Link>
      </div>
    );
  }
}

export default Movie;
