import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Button, Text } from "react-native";

import Icon from "./Icon"

export default function CustomInput({content, type, style = {}, state}) {

    const [isHide, setIsHide] = useState(true)

    return (

        <>

        <View style={[style, styles.container]}>

            {type == "text" && <TextInput placeholder={content} keyboardType="default" onChangeText={(e) => state(e)} />}

            {type == "email" && <TextInput placeholder={content} keyboardType="email-address" onChangeText={(e) => state(e.target.value)} />}

            {type == "password" && (
                <View style={styles.passwordContainer}>

                    <TextInput placeholder={content} keyboardType="visible-password" secureTextEntry={isHide} style={{width: "90%"}} onChangeText={(e) => state(e.target.value)} />

                    <TouchableOpacity onPress={() => setIsHide(!isHide)}>

                        {isHide ? <Icon.Ionicons name="eye-outline" size={20} /> : <Icon.Ionicons name="eye-off-outline" size={20} /> }

                    </TouchableOpacity>

                </View>
            )}

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
    },
    passwordContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})