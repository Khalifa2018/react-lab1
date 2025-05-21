import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

    const apiUrl = url + path + apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
}

export default MoviesPage;
