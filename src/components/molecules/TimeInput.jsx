import DataPicker from "../atoms/DatePicker"
import CustomText from "../atoms/CustomText"
import { StyleSheet, View } from "react-native"
import { useEffect, useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function TimerInput({setTime}) {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const mounted = useRef(false)

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

        // console.log(start.toLocaleTimeString(), " ", end.toLocaleTimeString())

        setTime(end - start)


    }, [start, end])


    const isFocused = useIsFocused()

    useEffect(() => {
        console.log("Re-Build");
        setStart(new Date())
        setEnd(new Date())
    }, [isFocused])

    return (

        <View style={styles.container}>

            <View style={styles.subContainer}>

                <CustomText content="Starting time" style={styles.text} />
                <DataPicker style={styles.date} state={start} setState={setStart} />

            </View>

            <View style={styles.subContainer}>

                <CustomText content="Ending time" style={styles.text} />
                <DataPicker style={styles.date} state={end} setState={setEnd} />

            </View>


        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    subContainer: {
        display: "flex",
        width: "45%",
    },
    text: {
        marginBottom: 10,
    }
})