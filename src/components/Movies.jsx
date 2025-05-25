import Movie from "./Movie";
import { useMovies } from "../hook/useMovies";
import { useEffect } from "react";


function Movies() {
  const { movies, loading, error, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
