import { useLoaderData } from 'react-router-dom'
import Movie from '../components/Movie'
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

    return (
        <div className="container-custom py-12">
            <div className="card">
                <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
                    Popular Movies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((movie) => (
                        <Movie key={movie.id} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

Home.ErrorBoundary = ErrorBoundary;
