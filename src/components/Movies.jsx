import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Movie from "./Movie";

const moviesDataSet = [
  {
    id: uuidv4(),
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    id: uuidv4(),
    title: "The Matrix",
    director: "The Wachowskis",
    releaseYear: 1999,
    genre: "Action",
    rating: 8.7,
  },
  {
    id: uuidv4(),
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genre: "Crime",
    rating: 9.2,
  },
  {
    id: uuidv4(),
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genre: "Crime/Drama",
    rating: 8.9,
  },
  {
    id: uuidv4(),
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    releaseYear: 2001,
    genre: "Animation/Fantasy",
    rating: 8.6,
  },
];

class Movies extends Component {
  state = { movies: moviesDataSet };
  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
