import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect, useContext } from 'react';

import { StyleSheet } from 'react-native';

import UserNavigation from './UserNavigation';
import LoginNavigation from './LoginNavigation';


import { AuthUserContext } from '../context/index';

import { auth } from '../../../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function App() {

  const {user, setUser} = useContext(AuthUserContext)

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(auth, async authenticatedUser => {
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  return (

        <>
            { user ? <UserNavigation /> : <LoginNavigation />}
        </>

  );

}
