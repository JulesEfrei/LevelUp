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

        <Title content="Profile" style={styles.title}/>

        <ProfileContainer />

    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
    title: {
        padding: 30
    }
})