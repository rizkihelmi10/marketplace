import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist(
  (set) => ({
      username: '',
      isLoggedIn: false,
      products: [],
      cart: [],

      login: (username, password) => {
          set({
              username: username,
              isLoggedIn: true
          });
          console.log(username);
          console.log(password);
          return true;
      },
      logout: () => set({ 
          username: '', 
          isLoggedIn: false 
      }),
      checkLoginStatus: () => {
          const state = useStore.getState();
          return state.isLoggedIn;
      },
      setProducts: (products) => set({ products: products }),
      addToCart: (productId) => set((state) => ({ cart: [...state.cart, productId] })),
      removeFromCart: (productId) => set((state) => {
          const index = state.cart.indexOf(productId);
          if (index !== -1) {
              const updatedCart = [...state.cart];
              updatedCart.splice(index, 1);
              return { cart: updatedCart };
          }
          return { cart: state.cart };
      })
  }),
  {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
  }
))