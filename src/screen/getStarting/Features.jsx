import { View, SafeAreaView, StyleSheet } from "react-native";
import CustomText from "../../components/atoms/CustomText";
import Title from "../../components/atoms/Title";
import Logo from "../../components/atoms/Logo";
import CustomButton from "../../components/atoms/CustomButton";
import Icon from "../../components/atoms/Icon";
import { useNavigation } from "@react-navigation/core";

export default function Features() {

    const title = "Stay motivated and productive !"
    const text = "Register all your activities and won Xp for all your tasks. With LevelUp, 3h is equal to 1 level"

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <View>
                    <Logo />
                </View>


                <View style={styles.bottom}>

                    <View>

                        <Title content={title} size="xl" align="center" style={{ marginBottom: 20, marginTop: 30 }}/>
                        <CustomText content={text} align="center" />

                    </View>


                        <CustomButton type="icon" data={{ name: "arrow-forward" , size: 20}} style={styles.button} onPress={() => navigation.push('Login')} />

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
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    bottom: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        marginTop: 50,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#3870FF"
    }
})