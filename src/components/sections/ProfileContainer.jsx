import React from 'react'
import { useContext } from 'react'

import { AuthUserContext } from '../../utils/context'

import { StyleSheet, Text, View } from 'react-native'
import CustomText from'../atoms/CustomText'


const ProfileContainer = () => {

    const { user } = useContext(AuthUserContext);

  return (
    <View>
      
        <CustomText content={"E-mail : " + user.email} />

    </View>
  )
}

export default ProfileContainer

const styles = StyleSheet.create({})