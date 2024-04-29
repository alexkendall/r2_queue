import { StyleSheet } from 'react-native'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App
