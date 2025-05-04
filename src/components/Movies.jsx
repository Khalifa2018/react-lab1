import { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  constructor() {
    super();
    console.log("Movies component constructor");
    this.state = { movies: [] };
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      `Movies component derived state from props with next props: ${nextProps} and next state: ${nextState}`
    );
    return null;
  }
  componentDidMount() {
    console.log("Movies component mounted");

    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

    const apiUrl = url + path + apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `Movies component should update with next props: ${nextProps} and next state: ${nextState}`
    );
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `Movies component snapshot before update with prev props: ${prevProps} and prev state: ${prevState}`
    );
    return null;
  }
  componentDidUpdate() {
    console.log("Movies component updated");
  }

  componentWillUnmount() {
    console.log("Movies component unmounted");
  }

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
