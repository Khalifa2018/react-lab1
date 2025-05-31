import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/favoriteSlice';
import Movie from '../components/Movie';

function Favorites() {
    const favorites = useSelector(state => state.favorites.movies);
    const dispatch = useDispatch();

    const handleRemove = (movieId) => {
        dispatch(removeFromFavorites(movieId));
    };

    if (favorites.length === 0) {
        return (
            <div className="favorites-container">
                <h2>Your Favorite Movies</h2>
                <p>You haven't added any movies to your favorites yet.</p>
            </div>
        );
    }

    return (
        <div className="favorites-container">
            <h2>Your Favorite Movies</h2>
            <div className="favorites-list">
                {favorites.map((movie) => (
                    <div key={movie.id} className="favorite-movie">
                        <Movie {...movie} />
                        <button 
                            onClick={() => handleRemove(movie.id)}
                            className="remove-favorite-btn"
                        >
                            Remove from Favorites
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites; 