import { useState, useEffect } from "react";
import Movie from "./Movie";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("Movies component mounted");

    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

    const apiUrl = url + path + apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));

    return () => {
      console.log("Movies component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Movies component updated");
  }, [movies]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
