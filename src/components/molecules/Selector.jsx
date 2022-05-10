import { useContext, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react/cjs/react.development'
import CustomInput from "../atoms/CustomInput"
import CustomText from "../atoms/CustomText"
import Icon from '../atoms/Icon'
import { useIsFocused } from '@react-navigation/native'

import Toast from 'react-native-toast-message';
import { AuthUserContext } from '../../utils/context'

import { getDocs, collection, query, where, onSnapshot } from '@firebase/firestore';
import { db } from '../../../config/firebase'


export default function Selector({state, value}) {

    const [show, setShow] = useState(false)
    const [arrow, setArrow] = useState("down")
    const [selected, setSelected] = useState("Category Name")
    const [inputValue, setInputValue] = useState("")
    const [outputList, setOutputList] = useState([])
    const [category, setCategory] = useState([])

    const { user } = useContext(AuthUserContext)

    // Get all categories of the user
    useEffect(async () => {

        const q = query(collection(db, "category"), where("userId", "==", user.uid));
      
        const unsusbscribe = await onSnapshot(q, querySnapshot => {

            querySnapshot.forEach((doc) => {
    
                setCategory(arr => [...arr, {id: doc.id, content: doc.data()}])
                setOutputList(arr => [...arr, {id: doc.id, content: doc.data()}].slice(0, 2))
                
            });

        });

    }, [])


    // Re-render the component when the screen is active
    const isFocused = useIsFocused()

    useEffect(() => {
        console.log("Re-Build");
        setSelected("Category Name")
    }, [isFocused])
    

    // Toogle the arrow in the front-end
    const toggle = () => {

        setShow(!show)

        if(arrow == "down") {
            setArrow("up")
        } else if(arrow == "up") {
            setArrow("down")
        }

    }

    // Set the selected category
    const select = (cate) => {
        state(cate)
        setSelected(cate.content.name)
        toggle()
    }

    // Filter the result of categories
    useEffect(() => {

        if(inputValue.length != 0) {
            setOutputList(category.filter(elm => elm.content.name.slice(0, inputValue.length) == inputValue).slice(0, 2))
        } else {
            setOutputList(category.slice(0, 2))
        }

    }, [inputValue])


    // Set all states for a new category
    const newCategory = () => {

        // If the input is empty => error
        if(inputValue.length == 0) {

            Toast.show({
                type: "error",
                text1: "Category name invalid",
                text2: "Input field is empty",
            })

        } else {
            
            state({
                new: true,
                content: {
                    name: inputValue,
                    userId: user.uid,
                    level: 0,
                    timer: 0
                }
            })

            toggle()
            setSelected(inputValue)
        }

    }

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
                                <CustomText content={elm.content.name} />
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity style={styles.item} onPress={newCategory}>
                            <CustomText content="Create Category" style={{ color: "#3870FF" }} />
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