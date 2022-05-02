import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

import Logo from "../../components/atoms/Logo"
import Title from "../../components/atoms/Title"
import CustomButton from "../../components/atoms/CustomButton"
import CustomInput from "../../components/atoms/CustomInput"
import Icon from '../../components/atoms/Icon'

import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from 'firebase/auth' 
import { firebaseConfig, Firebase } from '../../../config/firebase';

import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native'



export default function LoginWithEmail({type}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    async function signIn(email, password) {

        if(email == "" || password == "") {

            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Input form is empty"
            })

        } else {

            try {
                await signInWithEmailAndPassword(getAuth(Firebase), email, password);
            } catch (err) {
                console.log("There is something wrong!", err.message);
    
                popup(err.message)
    
            }

        }
      }

    async function signUp(email, password) {


        if(email == "" || password == "") {

            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Input form is empty"
            })

        } else {

            try {
                await createUserWithEmailAndPassword(getAuth(Firebase), email, password)
            } catch(err) {
                popup(err.message)
            }
        
        }
      }

      function popup(err) {

        let errorType = err.split("").slice(err.split("").findIndex(elm => elm == "/") + 1 , err.split("").findIndex(elm => elm == ")")).join("")
        

        if(errorType == "invalid-email") {

            Toast.show({
                type: "error",
                text1: "Invalid Email",
                text2: "Please try again"
            })

        } else if(errorType == "wrong-password" ) {

            Toast.show({
                type: "error",
                text1: "Invalid Password",
                text2: "Please try again"
            })

        } else if(errorType == "weak-password" ) {

            Toast.show({
                type: "error",
                text1: "Week Password",
                text2: "Password should be at least 6 characters"
            })

        } else if(errorType == "user-not-found" ) {

            Toast.show({
                type: "error",
                text1: "User Not Found",
                text2: "Please try again or create a new account"
            })

        } else {

            Toast.show({
                type: "error",
                text1: "Internal Error",
                text2: "Please try again"
            })

        }
        

      }

    return (
   
        <SafeAreaView style={styles.container}>

            <CustomButton type="custom" style={styles.back} onPress={() => navigation.goBack()} data={(
                <Icon.AntDesign name="left" size={30} />
            )} />

            <View style={styles.s}>

                <View style={styles.logo}>
                    <Logo />
                </View>

                <View style={styles.contentContainer}>

                    <View style={styles.inputContainer}>
                        <Title content="Email" style={{ marginBottom: 5 }} />
                        <CustomInput type="email" content="Email" state={setEmail} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Title content="Password" style={{ marginBottom: 5 }} />
                        <CustomInput type="password" content="Password" state={setPassword} />
                    </View>

                    <CustomButton type="text" onPress={() => type == "signIn" ? signIn(email, password) : signUp(email, password) } data={{ content: type == "signIn" ? "Sign In" : "Sign Up" }} style={styles.button} textStyle={{color: "white"}} />

                </View>

            </View>

            <Toast />

        </SafeAreaView>

    )

}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    s: {
        height: "60%",
        width: "80%",
        display: "flex",
        alignItems: "center",
    },
    logo: {
        marginBottom: 50
    },  
    contentContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#3870FF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    back: {
        position: "absolute",
        top: 50,
        left: 20
    }
})