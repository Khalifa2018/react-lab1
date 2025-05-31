import { Link } from 'react-router-dom';
import { API_CONFIG, ROUTES } from '../config/constants';

export default function MovieCard({ id, title, poster_path, vote_average, release_date }) {
    const posterUrl = poster_path
        ? `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.IMAGE_SIZES.poster.medium}${poster_path}`
        : 'https://via.placeholder.com/342x513?text=No+Image';

    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to={`${ROUTES.MOVIE_DETAILS.replace(':id', id)}`}>
                <div className="aspect-[2/3] relative overflow-hidden">
                    <img
                        src={posterUrl}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{new Date(release_date).getFullYear()}</span>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
} 