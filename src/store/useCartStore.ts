import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    slug: string;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    total: number;
    currency: 'EUR' | 'USD' | 'BTC';
    language: 'en' | 'nl';
    setCurrency: (currency: 'EUR' | 'USD' | 'BTC') => void;
    setLanguage: (lang: 'en' | 'nl') => void;
}

/**
 * useCartStore
 * Handles persistent shopping cart and user preferences (language/currency).
 */
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            total: 0,
            currency: 'EUR',
            language: 'en',

            addItem: (product) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === product.id);

                if (existingItem) {
                    const updatedItems = items.map((i) =>
                        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                    );
                    set({
                        items: updatedItems,
                        total: get().total + product.price
                    });
                } else {
                    set({
                        items: [...items, { ...product, quantity: 1 }],
                        total: get().total + product.price
                    });
                }
            },

            removeItem: (id) => {
                const items = get().items;
                const item = items.find((i) => i.id === id);
                if (item) {
                    set({
                        items: items.filter((i) => i.id !== id),
                        total: get().total - item.price * item.quantity,
                    });
                }
            },

            updateQuantity: (id, quantity) => {
                const items = get().items;
                const item = items.find((i) => i.id === id);
                if (item && quantity > 0) {
                    const diff = quantity - item.quantity;
                    const updatedItems = items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    );
                    set({
                        items: updatedItems,
                        total: get().total + item.price * diff
                    });
                }
            },

            clearCart: () => set({ items: [], total: 0 }),

            setCurrency: (currency) => set({ currency }),
            setLanguage: (language) => set({ language }),
        }),
        {
            name: 'chemcentrum-storage', // Key for localStorage
        }
    )
);
