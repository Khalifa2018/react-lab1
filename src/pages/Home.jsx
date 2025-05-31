import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieGrid from '../components/MovieGrid';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import { fetchPopularMovies } from '../store/movieSlice';

export default function Home() {
    const dispatch = useDispatch();
    const { popularMovies, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPopularMovies());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        throw new Error(error);
    }

    return <MovieGrid movies={popularMovies} title="Popular Movies" />;
}

Home.ErrorBoundary = ErrorBoundary;
