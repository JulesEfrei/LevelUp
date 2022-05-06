import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Firebase } from '../../config/firebase'
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

const db = getFirestore(Firebase)

export default function Categories() {


    function addData() {


        setDoc(doc(db, "notess", "LA"), {
            name: "Los Angeles",
          }).then(() => {
              console.log("Submited")
          }).catch((err) => {
              console.log("Error : " + err)
          })


    }


  return (
    <SafeAreaView>


      <Text>Categories</Text>
      <TouchableOpacity onPress={() => addData()}>
          <Text>Add Data</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})