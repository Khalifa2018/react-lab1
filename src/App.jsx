import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
      <h1>Movies App</h1>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
