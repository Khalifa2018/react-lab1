import Movie from "./Movie";

function Movies({ movies }) {
  if (!movies) {
    return <div>No movies found</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
