import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { movieDetailsLoader } from './pages/MovieDetails.jsx'
import { homeLoader } from './pages/Home.jsx'

const App = lazy(() => import('./App.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const MovieDetails = lazy(() => import('./pages/MovieDetails.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-2xl text-blue-400">Loading...</div>
  </div>
);

const HydrateFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-2xl text-blue-400">Hydrating...</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    ),
    errorElement: <div className="min-h-screen flex items-center justify-center">
      <div className="text-2xl text-red-500">Something went wrong. Please try again later.</div>
    </div>,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
        loader: homeLoader,
        errorElement: <Home.ErrorBoundary />,
        shouldRevalidate: () => true,
        HydrateFallback: <HydrateFallback />
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Favorites />
          </Suspense>
        ),
        errorElement: <Favorites.ErrorBoundary />
      },
      {
        path: "movie/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MovieDetails />
          </Suspense>
        ),
        loader: movieDetailsLoader,
        errorElement: <MovieDetails.ErrorBoundary />,
        shouldRevalidate: () => true,
        HydrateFallback: <HydrateFallback />
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider 
        router={router} 
        fallbackElement={<LoadingFallback />}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      />
    </Provider>
  </StrictMode>,
)
