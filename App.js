import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './src/screen/HomeScreen';
import CommingSoon from './src/screen/CommingSoon';
import Login from './src/screen/getStarting/Login';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === 'Home') {
              return <Ionicon name="home-outline" size={30} color="black" />;
            } 
            else if (route.name === 'Profile') {
              return <FontAwesome name="user-o" size={30} color="black" />;
            }
            else if (route.name === 'Goals') {
              return <Ionicon name="md-medal-outline" size={30} color="black" />;
            }
            else if (route.name === 'Categories') {
              return <Ionicon name="menu" size={30} color="black" />;
            }
            else if (route.name === 'AddActivities') {
              return <FontAwesome name="plus-square-o" size={30} color="#90A9B7" />;
            }
            
           },
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
          tabBarLabel: () => { return null },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Categories" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="AddActivities" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Goals" component={CommingSoon} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({});
