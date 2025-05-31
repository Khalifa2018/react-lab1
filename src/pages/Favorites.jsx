import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';
import ErrorBoundary from '../components/ErrorBoundary';
import { ROUTES } from '../config/constants';

export default function Favorites() {
    const favorites = useSelector(state => state.favorites.movies);
    const navigate = useNavigate();

    if (favorites.length === 0) {
        return (
            <div className="container-custom py-12">
                <div className="card text-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Your Favorite Movies</h2>
                    <p className="text-gray-600 mb-6">You haven't added any movies to your favorites yet.</p>
                    <button 
                        onClick={() => navigate(ROUTES.HOME)}
                        className="btn btn-primary"
                    >
                        Browse Movies
                    </button>
                </div>
            </div>
        );
    }

    return <MovieGrid movies={favorites} title="Your Favorite Movies" />;
}

Favorites.ErrorBoundary = ErrorBoundary; 