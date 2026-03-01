export type Bouquet = {
    id: number;
    name: string;
    price: number;
    image_url: string | null;
    base_color: string | null;
    description: string | null;
    created_at: string;
};

export type BasketItem = Bouquet & { quantity: number };

export type User = {
    user_id: string;
    email: string;
    full_name: string;
    avatar_url: string;
    phone_number?: string;
    user_tier?: string;
};

export type OrderItem = {
    bouquet_id: number;
    quantity: number;
    price: number;
};

export type UserAddress = {
    address_id: number;
    address_name?: string;
    city_id: number;
    street_line: string;
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

export type OrderItemBouquetResponse = {
    name?: string;
    pic_url?: string;
};

export type OrderItemResponse = {
    bouquet_id: number;
    unit_price: number;
    item_quantity: number;
    bouquet: OrderItemBouquetResponse;
};

export type OrderUserResponse = {
    full_name?: string;
    phone_number?: string;
};

export type OrderAddressResponse = {
    street_line?: string;
    city?: {
        city_name?: string;
    };
};

export type OrderDetailsResponse = {
    order_id: string;
    user_id?: string;
    customer_notes?: string;
    delivery_type: string;
    delivery_address_id?: number;
    delivery_date: string;
    order_status: string;
    items: OrderItemResponse[];
    user?: OrderUserResponse;
    delivery_address?: OrderAddressResponse;
    last_modified_date: string;
};
