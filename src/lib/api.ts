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
    getBouquets: async (params?: { color?: string; min_flower_quantity?: number; max_flower_quantity?: number }): Promise<Bouquet[]> => {
        let url = `${API_BASE_URL}/bouquets`;
        if (params) {
            const queryParams = new URLSearchParams();
            if (params.color && params.color !== "All Flowers") queryParams.append("color", params.color);
            if (params.min_flower_quantity) queryParams.append("min_flower_quantity", params.min_flower_quantity.toString());
            if (params.max_flower_quantity) queryParams.append("max_flower_quantity", params.max_flower_quantity.toString());

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
    getUserStats: async (userId: string) => {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/statistics`);
        if (!response.ok) throw new Error("Failed to fetch user stats");
        return response.json();
    }
};
