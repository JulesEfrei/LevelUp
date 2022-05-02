import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useContext, useEffect } from "react";
import { AuthUserContext } from "../utils/context/index";


import Logo from '../components/atoms/Logo'
import Title from '../components/atoms/Title'
import Quote from "../components/molecules/Quote"
import RecentActivities from "../components/sections/RecentActivities"


export default function HomeScreen() {

  const { user } = useContext(AuthUserContext);

  function displayName() {
    if(user.displayName) {
      return user.displayName  
    } else {
      return user.email.slice(0, user.email.split("").findIndex(elm => elm == "@"))
    }
  }


  return (
    
    <SafeAreaView>

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.logo}>
          <Logo size="sm" />
        </View>


        <View style={styles.header}>

          <View style={styles.titleContainer}>
              <Title content="Bonjour " style={styles.title1} />
              <View style={styles.title2}>
                <Title content={displayName() } style={{ color: "white" }} />
              </View>
              <Title content=" !" style={styles.title1} />
          </View>

          <Quote />

        </View>

        <RecentActivities />

      </ScrollView>


    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  header: {
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 20
  },
  titleContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row"
  },
  title1: {
    fontWeight: "bold"
  },
  title2: {
    backgroundColor: "#3870FF",
    paddingHorizontal: 10,
    borderRadius: 5
  }
})