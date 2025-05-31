import { useState, useCallback } from 'react';
import { API_CONFIG } from '../config/constants';

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);

        try {
            const url = `${API_CONFIG.BASE_URL}${endpoint}?api_key=${API_CONFIG.API_KEY}`;
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchData, loading, error };
}; 