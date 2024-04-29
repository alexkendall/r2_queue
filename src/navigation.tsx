import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './screens/Home'
import { Library } from './screens/Library'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './screens/Login'
import { useAuthStore } from '../src/zustand/authStore'
import { useSelector } from 'react-redux'
import { getAccessTokenSelector } from './redux/selectors/authSelectors'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function App() {
    const [authorized, setAuthorized] = useState(false)
    const accessToken = useSelector(getAccessTokenSelector)

    if (!accessToken) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Library" component={Library} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App
