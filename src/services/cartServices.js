import { getUserAuth } from "@/utils/GetUser";

const base_url = "http://localhost:8003";

export const AddProductToCart = async (payload) => {
    try {
        const authToken = getUserAuth();
        const response = await fetch(`${base_url}/formula1/wix/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': authToken
            },
            body: JSON.stringify({ lineItems: payload }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const removeProductFromCart = async (payload) => {
    try {
        const authToken = getUserAuth();
        const response = await fetch(`${base_url}/formula1/wix/removeCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': authToken
            },
            body: JSON.stringify({ lineItemIds: payload }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getProductsCart = async () => {
    try {
        const authToken = getUserAuth();
        const response = await fetch(`${base_url}/formula1/wix/getCart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': authToken
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const updateProductsCart = async (payload) => {
    try {
        const authToken = getUserAuth();
        const response = await fetch(`${base_url}/formula1/wix/updateQuantityCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': authToken
            },
            body: JSON.stringify({ lineItems: payload }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(error);
    }
};