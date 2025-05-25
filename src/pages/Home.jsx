import Movies from "../components/Movies";

function Home() {
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
                    <Movies />
                </div>
            </div>
        </div>
    );
}

export default Home;
