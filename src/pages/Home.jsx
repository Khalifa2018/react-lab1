import { useLoaderData } from 'react-router-dom'
import Movie from '../components/Movie'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function ErrorBoundary() {
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

export async function homeLoader() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d');
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
                <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Popular Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((movie) => (
                        <Movie key={movie.id} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
