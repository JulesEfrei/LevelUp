import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

import UserNavigation from './src/navigation/UserNavigation';



export default function App() {

  return (
    
    <NavigationContainer>
      <UserNavigation />
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({});
