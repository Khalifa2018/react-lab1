import { useState, useEffect } from "react";
import Movie from "./Movie";



import { useLoaderData } from "react-router-dom";

export async function moviesLoader() {
  const url = "https://api.themoviedb.org/3";
  const path = "/discover/movie?sort_by=popularity.desc";
  const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
  const apiUrl = url + path + apiKey;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
}

function Movies() {
  const movies = useLoaderData();

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}
export default Movies;
