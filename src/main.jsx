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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
        loader: homeLoader
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Favorites />
          </Suspense>
        ),
      },
      {
        path: "movie/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MovieDetails />
          </Suspense>
        ),
        loader: movieDetailsLoader,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
