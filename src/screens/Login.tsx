import React, { useEffect } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
} from 'react-native'
import { config } from '../config/SpotifyConfig'
import { authorize } from 'react-native-app-auth'
import { authenticate } from '../redux/AuthSlice'
import { useDispatch } from 'react-redux'

export const Login = () => {
    const dispatch = useDispatch()

    const attemptLogin = async () => {
        console.log('should attempt login')
        const authResult = await authorize(config)
        dispatch(authenticate(authResult.accessToken))
    }

    useEffect(() => {
        attemptLogin()
    }, [])

    const width = useWindowDimensions()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={attemptLogin}
                style={{
                    ...styles.button,
                    width,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 0.5,
                }}
            >
                <Text>{'Login to Spotify'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    button: {
        height: 40,
    },
})
