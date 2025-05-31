import { useLoaderData } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import ErrorBoundary from '../components/ErrorBoundary'
import { API_CONFIG } from '../config/constants'

export async function homeLoader() {
    try {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/movie/popular?api_key=${API_CONFIG.API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error('Failed to fetch movies: ' + error.message);
    }
}

export default function Home() {
    const movies = useLoaderData();
    return <MovieGrid movies={movies} title="Popular Movies" />;
}

Home.ErrorBoundary = ErrorBoundary;
