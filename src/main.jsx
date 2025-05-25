import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import { movieDetailsLoader } from './pages/MovieDetails.jsx'

const App = lazy(() => import('./App.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const MovieDetails = lazy(() => import('./pages/MovieDetails.jsx'))

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
        path: "home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )
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
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </StrictMode>,
)
