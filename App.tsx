import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { create } from 'zustand'
import {
    Auth,
    Player,
    MusicKit,
    useCurrentSong,
    useIsPlaying,
} from '@lomray/react-native-apple-music'
import { useCallback } from 'react'
import Navigation from './src/navigation'

export const App = () => {
    const authorize = async () => {
        try {
            const authStatus = await Auth.authorize()
            console.log('Authorization Status:', authStatus)
        } catch (error) {
            console.error('Authorization failed:', error)
        }
    }

    return <Navigation />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App
