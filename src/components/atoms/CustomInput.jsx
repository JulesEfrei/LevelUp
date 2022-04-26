import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";


export default function CustomInput({content, type}) {

    const [isVisible, setIsVisible] = useState(true)

    return (

        <>

        <View style={styles.container}>

            {type == "text" && <TextInput placeholder={content} keyboardType="default" />}

            {type == "email" && <TextInput placeholder={content} keyboardType="email-address" />}

            {type == "password" && <TextInput placeholder={content} keyboardType="visible-password" secureTextEntry={isVisible} />}

            {type == "time" && <TextInput placeholder={content} keyboardType="numeric" />}

        </View>

        </>

    )

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 7,
        marginBottom: 10
    }
})