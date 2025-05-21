import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
