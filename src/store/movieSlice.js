import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_CONFIG } from '../config/constants';

// Async thunks
export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopular',
    async () => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/movie/popular?api_key=${API_CONFIG.API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        return data.results;
    }
);

export const fetchMovieDetails = createAsyncThunk(
    'movies/fetchDetails',
    async (movieId) => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/movie/${movieId}?api_key=${API_CONFIG.API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }
        return response.json();
    }
);

const initialState = {
    popularMovies: [],
    currentMovie: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        clearCurrentMovie: (state) => {
            state.currentMovie = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Popular Movies
            .addCase(fetchPopularMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.popularMovies = action.payload;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Movie Details
            .addCase(fetchMovieDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentMovie = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { clearCurrentMovie } = movieSlice.actions;
export default movieSlice.reducer; 