import { useContext, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react/cjs/react.development'
import CustomInput from "../atoms/CustomInput"
import CustomText from "../atoms/CustomText"
import Icon from '../atoms/Icon'

import Toast from 'react-native-toast-message';
import { AuthUserContext } from '../../utils/context'


export default function Selector({state}) {

    const [show, setShow] = useState(false)
    const [arrow, setArrow] = useState("down")
    const [selected, setSelected] = useState("Category Name")
    const [inputValue, setInputValue] = useState("")
    const [outputList, setOutputList] = useState([])

    const { user } = useContext(AuthUserContext)

    const toggle = () => {

        setShow(!show)

        if(arrow == "down") {
            setArrow("up")
        } else if(arrow == "up") {
            setArrow("down")
        }

    }

    const select = (category) => {
        state({name: category})
        setSelected(category)
        toggle()
    }

    useEffect(() => {

        if(inputValue.length != 0) {
            setOutputList(data.filter(elm => elm.slice(0, inputValue.length) == inputValue).slice(0, 2))
        } else {
            setOutputList(data.slice(0, 2))
        }

    }, [inputValue])

    const newCategory = () => {

        if(inputValue.length == 0) {

            Toast.show({
                type: "error",
                text1: "Category name invalid",
                text2: "Input field is empty",
            })

        } else {

            console.log(`Updated categories ! ( ${inputValue} Added )`)
            
            state({
                name: inputValue,
                userUid: user.uid,
                level: 0,
                timer: "00:00"
            })

            toggle()
            setSelected(inputValue)
        }

    }

    

    const data = [
        "Work",
        "Games",
        "Dev",
        "Study",
        "Stuvne",
        "Sgve",
        "Metting"
    ]

    return (

        <>

        <View style={styles.mainContainer} >

            <TouchableOpacity style={[styles.mainButton, show && styles.newMainBorder]} onPress={toggle}>

                <CustomText content={selected} />
                <Icon.AntDesign name={arrow} size={18} />

            </TouchableOpacity>

            { show && (
                <View style={styles.container }>
                    
                    <CustomInput type="text" content="Search Category..." style={styles.input} state={setInputValue} />
                    
                    <View style={styles.list}>

                        {outputList.map((elm, index) => (
                            <TouchableOpacity style={styles.item} onPress={() => select(elm)} key={index, "-", index}>
                                <CustomText content={elm} />
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity style={styles.item} onPress={newCategory}>
                            <CustomText content="Create Category" style={{ color: "#90A9B7" }} />
                        </TouchableOpacity>

                    </View>

                </View>
            )}


        </View>

        <Toast />


        </>

    )

}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
    },
    mainButton: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    newMainBorder: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    container: {
        position: "absolute",
        top: "100%",
        backgroundColor: "#efefef",
        zIndex: 3,
        elevation: 3,
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    input: {
        borderColor: "#DFDFDF",
        width: "95%",
        marginTop: 20,
        alignSelf: "center",
    },
    list: {
        borderTopWidth: 1,
        borderColor: "#DFDFDF",
        marginTop: 10
    },
    item: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#DFDFDF",
    }
})