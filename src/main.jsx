import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import ErrorBoundary from './components/ErrorBoundary';
import HydrateFallback from './components/HydrateFallback';
import { ROUTES } from './config/constants';
import './index.css';

const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
                errorElement: <Home.ErrorBoundary />,
                loader: Home.homeLoader,
                shouldRevalidate: ({ currentUrl, nextUrl }) => {
                    // Revalidate if the user navigates to a different page and back
                    return currentUrl.pathname !== nextUrl.pathname;
                }
            },
            {
                path: ROUTES.ABOUT,
                element: <About />,
                errorElement: <ErrorBoundary />
            },
            {
                path: ROUTES.FAVORITES,
                element: <Favorites />,
                errorElement: <Favorites.ErrorBoundary />,
                // Hydrate favorites from localStorage
                loader: () => {
                    const favorites = localStorage.getItem('favorites');
                    return favorites ? JSON.parse(favorites) : [];
                },
                shouldRevalidate: ({ currentUrl, nextUrl }) => {
                    // Revalidate if the user adds or removes a favorite
                    return currentUrl.pathname !== nextUrl.pathname;
                }
            },
            {
                path: ROUTES.MOVIE_DETAILS,
                element: <MovieDetails />,
                errorElement: <MovieDetails.ErrorBoundary />,
                loader: MovieDetails.movieDetailsLoader,
                shouldRevalidate: ({ currentUrl, nextUrl }) => {
                    // Revalidate if the user navigates to a different movie
                    return currentUrl.pathname !== nextUrl.pathname;
                }
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider
                router={router}
                fallbackElement={<HydrateFallback />}
            />
        </Provider>
    </React.StrictMode>
);
