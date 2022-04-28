import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../../components/atoms/Logo"
import Title from "../../components/atoms/Title"
import CustomButton from "../../components/atoms/CustomButton"
import CustomText from '../../components/atoms/CustomText'


export default function Login() {

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
                    
                    <CustomButton type="custom" onPress={() => console.log("Google Poppup !")} style={[styles.button, {marginBottom: 10}]} data={(
                        <CustomText content="Login with Google" />
                    )} />

                    <CustomButton type="custom" onPress={() => console.log("Apple Poppup !")} style={styles.button} data={(
                        <CustomText content="Login with Apple" />
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