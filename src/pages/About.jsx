function About() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">About Our Movie App</h2>
            <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg">
                <p className="text-gray-300 mb-6">
                    Welcome to our Movies App! This application is built using React and provides
                    users with access to popular movies using The Movie Database (TMDB) API.
                </p>
                <p className="text-gray-300 mb-4">
                    Features:
                </p>
                <ul className="space-y-2 mb-6">
                    <li className="p-3 bg-blue-500/10 rounded-lg hover:translate-x-2 transition-transform">Browse popular movies</li>
                    <li className="p-3 bg-blue-500/10 rounded-lg hover:translate-x-2 transition-transform">View movie details including titles, ratings, and descriptions</li>
                    <li className="p-3 bg-blue-500/10 rounded-lg hover:translate-x-2 transition-transform">Responsive design for all devices</li>
                </ul>
                <p className="text-gray-300">
                    This project was created as a demonstration of React concepts including
                    components, hooks, routing, and API integration.
                </p>
            </div>
        </div>
    );
}

export default About;

