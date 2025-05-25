import { useLoaderData } from "react-router-dom";

export async function movieDetailsLoader({ params }) {
    const url = "https://api.themoviedb.org/3";
    const path = `/movie/${params.id}`;
    const apiKey = "?api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const apiUrl = url + path + apiKey;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Movie not found');
    }
    return response.json();
}

function MovieDetails() {
    const movie = useLoaderData();

    const imgBase = "https://image.tmdb.org/t/p/w500";
    const posterUrl = movie.poster_path ? `${imgBase}${movie.poster_path}` : null;
    const backdropUrl = movie.backdrop_path ? `${imgBase}${movie.backdrop_path}` : null;

    return (
        <div
            className="movie-card"
            style={
                backdropUrl ? { backgroundImage: `url(${backdropUrl})` } : undefined
            }
        >
            {posterUrl && (
                <img
                    className="movie-poster"
                    src={posterUrl}
                    alt={`${movie.title} poster`}
                />
            )}
            <div className="movie-info">
                <h1 className="movie-title">{movie.title}</h1>
                {movie.tagline && (
                    <h2 className="movie-tagline">"{movie.tagline}"</h2>
                )}
                <p>
                    <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                    <strong>Status:</strong> {movie.status}
                </p>
                <p>
                    <strong>Adult Content:</strong> {movie.adult ? "Yes" : "No"}
                </p>
                <p>
                    <strong>Original Language:</strong> {movie.original_language?.toUpperCase()}
                </p>
                <p>
                    <strong>Original Title:</strong> {movie.original_title}
                </p>
                <p>
                    <strong>Genres:</strong> {movie.genres?.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Runtime:</strong> {movie.runtime} minutes
                </p>
                <p>
                    <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
                </p>
                <p>
                    <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
                </p>
                <p>
                    <strong>Profit/Loss:</strong> ${(movie.revenue - movie.budget)?.toLocaleString()}
                </p>
                <p>
                    <strong>Overview:</strong> {movie.overview}
                </p>
                <p>
                    <strong>Rating:</strong> {movie.vote_average?.toFixed(1)}/10 ({movie.vote_count?.toLocaleString()} votes)
                </p>
                <p>
                    <strong>Popularity Score:</strong> {movie.popularity?.toFixed(1)}
                </p>
                {movie.homepage && (
                    <p>
                        <strong>Official Website:</strong> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a>
                    </p>
                )}
                {movie.production_companies?.length > 0 && (
                    <p>
                        <strong>Production Companies:</strong> {movie.production_companies.map(company => company.name).join(", ")}
                    </p>
                )}
                {movie.production_countries?.length > 0 && (
                    <p>
                        <strong>Production Countries:</strong> {movie.production_countries.map(country => country.name).join(", ")}
                    </p>
                )}
            </div>
        </div>
    );
}

export default MovieDetails;
