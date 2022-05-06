import CustomText from "../atoms/CustomText"
import { StyleSheet, View } from "react-native"

export default function Activities({ data }) {

    return (

        <View style={styles.item}>

            <View style={styles.left}>
                <CustomText content={data.name} style={styles.name} />
                <View style={styles.categoryContainer}>
                    <View style={[styles.category, { borderColor: data.category.color != undefined ? data.category.color : "#789AAA"  }]}>
                        <CustomText content={data.category.name} />
                    </View>
                    <View style={[styles.badge, { backgroundColor: data.category.color ? data.category.color : "#789AAA" }]}></View>
                </View>
            </View>

            <View style={styles.right}>
                <CustomText content={data.time} />
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    category: {
        borderBottomWidth: 2,
    },
    badge: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 5
    },
    categoryContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        fontWeight: "500"
    }
})