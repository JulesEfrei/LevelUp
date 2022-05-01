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

                <View style={{ marginTop: 20 }}>
                    
                    <CustomButton type="custom" onPress={() => navigation.push('LoginWithEmail') } style={[styles.button, { marginBottom: 20 }]} data={(
                        <CustomText content="Login with Email" />
                    )} />

                    <CustomButton type="custom" onPress={() => console.log("SignIn with Google") } style={styles.button} data={(
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