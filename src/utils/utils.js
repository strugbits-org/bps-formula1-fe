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
export const extractUniqueColors = (data) => {
    let allColors = [];
    data.forEach(item => {
        allColors = allColors.concat(item.colors);
    });
    const uniqueColors = [...new Set(allColors)];
    return uniqueColors;
}