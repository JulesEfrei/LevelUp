import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavBar from '../components/sections/ProfileNavBar'
import Title from '../components/atoms/Title'
import ProfileContainer from '../components/sections/ProfileContainer'

const Profile = () => {
  return (
    
    <SafeAreaView>

        <ProfileNavBar />

        <View style={styles.titleContainer} >
          <Title content="Profile"/>
        </View>

        <ProfileContainer />

    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
    titleContainer: {
      width: 72,
      marginLeft: 30,
      borderBottomWidth: 1,
      borderColor: "black",
      paddingBottom: 5
    }
})