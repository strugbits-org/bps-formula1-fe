import { cookies } from 'next/headers';

export const getAuthToken = () => {
    const cookieStore = cookies();
    const authToken = cookieStore?.get('authToken');
    return authToken?.value
}

export const setCookieServer = (key, value) => {
    const cookieStore = cookies();
    cookieStore.set(key, value);
}