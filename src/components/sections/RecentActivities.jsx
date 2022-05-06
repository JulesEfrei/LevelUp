import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Title from '../atoms/Title'
import Activities from '../molecules/Activities'

export default function RecentActivities() {

    const data = [
       {
           name: "Check mail",
           category: {
               name: "work",
               color: "#68A7AD"
           },
           time: "03:17"
       },
       {
        name: "Write report",
        category: {
            name: "work",
            color: "#68A7AD"
        },
        time: "00:42"
        } ,
        {
            name: "Watch series",
            category: {
                name: "Chill",
                color: "#EEE4AB"
            },
            time: "03:15"
        } ,
        {
            name: "Dev Level",
            category: {
                name: "Development",
                color: "#E5CB9F"
            },
            time: "07:00"
        },
        {
            name: "Watch seri",
            category: {
                name: "Chill",
                color: "#EEE4AB"
            },
            time: "03:15"
        } ,
        {
            name: "Dev LevelU",
            category: {
                name: "Development",
                color: "#E5CB9F"
            },
            time: "07:00"
        },
        {
            name: "Watch serie",
            category: {
                name: "Chill",
                color: "#EEE4AB"
            },
            time: "03:15"
        } ,
        {
            name: "Dev LevelUp",
            category: {
                name: "Development",
                color: "#E5CB9F"
            },
            time: "07:00"
        } 
    ]


  return (
    <View style={styles.container}>
      
        <Title content="Recent Activities :" />

        <View style={styles.listContianer}>


            {data.map((elm, index) => (
                <Activities data={elm} key={`${elm.category.name}-${index}`} />
            ))}


        </View>

    </View>
  )


}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 25
    },
    listContianer: {
        marginTop: 20
    }
})