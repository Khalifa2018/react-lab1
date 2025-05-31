export const API_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: '1f54bd990f1cdfb230adb312546d765d',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    IMAGE_SIZES: {
        poster: {
            small: 'w185',
            medium: 'w342',
            large: 'w500'
        },
        backdrop: {
            small: 'w300',
            medium: 'w780',
            large: 'w1280'
        }
    }
};

export const ROUTES = {
    HOME: '/home',
    ABOUT: '/about',
    FAVORITES: '/favorites',
    MOVIE_DETAILS: '/movie/:id'
}; 