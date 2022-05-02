import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Title from '../atoms/Title'

export default function RecentActivities() {


  return (
    <View style={styles.container}>
      
        <Title content="Recent Activities :" />

    </View>
  )


}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 25
    }
})