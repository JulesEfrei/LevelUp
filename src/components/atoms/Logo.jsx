import { Image, StyleSheet } from 'react-native'

import images from "../../../assets/index"

export default function Logo({size}) {

    return (
        
        <>

        <Image
          style={size == "sm" ? styles.sm : styles.xl}
          source={images["logo"]}
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