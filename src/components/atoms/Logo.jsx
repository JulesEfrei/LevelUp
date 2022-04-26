import { Image, StyleSheet } from 'react-native'

export default function Logo({size}) {

    return (
        
        <>

        <Image
          style={size == "sm" ? styles.sm : styles.xl}
          source={require("../../../assets/logo.png")}
        />

        </>

    )

}

const styles = StyleSheet.create({
    sm: {
        width: 50,
        height: 50
    },
    xl: {
        width: 120,
        height: 120
    }
})