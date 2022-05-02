import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { View, StyleSheet } from "react-native"
import CustomText from "../atoms/CustomText"

export default function Quote() {

    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    useEffect(() => {

        (async () => {
            const data = await getData()
            setAuthor(data[0].a)
            setQuote(data[0].q)
        })()

    }, [])

    const getData = async () => {
        const dataJson = await fetch("https://zenquotes.io/api/random")
        return dataJson.json()
    }

    return (

        <View style={styles.container}>

            <CustomText content={quote} style={styles.quote} align="center" />
            <CustomText content={author} style={styles.author} size="sm" />

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffbd73",
        width: "100%",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        display: "flex",
        alignItems: "center"
    },
    author: {
        marginTop: 10 
    },
    quote: {
        width: "100%",
        fontStyle: "italic",
    }
})