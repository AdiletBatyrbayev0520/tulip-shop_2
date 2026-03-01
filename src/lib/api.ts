import { Bouquet } from "../types";

const envUrl = import.meta.env.VITE_BACKEND_URL;
export const BACKEND_URL = (envUrl && envUrl !== "undefined") ? envUrl.replace(/\/$/, "") : "http://localhost:8000";
const API_BASE_URL = `${BACKEND_URL}/api`;

export const handleGoogleSignIn = (pendingItem?: Bouquet | null) => {
    if (pendingItem) {
        localStorage.setItem("pendingCartItem", JSON.stringify(pendingItem));
    }
    window.location.href = `${BACKEND_URL}/auth/google/login`;
};

export const api = {
    // Catalog
    getFilters: async (): Promise<{ colors: string[], quantities: number[] }> => {
        const response = await fetch(`${API_BASE_URL}/filters`);
        if (!response.ok) throw new Error("Failed to fetch filters");
        return response.json();
    },

    getBouquets: async (params?: { color?: string; flower_quantity?: number; }): Promise<Bouquet[]> => {
        let url = `${API_BASE_URL}/bouquets`;
        if (params) {
            const queryParams = new URLSearchParams();
            if (params.color && params.color !== "All Flowers") queryParams.append("color", params.color);
            if (params.flower_quantity) queryParams.append("flower_quantity", params.flower_quantity.toString());

            const queryString = queryParams.toString();
            if (queryString) {
                url += `?${queryString}`;
            }
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch bouquets");
        return response.json();
    },

    getBouquetById: async (id: number): Promise<Bouquet> => {
        const response = await fetch(`${API_BASE_URL}/bouquets/${id}`);
        if (!response.ok) throw new Error("Failed to fetch bouquet");
        return response.json();
    },

    getFlowers: async () => {
        const response = await fetch(`${API_BASE_URL}/flowers`);
        if (!response.ok) throw new Error("Failed to fetch flowers");
        return response.json();
    },

    getCities: async () => {
        const response = await fetch(`${API_BASE_URL}/locations/cities`);
        if (!response.ok) throw new Error("Failed to fetch cities");
        return response.json();
    },

    // Orders
    createOrder: async (orderData: any) => {
        const response = await fetch(`${API_BASE_URL}/orders/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) throw new Error("Failed to create order");
        return response.json();
    },

    updateOrderStatus: async (orderId: string, status: string) => {
        const response = await fetch(`${API_BASE_URL}/orders/${orderId}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) throw new Error("Failed to update order status");
        return response.json();
    },

    // Users
    getUser: async (userId: string) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        return response.json();
    },

    updateUser: async (userId: string, data: { full_name?: string; phone_number?: string }) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Failed to update user");
        return response.json();
    },

    getUserStats: async (userId: string) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/statistics`);
        if (!response.ok) throw new Error("Failed to fetch user stats");
        return response.json();
    },

    getUserAddresses: async (userId: string) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/addresses`);
        if (!response.ok) throw new Error("Failed to fetch user addresses");
        return response.json();
    },

    getUserOrders: async (userId: string) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/orders`);
        if (!response.ok) throw new Error("Failed to fetch user orders");
        return response.json();
    }
};
