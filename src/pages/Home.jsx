import Movies from "../components/Movies";
import { useLoaderData, useRouteError, isRouteErrorResponse } from "react-router-dom";

export async function homeLoader() {
    try {
        const url = "https://api.themoviedb.org/3";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const apiUrl = url + path + apiKey;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error(`Failed to load movies: ${error.message}`);
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

function Home() {
    const movies = useLoaderData();
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-blue-400 mb-4 animate-fade-in">
                    Welcome to Movies App
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover the latest and most popular movies from around the world.
                    Our app provides real-time access to movie information powered by
                    The Movie Database (TMDB) API.
                </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
                <h2 className="text-3xl font-bold text-blue-300 mb-6 text-center">
                    What you can do
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-500/10 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-500/20">
                        <h3 className="text-xl font-semibold text-blue-300 mb-3">Browse Movies</h3>
                        <p className="text-gray-300">Explore our extensive collection of trending and popular movies</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-500/20">
                        <h3 className="text-xl font-semibold text-blue-300 mb-3">Movie Details</h3>
                        <p className="text-gray-300">Get comprehensive information about each movie including ratings and cast</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-500/20">
                        <h3 className="text-xl font-semibold text-blue-300 mb-3">Stay Updated</h3>
                        <p className="text-gray-300">Keep track of the latest releases and upcoming movies</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
                    Featured Movies
                </h2>
                <Movies movies={movies} />
            </div>
        </div>
    );
}

export { ErrorBoundary };
export default Home;
