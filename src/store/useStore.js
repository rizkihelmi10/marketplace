import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist(
  (set) => ({
      username: '',
      isLoggedIn: false,

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
      }
  }),
  {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
  }
))