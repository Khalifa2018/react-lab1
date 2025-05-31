import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../config/constants';

export default function Navbar() {
    const location = useLocation();
    const favorites = useSelector(state => state.favorites.movies);
    const favoriteCount = favorites.length;

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { path: ROUTES.HOME, label: 'Home' },
        { path: ROUTES.FAVORITES, label: 'Favorites', count: favoriteCount },
        { path: ROUTES.ABOUT, label: 'About' }
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link 
                        to={ROUTES.HOME}
                        className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Movie Explorer
                    </Link>

                    <div className="flex items-center space-x-8">
                        {navLinks.map(({ path, label, count }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                                    ${isActive(path)
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                {label}
                                {count > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {count}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 