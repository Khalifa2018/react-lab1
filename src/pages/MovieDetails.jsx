import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const url = "https://api.themoviedb.org/3";
                const path = `/movie/${id}`;
                const apiKey = "?api_key=9813ce01a72ca1bd2ae25f091898b1c7";
                const apiUrl = url + path + apiKey;

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Movie not found');
                }
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>No movie found</div>;
    }

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
                <p>
                    <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                    <strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
                </p>
                <p>
                    <strong>Language:</strong> {movie.original_language?.toUpperCase()}
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
                    <strong>Overview:</strong> {movie.overview}
                </p>
                <p>
                    <strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)
                </p>
            </div>
        </div>
    );
}

export default MovieDetails;
