import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/favoriteSlice';
import Movie from '../components/Movie';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

function ErrorBoundary() {
    const error = useRouteError();
    
    if (isRouteErrorResponse(error)) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-900/50 rounded-xl p-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-500 mb-4">Error {error.status}</h2>
                    <p className="text-gray-300 text-lg">{error.statusText}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-900/50 rounded-xl p-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-500 mb-4">Oops!</h2>
                <p className="text-gray-300 text-lg">{error.message || "Something went wrong"}</p>
            </div>
        </div>
    );
}

function Favorites() {
    const favorites = useSelector(state => state.favorites.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = async (movieId) => {
        try {
            await Promise.resolve(dispatch(removeFromFavorites(movieId)));
        } catch (error) {
            console.error('Error removing movie from favorites:', error);
        }
    };

    const handleBrowseMovies = () => {
        navigate('/home');
    };

    if (favorites.length === 0) {
        return (
            <div className="container-custom py-12">
                <div className="card text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">Your Favorite Movies</h2>
                    <p className="text-gray-300 mb-6">You haven't added any movies to your favorites yet.</p>
                    <div className="flex justify-center space-x-4">
                        <button 
                            onClick={handleBrowseMovies}
                            className="btn btn-primary"
                        >
                            Browse Movies
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-custom py-12">
            <div className="card">
                <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Your Favorite Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((movie) => (
                        <div key={movie.id} className="relative group">
                            <Movie {...movie} />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button 
                                    onClick={() => handleRemove(movie.id)}
                                    className="btn bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-300"
                                >
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { ErrorBoundary };
export default Favorites; 