import { useLoaderData, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoriteSlice";

export async function movieDetailsLoader({ params }) {
    try {
        const url = "https://api.themoviedb.org/3";
        const path = `/movie/${params.id}`;
        const apiKey = "?api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const apiUrl = url + path + apiKey;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch movie: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to load movie: ${error.message}`);
    }
}

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

function MovieDetails() {
    const movie = useLoaderData();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.movies);
    const isFavorite = favorites.some(m => m.id === movie.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                genre_ids: movie.genres.map(g => g.id),
                original_language: movie.original_language,
                popularity: movie.popularity,
                poster_path: movie.poster_path,
                video: movie.video,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
            }));
        }
    };

    const imgBase = "https://image.tmdb.org/t/p/w500";
    const posterUrl = movie.poster_path ? `${imgBase}${movie.poster_path}` : null;
    const backdropUrl = movie.backdrop_path ? `${imgBase}${movie.backdrop_path}` : null;

    return (
        <div className="container-custom py-8">
            <div
                className="relative bg-dark-lighter rounded-xl overflow-hidden shadow-lg bg-cover bg-center bg-blend-overlay"
                style={backdropUrl ? { backgroundImage: `url(${backdropUrl})` } : undefined}
            >
                <div className="flex flex-col md:flex-row p-6">
                    {posterUrl && (
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                src={posterUrl}
                                alt={`${movie.title} poster`}
                            />
                        </div>
                    )}
                    <div className="md:w-2/3 md:pl-6 text-gray-100">
                        <h1 className="text-3xl font-bold text-blue-400 mb-4">{movie.title}</h1>
                        {movie.tagline && (
                            <h2 className="text-xl italic text-blue-300 mb-4">"{movie.tagline}"</h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <span className="font-semibold text-blue-300">Release Date:</span> {movie.release_date}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Status:</span> {movie.status}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Adult Content:</span> {movie.adult ? "Yes" : "No"}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Original Language:</span> {movie.original_language?.toUpperCase()}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Original Title:</span> {movie.original_title}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Genres:</span> {movie.genres?.map(genre => genre.name).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Runtime:</span> {movie.runtime} minutes
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Budget:</span> ${movie.budget?.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Revenue:</span> ${movie.revenue?.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Profit/Loss:</span> ${(movie.revenue - movie.budget)?.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Rating:</span> {movie.vote_average?.toFixed(1)}/10 ({movie.vote_count?.toLocaleString()} votes)
                            </p>
                            <p>
                                <span className="font-semibold text-blue-300">Popularity Score:</span> {movie.popularity?.toFixed(1)}
                            </p>
                        </div>
                        <div className="mt-6">
                            <p className="mb-4">
                                <span className="font-semibold text-blue-300">Overview:</span>
                                <br />
                                <span className="text-gray-300">{movie.overview}</span>
                            </p>
                            {movie.homepage && (
                                <p className="mb-4">
                                    <span className="font-semibold text-blue-300">Official Website:</span>{" "}
                                    <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                        {movie.homepage}
                                    </a>
                                </p>
                            )}
                            {movie.production_companies?.length > 0 && (
                                <p className="mb-2">
                                    <span className="font-semibold text-blue-300">Production Companies:</span> {movie.production_companies.map(company => company.name).join(", ")}
                                </p>
                            )}
                            {movie.production_countries?.length > 0 && (
                                <p className="mb-4">
                                    <span className="font-semibold text-blue-300">Production Countries:</span> {movie.production_countries.map(country => country.name).join(", ")}
                                </p>
                            )}
                            <button
                                onClick={handleFavoriteClick}
                                className={`btn ${
                                    isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                }`}
                            >
                                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ErrorBoundary };
export default MovieDetails;
