import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const favorites = useSelector(state => state.favorites.movies);
  const favoriteCount = favorites.length;

  return (
    <>
      <nav style={{
        padding: "1rem",
        marginBottom: "2rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Link to="/home">Home</Link>
        <Link to="/favorites" style={{ position: "relative" }}>
          Favorites
          {favoriteCount > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-12px",
              backgroundColor: "#ff4444",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              minWidth: "18px",
              textAlign: "center"
            }}>
              {favoriteCount}
            </span>
          )}
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
