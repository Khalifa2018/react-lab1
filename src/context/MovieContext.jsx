import { createContext, useState } from 'react';

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const url = "https://api.themoviedb.org/3";
            const path = "/discover/movie?sort_by=popularity.desc";
            const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
            const apiUrl = url + path + apiKey;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data.results);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        movies,
        loading,
        error,
        fetchMovies
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}

