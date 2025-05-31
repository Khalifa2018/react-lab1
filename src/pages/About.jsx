import { Link } from 'react-router-dom';
import { ROUTES } from '../config/constants';

export default function About() {
    return (
        <div className="container-custom py-12">
            <div className="card">
                <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
                    About Movie Explorer
                </h1>
                
                <div className="space-y-8">
                    <section className="bg-white/50 rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                            Welcome to Movie Explorer
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Movie Explorer is your ultimate destination for discovering and exploring the world of cinema. 
                            Powered by The Movie Database (TMDB) API, we bring you the latest and most popular movies 
                            from around the globe.
                        </p>
                    </section>

                    <section className="bg-white/50 rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                            Features
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-blue-50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">Browse Movies</h3>
                                <p className="text-gray-600">
                                    Explore our extensive collection of trending and popular movies
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">Movie Details</h3>
                                <p className="text-gray-600">
                                    Get comprehensive information about each movie including ratings and cast
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">Favorites</h3>
                                <p className="text-gray-600">
                                    Save your favorite movies for quick access later
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white/50 rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                            Get Started
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Ready to explore the world of movies? Start by browsing our collection of popular films 
                            or search for your favorite titles.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link 
                                to={ROUTES.HOME}
                                className="btn btn-primary"
                            >
                                Browse Movies
                            </Link>
                            <Link 
                                to={ROUTES.FAVORITES}
                                className="btn btn-secondary"
                            >
                                View Favorites
                            </Link>
                        </div>
                    </section>

                    <section className="bg-white/50 rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                            Technology Stack
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-indigo-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-indigo-600 mb-2">Frontend</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• React with modern hooks</li>
                                    <li>• React Router for navigation</li>
                                    <li>• Redux for state management</li>
                                    <li>• Tailwind CSS for styling</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-indigo-600 mb-2">API Integration</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• The Movie Database (TMDB) API</li>
                                    <li>• Real-time data fetching</li>
                                    <li>• Responsive image handling</li>
                                    <li>• Error handling and fallbacks</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

