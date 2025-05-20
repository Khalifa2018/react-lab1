const MovieDetail = ({ movie }) => {
  if (!movie) 
    return <p>No movie data available.</p>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>{movie.title}</h1>
      <h3 style={{ color: "#777" }}>{movie.tagline}</h3>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
      />

      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>

      <p>
        <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
      </p>

      {movie.belongs_to_collection && (
        <div>
          <p>
            <strong>Part of:</strong> {movie.belongs_to_collection.name}
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.belongs_to_collection.poster_path}`}
            alt={movie.belongs_to_collection.name}
            style={{ width: "150px" }}
          />
        </div>
      )}

      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} min
      </p>
      <p>
        <strong>Status:</strong> {movie.status}
      </p>
      <p>
        <strong>Language:</strong>{" "}
        {movie.spoken_languages.map((l) => l.english_name).join(", ")}
      </p>
      <p>
        <strong>Budget:</strong> ${movie.budget.toLocaleString()}
      </p>
      <p>
        <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
      </p>

      <p>
        <strong>Production Companies:</strong>
      </p>
      <ul>
        {movie.production_companies.map((company) => (
          <li key={company.id}>
            {company.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                alt={company.name}
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
            )}
            {company.name}
          </li>
        ))}
      </ul>

      <p>
        <strong>IMDB:</strong>{" "}
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IMDB
        </a>
      </p>

      <p>
        <strong>Homepage:</strong>{" "}
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          {movie.homepage}
        </a>
      </p>
      <p>
        <strong>Vote Average:</strong> {movie.vote_average} ({movie.vote_count}{" "}
        votes)
      </p>
    </div>
  );
};

export default MovieDetail;
