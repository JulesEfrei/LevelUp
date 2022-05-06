import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screen/HomeScreen';
import CommingSoon from '../../screen/CommingSoon';
import Profile from '../../screen/Profile';
import AddActivities from '../../screen/AddActivities';
import Categories from '../../screen/Categories';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function UserNavigation() {

    return (

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
                return <FontAwesome name="plus-square-o" size={30} color="#3870FF" />;
              }
              
             },
            // tabBarActiveTintColor: 'tomato',
            // tabBarInactiveTintColor: 'gray',
            tabBarLabel: () => { return null },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
          <Tab.Screen name="AddActivities" component={AddActivities} options={{ headerShown: false }} />
          <Tab.Screen name="Goals" component={CommingSoon} options={{ headerShown: false }} />
          <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
            
    )

}