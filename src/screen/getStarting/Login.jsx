import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../../components/atoms/Logo"
import Title from "../../components/atoms/Title"
import CustomButton from "../../components/atoms/CustomButton"
import CustomText from '../../components/atoms/CustomText'


import {signInWithEmailAndPassword, getAuth } from 'firebase/auth' 


import { firebaseConfig, Firebase } from '../../../config/firebase';



export default function Login() {

    const title = "Get starting,"
    const subTitle = "by login you with a Google account"

    
    async function signIn(email, password) {
        try {
         const dd = await signInWithEmailAndPassword(getAuth(Firebase), email, password);
         console.log(dd)
        } catch (err) {
          console.log("There is something wrong!", err.message);
        }
      }
    

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <Logo />

                <View style={styles.textContainer} >
                    <Title content={title} size="xl" />
                    <Title content={subTitle} size="sm" />
                </View>

                <View style={{ marginTop: 20 }}>
                    
                    <CustomButton type="custom" onPress={() => signIn("test@gmail.com", "admin12") } style={styles.button} data={(
                        <CustomText content="Login with Google" />
                    )} />

                </View>

            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    textContainer: {
    },
    button: {
        backgroundColor: "#90A9B7",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
})