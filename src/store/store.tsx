import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
  cart: Item[];
  addToCart: (item: Item) => void;
  totalPrice: () => number;
};

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (item) => set((state) =>  ({ cart: [...state.cart, item] })),
  totalPrice: () => get().cart.reduce((sum, item) => sum + item.price, 0),
}));

export default useCartStore;