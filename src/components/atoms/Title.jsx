import { Text, StyleSheet } from 'react-native'

export default function Title({size, content}) {

    const selectSize = (size) => {

        if(size == "sm") {
            return styles.sm
        } else if(size == "xl") {
            return styles.xl
        } else {
            return {fontSize: size}
        }

    }

  return (
    
    <Text style={selectSize(size)}>{ content }</Text>

  )
}

const styles = StyleSheet.create({
    sm: {
        fontSize: 25
    },
    xl: {
        fontSize: 50
    }
})