import { useState } from "react";
import Movie from "./Movie";
import { v4 as uuidv4 } from "uuid";

const moviesDataSet = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    releaseYear: 1999,
    genre: "Action",
    rating: 8.7,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genre: "Crime",
    rating: 9.2,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genre: "Crime/Drama",
    rating: 8.9,
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    releaseYear: 2001,
    genre: "Animation/Fantasy",
    rating: 8.6,
  },
];

const Movies = () => {
  const [movies] = useState(moviesDataSet);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={uuidv4()} {...movie} />
      ))}
    </div>
  );
};
export default Movies;
