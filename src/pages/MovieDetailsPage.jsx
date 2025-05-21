import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = "https://api.themoviedb.org/3/";
      const path = `movie/${id}?`;
      const apiKey = "api_key=9813ce01a72ca1bd2ae25f091898b1c7";
      const apiUrl = url + path + apiKey;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="movie-detail-container">
          <h1 className="movie-title">{movie.title}</h1>
          <h3 className="movie-tagline">{movie.tagline}</h3>

          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>

          {movie.belongs_to_collection && (
            <div>
              <p><strong>Part of:</strong> {movie.belongs_to_collection.name}</p>
              <img
                className="collection-poster"
                src={`https://image.tmdb.org/t/p/w300${movie.belongs_to_collection.poster_path}`}
                alt={movie.belongs_to_collection.name}
              />
            </div>
          )}

          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <p><strong>Status:</strong> {movie.status}</p>
          <p><strong>Language:</strong> {movie.spoken_languages.map((l) => l.english_name).join(", ")}</p>
          <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
          <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>

          <p><strong>Production Companies:</strong></p>
          <ul>
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {company.logo_path && (
                  <img
                    className="production-logo"
                    src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                    alt={company.name}
                  />
                )}
                {company.name}
              </li>
            ))}
          </ul>

          <p><strong>IMDB:</strong>{" "}
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IMDB
            </a>
          </p>

          <p><strong>Homepage:</strong>{" "}
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              {movie.homepage}
            </a>
          </p>

          <p>
            <strong>Vote Average:</strong> {movie.vote_average} (
            {movie.vote_count} votes)
          </p>
        </div>
      ) : (
        <h1>Failed to load movie details</h1>
      )}
    </div>
  );
}

export default MovieDetailPage;
