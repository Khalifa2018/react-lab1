import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorBoundary() {
    const error = useRouteError();
    
    if (isRouteErrorResponse(error)) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-900/50 rounded-xl p-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-500 mb-4">Error {error.status}</h2>
                    <p className="text-gray-300 text-lg">{error.statusText}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-900/50 rounded-xl p-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-500 mb-4">Oops!</h2>
                <p className="text-gray-300 text-lg">{error.message || "Something went wrong"}</p>
            </div>
        </div>
    );
} 