import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { API_CONFIG, ROUTES } from '../config/constants';
import ErrorBoundary from '../components/ErrorBoundary';
import FavoriteButton from '../components/FavoriteButton';
import Loading from '../components/Loading';
import { fetchMovieDetails, clearCurrentMovie } from '../store/movieSlice';

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentMovie, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
        return () => {
            dispatch(clearCurrentMovie());
        };
    }, [dispatch, id]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        throw new Error(error);
    }

    if (!currentMovie) {
        return null;
    }

    const backdropUrl = currentMovie.backdrop_path
        ? `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.IMAGE_SIZES.backdrop.large}${currentMovie.backdrop_path}`
        : 'https://via.placeholder.com/1920x1080?text=No+Image';

    return (
        <div className="min-h-screen">
            <div 
                className="h-[60vh] relative bg-cover bg-center"
                style={{ backgroundImage: `url(${backdropUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
            </div>

            <div className="container-custom -mt-32 relative z-10">
                <div className="card">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src={`${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.IMAGE_SIZES.poster.large}${currentMovie.poster_path}`}
                                alt={currentMovie.title}
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                                {currentMovie.title}
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-gray-600">
                                    {new Date(currentMovie.release_date).getFullYear()}
                                </span>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-600">
                                    {currentMovie.runtime} minutes
                                </span>
                                <span className="text-gray-600">•</span>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-gray-600">
                                        {currentMovie.vote_average.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8">
                                {currentMovie.overview}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <FavoriteButton movie={currentMovie} />
                                <button
                                    onClick={() => navigate(ROUTES.HOME)}
                                    className="btn btn-secondary"
                                >
                                    Back to Movies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

MovieDetails.ErrorBoundary = ErrorBoundary;
