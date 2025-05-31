import Movies from "../components/Movies";
import { useLoaderData } from "react-router-dom";

export async function homeLoader() {
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const apiUrl = url + path + apiKey;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
}

function Home() {
    const movies = useLoaderData();
    
    return (
        <div className="home-container">
            <h2>Welcome to Movies App</h2>
            <div className="home-content">
                <p>
                    Discover the latest and most popular movies from around the world.
                    Our app provides real-time access to movie information powered by
                    The Movie Database (TMDB).
                </p>
                <div className="features-section">
                    <h3>What you can do:</h3>
                    <ul>
                        <li>Browse trending movies</li>
                        <li>Get detailed information about each movie</li>
                        <li>Stay updated with the latest releases</li>
                    </ul>
                </div>
                <div className="get-started">
                    <p>Start exploring our collection of movies now!</p>
                    <Movies movies={movies} />
                </div>
            </div>
        </div>
    );
}

export default Home;
