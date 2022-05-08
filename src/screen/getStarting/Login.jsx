import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../../components/atoms/Logo"
import Title from "../../components/atoms/Title"
import CustomButton from "../../components/atoms/CustomButton"
import CustomText from '../../components/atoms/CustomText'
import { useNavigation } from '@react-navigation/core'



export default function Login() {
    
    const navigation = useNavigation()
    const title = "Get starting,"
    const subTitle = "by login you with a Google account"

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <Logo />

                <View style={styles.textContainer} >
                    <Title content={title} size="xl" />
                    <Title content={subTitle} size="sm" />
                </View>

                <View style={styles.buttonContainer}>
                    
                    <CustomButton type="custom" onPress={() => navigation.push('SignInWithEmail') } style={[styles.button, { marginBottom: 20 }]} data={(
                        <CustomText content="Login with Email" align="center" style={{ color: "white" }} />
                    )} />

                    {/* <CustomButton type="custom" onPress={() => SignInWithGoogle() } style={[styles.button, { marginBottom: 20 }]} data={(
                        <CustomText content="Login with Google" style={{ color: "white" }} />
                    )} /> */}

                    <CustomButton type="text" onPress={() => navigation.push("SignUpWithEmail") } data={{ content: "Create an account" }} textStyle={styles.register}/>

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
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    textContainer: {
    },
    buttonContainer: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        width: "46%"
    },
    button: {
        width: "100%",
        backgroundColor: "#3870FF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    register: {
        color: "#3870FF",
        textDecorationLine: "underline",
        textDecorationColor: "#3870FF"
    }
})