import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Logo from '../components/atoms/Logo'
import Title from '../components/atoms/Title'
import Illustration from '../components/atoms/Illustration'

export default function CommingSoon() {

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.logo}>
                <Logo size="sm" />
            </View>

            <View style={styles.subContainer}>
                <Title size="xl" content="Comming Soon..." style={styles.title}/>
                <Illustration name="inProgress" />
            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        position: "absolute",
        width: "100%",
        alignItems: "center",
        top: 50
    },
    subContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    title: {
        width: 300,
        marginBottom: 30,
    }
})