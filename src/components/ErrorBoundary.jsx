import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/constants';

export default function ErrorBoundary() {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage = 'Something went wrong';
    let errorTitle = 'Oops!';
    let errorStatus = null;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorTitle = `Error ${error.status}`;
        errorMessage = error.statusText || 'An error occurred while loading the page';
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="card text-center max-w-md">
                <h2 className="text-4xl font-bold text-red-600 mb-4">
                    {errorTitle}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                    {errorMessage}
                </p>
                {errorStatus === 404 && (
                    <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist.
                    </p>
                )}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-secondary"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate(ROUTES.HOME)}
                        className="btn btn-primary"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
} 