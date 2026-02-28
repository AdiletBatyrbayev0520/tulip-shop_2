export type Bouquet = {
    bouquet_id: number;
    name: string;
    price: number;
    image_url: string | null;
    base_color: string | null;
    description: string | null;
    created_at: string;
};

export type BasketItem = Bouquet & { quantity: number };

export type User = {
    id: string;
    email: string;
    full_name: string;
    avatar_url: string;
};

export type OrderItem = {
    bouquet_id: number;
    quantity: number;
    price: number;
};

export type DeliveryType = "delivery" | "pickup";

export type Order = {
    id: number;
    user_id: string;
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
    total_price: number;
    delivery_type: DeliveryType;
    delivery_address: string | null;
    items: OrderItem[];
    created_at: string;
};
