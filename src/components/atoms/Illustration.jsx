import { Image, StyleSheet } from "react-native"

import images from "../../../assets/index"

export default function Illustration({name}) {

    return (

        <>

        <Image
          style={styles.default}
          source={images[name]}
        />

        </>

    )

}

const styles = StyleSheet.create({
    default: {
        width: 300,
        height: 300
    }
})