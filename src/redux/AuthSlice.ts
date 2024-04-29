import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    accessToken: string | null
}

const initialState: AuthState = {
    accessToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate(state, action: PayloadAction<string>) {
            state.accessToken = action.payload
        },
    },
})

export const { authenticate } = authSlice.actions
