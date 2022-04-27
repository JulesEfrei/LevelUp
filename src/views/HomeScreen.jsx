import { View, Text, SafeAreaView } from "react-native"

import TimerInput from "../components/molecules/TimeInput"


export default function HomeScreen() {
  return (
    
    <View>

      <SafeAreaView>

        <Text>Home Page</Text>

        <TimerInput />


      </SafeAreaView>


    </View>

  )
}
