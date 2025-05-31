import Loading from './Loading';

export default function HydrateFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <Loading />
                <p className="mt-4 text-gray-600">Loading your favorite movies...</p>
            </div>
        </div>
    );
} 