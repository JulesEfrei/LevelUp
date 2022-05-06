import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import Title from '../atoms/Title'
import Activities from '../molecules/Activities'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'

import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase"
import { AuthUserContext } from '../../utils/context'

export default function RecentActivities() {

    const { user } = useContext(AuthUserContext)
    
    const [data, setData] = useState([])


    const timeReadable = (timestamp) => {

        // Total of minute between both time
        let minutes = (timestamp/1000)/60

        // Number of hour (Rounded)
        let hours = Math.floor(minutes / 60)

        // Calcul the number of minutes from the hours
        let minutesFormated = Math.floor(minutes - (hours * 60))


        // Formated Time (=> hours:minutes -> 00:00)
        let formatedHours = String(hours).length == 1 ? `0${hours}` : hours
        let formatedMinute = String(minutesFormated).length == 1 ? `0${minutesFormated}` : minutesFormated
        
        return formatedHours + ":" + formatedMinute

    }


    useEffect(() => {

        getData()
        
    }, [])

    async function getData() {

        // Create Collection reference
        const activitiesRef = collection(db, "activities");
    
        // Create a query against the collection.
        const q = query(activitiesRef, where("userId", "==", user.uid));
        
        // Execute the request (=> return an array of document reference)
        const querySnapshot = await getDocs(q)
        
        // Boucle on each document (=> wait the result of the query)
        querySnapshot.forEach(async document => {
            
            const doc = document.data()

            const categoryRef = await getDoc(doc.categoryId)

            console.log(categoryRef.data().name);

            // Update State
            setData(arr => [...arr , {name: doc.name, time: timeReadable(doc.time), category: {name: categoryRef.data().name, color: categoryRef.data().color} }])

        })
        
    }


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