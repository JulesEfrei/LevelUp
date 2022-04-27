import { Text, StyleSheet } from "react-native"

export default function CustomText({align = "left", content, size = "default", style = {}}) {

    const selectAlign = (align) => {

        if(align == "left") {
            return styles.left
        } else if(align == "center") {
            return styles.center
        } else if(align == "right") {
            return styles.right
        }

    }

    const selectSize = (size) => {

        if(size == "default") {
            return styles.default
        } else if(size == "sm") {
            return styles.sm
        } else {
            return {fontSize: size}
        }

    }

    return (

        <Text style={[style, selectSize(size), selectAlign(align)]} >{ content }</Text>

    )

}


const styles = StyleSheet.create({
    default: {
        fontSize: 16
    },
    sm: {
        fontSize: 12
    },
    left: {
        textAlign: "left"
    },
    center: {
        textAlign: "center"
    },
    right: {
        textAlign: "right"
    },
})