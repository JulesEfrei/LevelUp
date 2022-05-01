import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../../screen/getStarting/Welcome';
import Features from '../../screen/getStarting/Features';
import Login from '../../screen/getStarting/Login';
import LoginWithEmail from '../../screen/getStarting/LoginWithEmail';

const Stack = createNativeStackNavigator();

export default function UserNavigation() {

    return (

        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Features" component={Features} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignInWithEmail" options={{ headerShown: false }}>
            {props => <LoginWithEmail {...props} type="signIn" />}
          </Stack.Screen>
          <Stack.Screen name="SignUpWithEmail" options={{ headerShown: false }}>
            {props => <LoginWithEmail {...props} type="signUp" />}
          </Stack.Screen>
        </Stack.Navigator>
            
    )

}