import React from 'react'
import { useContext } from 'react'

import { AuthUserContext } from '../../utils/context'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomText from'../atoms/CustomText'
import Icon from '../atoms/Icon'
import ToggleButton from '../atoms/ToggleButton'

export default function SettingsContainer() {

  return (
    <View style={styles.container}>


        <TouchableOpacity style={[styles.item, { justifyContent: "space-between" }]} onPress={() => console.log("Setting")}>

          <View style={styles.settingContainerLeft}>
            <View style={[styles.icon, { backgroundColor: "#D9DADD" }]}>
              <Icon.FontAwesome name="moon-o" size={20} />
            </View>
            <View style={styles.dataContainer}>
                <CustomText size={18} content="Dark Mode"  style={styles.title} />
                <CustomText content="In Beta" style={styles.data} size="sm" />
            </View>
          </View>

          <ToggleButton style={styles.toggleButton} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { justifyContent: "space-between" }]} onPress={() => console.log("Setting")}>

          <View style={styles.settingContainerLeft}>
          <View style={[styles.icon, { backgroundColor: "#FF6839" }]}>
            <Icon.Ionicons name="bug-outline" size={20} />
          </View>
            <CustomText size={18} content="Report Bug"  style={styles.title} />
          </View>

          <Icon.Entypo name="link" size={20} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { justifyContent: "space-between" }]} onPress={() => console.log("Setting")}>

          <View style={styles.settingContainerLeft}>
            <View style={[styles.icon, { backgroundColor: "#ffbd73" }]}>
              <Icon.Ionicons name="help-circle-outline" size={20} />
            </View>
            <CustomText size={18} content="Need help"  style={styles.title} />
          </View>

          <Icon.Entypo name="link" size={20} />

        </TouchableOpacity>

    </View>
  )
}

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
  },
  toggleButton: {
    transform: [{ scaleX: .8 }, { scaleY: .8 }]
  }
})