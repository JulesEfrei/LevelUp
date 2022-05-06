import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../config/firebase';


export default function Categories() {


    function addData() {

        console.log("AddData function...")


        addDoc(collection(db, "notess"), {
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