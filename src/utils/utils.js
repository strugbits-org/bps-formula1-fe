export const parseArrayFromParams = (queryParams) => {
    if (queryParams) {
        try {
            return JSON.parse(queryParams);
        } catch (error) {
            console.error('Error parsing JSON from query params:', error);
            return [];
        }
    }
    return [];
};