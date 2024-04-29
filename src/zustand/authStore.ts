import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
    acccessToken: string | null
    autheticate: (acccessToken: string) => void
}

export const useAuthStore = create<AuthState>(
    persist(
        (set) => ({
            acccessToken: null,
            autheticate: (accessToken: string) => set({ acccessToken: accessToken }),
        }), 
        {       
            name: "auth-storage",
        }
    )
)