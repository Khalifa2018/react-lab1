import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    movies: []
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const exists = state.movies.some(m => m.id === movie.id);
      if (!exists) {
        state.movies.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.movies = state.movies.filter(movie => movie.id !== movieId);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer; 