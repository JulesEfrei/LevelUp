import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Logo from "../components/atoms/Logo"
import Title from "../components/atoms/Title"
import Card from '../components/molecules/Card'


import { query, collection, where, onSnapshot } from '@firebase/firestore';
import { db } from '../../config/firebase';
import { AuthUserContext } from '../utils/context'
import { useState, useEffect } from 'react'



export default function Categories() {

    const { user } = useContext(AuthUserContext)

    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getCategories() {

      // Create Collection reference
      const categoryRef = collection(db, "category");
    
      // Create a query against the collection.
      const q = query(categoryRef, where("userId", "==", user.uid));
      
      // Execute the request (=> return an array of document reference)
      const unsusbscribe = await onSnapshot(q, (querySnapshot) => {

          //Reset state
          setCategory([])

          // Boucle on each document (=> wait the result of the query)
          querySnapshot.forEach(document => {
              
              const doc = document.data()
              
              // Update State
              setCategory(arr => [...arr , {name: doc.name, timer: timeReadable(doc.timer), level: doc.level, color: doc.color }])

          })

      })


    }

    useEffect(() => {
      
      getCategories()  

    }, [])

    useEffect(() => {
      
      setIsLoading(false)

    }, [category])
    

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

    if(category.length == 0) {

      return (<Text style={styles.no}>You have no categories</Text>)

    } else {
      return (isLoading == false && category.map((elm, index) => (
        <Card content={elm} type='categories' key={`${elm.name}-${index}`} />
      )))
    }

  }

  return (
    <SafeAreaView>

      <ScrollView contentContainerStyle={styles.view}>
      
        <View style={styles.logo}>
          <Logo size="sm" />
        </View>
    
        <View style={styles.container}>
          <View style={styles.title}>
            <Title content="Categories" />
          </View>
    
          <View style={[styles.list, category.length == 0 && styles.center]}>
    
            { isLoading ? <Text>Loading...</Text> : condition() }
  
          </View>
            
            
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  view: {
    width: "100%",
    paddingHorizontal: 20
  },
  logo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 50
  },
  title: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "black",
    width: 120,
    marginBottom: 30
  },
  center: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: 300
  }, 
  no: {
    color: "#789AAA",
  },

})