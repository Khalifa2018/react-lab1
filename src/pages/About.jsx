function About() {
    return (
        <div className="about-container">
            <h2>About Our Movie App</h2>
            <div className="about-content">
                <p>
                    Welcome to our Movies App! This application is built using React and provides
                    users with access to popular movies using The Movie Database (TMDB) API.
                </p>
                <p>
                    Features:
                </p>
                <ul>
                    <li>Browse popular movies</li>
                    <li>View movie details including titles, ratings, and descriptions</li>
                    <li>Responsive design for all devices</li>
                </ul>
                <p>
                    This project was created as a demonstration of React concepts including
                    components, hooks, routing, and API integration.
                </p>
            </div>
        </div>
    );
}

export default About;
