import { View, Text, SafeAreaView } from "react-native"

import CustomInput from "../components/atoms/CustomInput"


export default function HomeScreen() {
  return (
    
    <View>

      <SafeAreaView>

        <Text>Home Page</Text>

        <CustomInput content="Text" type="text" />
        <CustomInput content="Email" type="email" />
        <CustomInput content="Password" type="password" />
        <CustomInput content="Time" type="time" />


      </SafeAreaView>


    </View>

  )
}
