import { View, Text, SafeAreaView } from "react-native"
import { useContext } from "react";
import { AuthUserContext } from "../utils/context/index";



export default function HomeScreen() {

  const { user } = useContext(AuthUserContext);

  return (
    
    <View>

      <SafeAreaView>

        <Text>Home Page</Text>

        <Text>{ user.email }</Text>


      </SafeAreaView>


    </View>

  )
}
