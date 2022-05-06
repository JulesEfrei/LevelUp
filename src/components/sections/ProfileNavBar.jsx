import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "../atoms/Icon"
import Logo from '../atoms/Logo'

import { signOut } from "firebase/auth"
import { auth } from '../../../config/firebase';


const ProfileNavBar = () => {

    const logOut = async () => {
        try {
            await signOut(auth);
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <View style={styles.container}>
      
        <Logo size="sm" style={styles.logo} />

        <TouchableOpacity onPress={logOut} style={styles.icon}>
            <Icon.AntDesign name="logout" size={30} />
        </TouchableOpacity>

    </View>
  )
}

export default ProfileNavBar

const styles = StyleSheet.create({
    container: {
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    logo: {
        alignSelf: "center"
    },
    icon: {
        position: "absolute",
        top: 15,
        right: 15
    }
})