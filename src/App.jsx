import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const favorites = useSelector(state => state.favorites.movies);
  const favoriteCount = favorites.length;

  return (
    <>
      <nav className="p-4 mb-8 flex gap-4 justify-center items-center">
        <Link to="/home" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link to="/favorites" className="text-blue-500 hover:text-blue-700 relative">
          Favorites
          {favoriteCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs min-w-[18px] text-center">
              {favoriteCount}
            </span>
          )}
        </Link>
        <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
