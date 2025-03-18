import { create } from "zustand";

const useProductStore = create((set) => ({
  cart: [],
  total: 0,
  addProduct: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      return {
        cart: updatedCart,
        total: updatedCart.reduce((acc, product) => acc + product.price, 0),
      };
    }),
  removeProduct: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id);
      return {
        cart: updatedCart,
        total: updatedCart.reduce((acc, item) => acc + item.price, 0),
      };
    }),
}));

export default useProductStore;
