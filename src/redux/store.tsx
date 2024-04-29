import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { SpotifyAPISlice } from './SpotifyAPISlice'
import { AuthState, authSlice } from './AuthSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: combineReducers({
        [SpotifyAPISlice.reducerPath]: SpotifyAPISlice.reducer,
        auth: authSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(logger)
            .concat(SpotifyAPISlice.middleware),
})

export interface RootState {
    auth: AuthState
}
