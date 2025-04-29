const Movie = ({ title, director, releaseYear, genre, rating }) => {
  return (
    <>
      <h1 id="title">{title}</h1>
      <div>
        <p>
          <strong>Director:</strong> <span id="director">{director}</span>
        </p>
        <p>
          <strong>Release Year:</strong>
          <span id="releaseYear">{releaseYear}</span>
        </p>
        <p>
          <strong>Genre:</strong> <span id="genre">{genre}</span>
        </p>
        <p>
          <strong>IMDb Rating:</strong> <span id="rating">{rating}</span>
        </p>
      </div>
    </>
  );
};
export default Movie;
