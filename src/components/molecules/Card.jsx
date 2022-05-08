import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../atoms/Title'
import CustomText from "../atoms/CustomText"

export default function Card({ content, type }) {

  return (
    <TouchableOpacity style={styles.container}>

        <View style={[styles.box, {backgroundColor: content.color != undefined ? content.color : "#789AAA"}]}></View>
      

        <View style={styles.left}>
            <CustomText content={content.name} style={styles.name} />
            <CustomText content={type == "categories" ? `Total Time : ${content.timer}` : content.category.name} size="sm"/>
        </View>

        <View style={styles.right}>
            <CustomText content={type == "categories" ? `Lv.${content.level}` : content.time} style={{color: "white"}} />
        </View>


    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 20,
        // padding: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden"
    },
    box: {
        position: "absolute",
        height: "100%",
        width: 150,
        right: -15,
        top: 0,
        transform: [{ skewX: -10}],
    },
    left: {
        paddingVertical: 10,
        paddingLeft: 10,
    },
    right: {
        paddingVertical: 10,
        paddingRight: 10,
    },
    name: {
        fontWeight: "500"
    }
})