import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavBar from '../components/sections/ProfileNavBar'
import Title from '../components/atoms/Title'
import ProfileContainer from '../components/sections/ProfileContainer'
import SettingsContainer from '../components/sections/SettingsContainer'

const Profile = () => {
  return (
    
    <SafeAreaView>

        <ProfileNavBar />

        <View style={[styles.titleContainer, { width: 72 }]} >
          <Title content="Profile"/>
        </View>

        <ProfileContainer />

        <View style={[styles.titleContainer, { width: 90, marginTop: 50 }]} >
          <Title content="Settings"/>
        </View>

        <SettingsContainer />

    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
    titleContainer: {
      marginLeft: 30,
      borderBottomWidth: 1,
      borderColor: "black",
      paddingBottom: 5
    }
})