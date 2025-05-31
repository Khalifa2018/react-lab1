import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{
        padding: "1rem",
        marginBottom: "2rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
