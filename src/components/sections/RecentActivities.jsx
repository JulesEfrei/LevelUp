import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import Title from '../atoms/Title'
import Card from "../molecules/Card"
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'

import { collection, query, where, orderBy, limit, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase"
import { AuthUserContext } from '../../utils/context'

export default function RecentActivities() {

    const { user } = useContext(AuthUserContext)
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function getData() {


        // Create Collection reference
        const activitiesRef = collection(db, "activities");
    
        // Create a query against the collection.
        const q = query(activitiesRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"), limit(10));
        
        // Execute the request (=> return an array of document reference)
        const unsusbscribe = await onSnapshot(q, (querySnapshot) => {

            //Reset state
            setData([])

            // Boucle on each document (=> wait the result of the query)
            querySnapshot.forEach(async document => {
                
                const doc = document.data()
    
                const categoryRef = await getDoc(doc.categoryId)
    
                // Update State
                setData(arr => [...arr , {name: doc.name, time: timeReadable(doc.time), category: {name: categoryRef.data().name, color: categoryRef.data().color}}])
                

            })

        })
        
        
    }


    useEffect(() => {

        getData()
        
    }, [])

    useEffect(() => {
      
        setIsLoading(false)
  
      }, [data])

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


    function condition() {

        if(data.length == 0) {
    
          return (<Text style={styles.no}>You have no activities</Text>)
    
        } else {
          return (isLoading == false && [...new Set(data)].map((elm, index) => (
            <Card content={elm} type="activities" key={`${elm.category.name}-${index}`} />
          )))
        }
    
      }


  return (
    <View style={styles.container}>
      
        <Title content="Recent Activities :" />

        <View style={[styles.listContianer, data.length == 0 && styles.center]}>


            { isLoading ? <Text>Loading...</Text> : condition() }


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
    center: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: 300
    },  
    listContianer: {
        marginTop: 20
    },
    no: {
        color: "#789AAA",
    }
})