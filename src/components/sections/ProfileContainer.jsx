import React from 'react'
import { useContext } from 'react'

import { AuthUserContext } from '../../utils/context'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomText from'../atoms/CustomText'
import Icon from '../atoms/Icon'
import { useNavigation } from '@react-navigation/core'


const ProfileContainer = () => {

    const { user } = useContext(AuthUserContext);
    const navigation = useNavigation()

    function displayName() {
      if(user.displayName) {
        return user.displayName  
      } else {
        return user.email.slice(0, user.email.split("").findIndex(elm => elm == "@"))
      }
    }

  return (
    <View style={styles.container}>

        <View style={styles.item}>
          <View style={[styles.icon, { backgroundColor: "#59BC7E" }]}>
            <Icon.FontAwesome name="user-o" size={20} />
          </View>
          <View style={styles.dataContainer}>
            <CustomText size={18} content="Name"  style={styles.title} />
            <CustomText content={displayName()} style={styles.data} />
          </View>
        </View>
      
        <View style={styles.item}>
          <View style={[styles.icon, { backgroundColor: "#FFD236" }]}>
            <Icon.Feather name="mail" size={20} />
          </View>
          <View style={styles.dataContainer}>
            <CustomText size={18} content="E-mail"  style={styles.title} />
            <CustomText content={user.email} style={styles.data} />
          </View>
        </View>

        <TouchableOpacity style={[styles.item, { justifyContent: "space-between" }]} onPress={() => console.log("Setting")}>

          <View style={styles.settingContainerLeft}>
            <View style={[styles.icon, { backgroundColor: "#D9DADD" }]}>
              <Icon.AntDesign name="setting" size={20} />
            </View>
            <CustomText size={18} content="Settings"  style={styles.title} />
          </View>

          <Icon.AntDesign name="right" size={15} />

        </TouchableOpacity>

    </View>
  )
}

export default ProfileContainer

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    alignItems: "center",
    marginTop: 50
  },
  item: {
    width: "60%",
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  icon: {
    padding: 10,
    borderRadius: 50,
    marginRight: 25
  },
  title: {
    fontWeight: "bold"
  },
  settingContainerLeft: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
})