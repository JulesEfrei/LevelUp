import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { useContext, useEffect } from "react";
import { AuthUserContext } from "../utils/context/index";



export default function HomeScreen() {

  const { user } = useContext(AuthUserContext);


  return (
    
    <View>

      <SafeAreaView>

        <Text>Home Page</Text>

        <Text>{ user.email }</Text>
        <Text>{ user.uid }</Text>  


      </SafeAreaView>


    </View>

  )
}
