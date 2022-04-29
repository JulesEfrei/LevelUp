import { Text, StyleSheet } from 'react-native'

export default function Title({size = "sm", align= "left", content, style = {}}) {

    const selectSize = (size) => {

        if(size == "sm") {
            return styles.sm
        } else if(size == "xl") {
            return styles.xl
        } else {
            return {fontSize: size}
        }

    }

    const selectAlign = (align) => {

        if(align == "left") {
            return styles.left
        } else if(align == "center") {
            return styles.center
        } else if(align == "right") {
            return styles.right
        }

    }

  return (
    
    <Text style={[style, selectSize(size), selectAlign(align)]}>{ content }</Text>

  )
}

const styles = StyleSheet.create({
    sm: {
        fontSize: 25
    },
    xl: {
        fontSize: 35
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