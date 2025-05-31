import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/favoriteSlice';

export default function FavoriteButton({ movie }) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.movies);
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    return (
        <button
            onClick={handleToggleFavorite}
            className={`btn ${isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
} 