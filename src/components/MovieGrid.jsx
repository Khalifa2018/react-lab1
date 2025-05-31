import MovieCard from './MovieCard';

export default function MovieGrid({ movies, title }) {
    if (!movies?.length) {
        return (
            <div className="container-custom py-12">
                <div className="card text-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>
                    <p className="text-gray-600">No movies found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container-custom py-12">
            <div className="card">
                <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
} 