import DataPicker from "../atoms/DatePicker"
import CustomText from "../atoms/CustomText"
import { StyleSheet, View } from "react-native"
import { useEffect, useState } from 'react'

export default function TimerInput() {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const [time, setTime] = useState(0)

    useEffect(() => {

        console.log(start.toLocaleTimeString(), " ", end.toLocaleTimeString())

        // Total of minute between both time
        let minutes = (end-start)/1000/60

        // Number of hour (Rounded)
        let hours = Math.floor(minutes / 60)

        // Calcul the number of minutes from the hours
        let minutesFormated = minutes - (hours * 60)

        // Formated Time (=> hours:minutes -> 00:00)
        let formatedTime = hours + ":" + minutesFormated

        setTime(formatedTime)

        console.log("Time : ", time)
        console.log("Calcul : ", formatedTime)

    }, [start, end])

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
        marginTop: 50,
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