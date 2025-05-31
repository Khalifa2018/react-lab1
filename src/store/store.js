import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    movies: movieReducer
  }
}); 