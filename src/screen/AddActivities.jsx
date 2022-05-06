import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Logo from "../components/atoms/Logo"
import Title from "../components/atoms/Title"
import CustomInput from "../components/atoms/CustomInput"
import CustomButton from "../components/atoms/CustomButton"
import Selector from "../components/molecules/Selector"
import TimeInput from "../components/molecules/TimeInput"
import TimerInput from '../components/molecules/TimeInput'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useState } from 'react/cjs/react.development'

import { addDoc, collection, doc } from '@firebase/firestore';
import { db } from '../../config/firebase';

export default function AddActivities() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState({})
    const [time, setTime] = useState(0)

    function verify() {

        if(name == "" || category == {} || time == "0:0") {

            Toast.show({
                type: "error",
                text1: "Invalid Form",
                text2: "Please try again"
            })

        } else {

            console.log(`Name : ${name}`)
            console.log(`Category name : ${category.content.name}`)
            console.log(`Category id : ${category.id}`)
            console.log(`Category Timer : ${category.content.timer}`)
            console.log(`Category Level : ${category.content.level}`)
            console.log(`Category UserId : ${category.content.userId}`)
            console.log(`Time : ${time}`)

            if(category.new) {

                // Create new category in the database (=> function)
                createCategory()

            } else {

                //Create activitie in the database
                createActivities()

            }

        }

    }

    async function createCategory() {

        try{
            console.log("Data Submited")
            await addDoc(collection(db, "category"), {
                name: category.name,
                userId: doc(db, 'users/', category.userUid),
                level: category.level,
                timer: category.timer
            })
        } catch (err) {
            console.log(err)
        }

    }

    async function createActivities() {

        try{
            console.log("Data Submited")
            await addDoc(collection(db, "activities"), {
                name: name,
                categoryId: doc(db, 'category', category.id),
                time: time,
                createdAt: Date.now()
            })
        } catch (err) {
            console.log(err)
        }

    }


  return (

    <SafeAreaView style={styles.mainContainer}>


        <View style={styles.titleContainer}>
            <Title content="Add Activitie" />
        </View>

        <View style={styles.contentContainer}>

            <View>

                <View style={styles.inputContainer}>
                    <Title content="Name" style={styles.title} />
                    <CustomInput type="text" content="What did you do ?" state={setName} />
                </View>

                <View style={[styles.inputContainer, styles.selector]}>
                    <Title content="Category" style={styles.title} />
                    <Selector state={setCategory} />
                </View>

                <View style={styles.inputContainer}>
                    <Title content="Time" style={styles.title} />
                    <TimerInput state={setName} setTime={setTime} />
                </View>

                <View>
                    <CustomButton type="text" data={{ content: "Save" }} style={styles.saveButton} textStyle={{color: "white"}} onPress={() => verify()} />
                </View>

            </View>

        </View>

        <Toast />

    </SafeAreaView>

  )


}


const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    titleContainer: {
        position: "absolute",
        top: 100,
        left: 20,
        borderBottomWidth: 1,
        borderColor: "black",
        paddingBottom: 5
    },
    inputContainer: {
        marginBottom: 30
    },
    title: {
        marginBottom: 20
    },
    selector: {
        zIndex: 5,
        elevation: 5,
    },
    saveButton: {
        backgroundColor: "#3870FF",
        paddingVertical: 6,
        paddingHorizontal: 15,
        alignSelf: "flex-end",
        borderRadius: 5,
    }
})