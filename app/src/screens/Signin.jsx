import { useLayoutEffect } from "react";
import { SafeAreaView ,Text, View} from "react-native";


function SignInScreen({ navigation }) {

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])

  return (
    <SafeAreaView style={{flex:1}}>
      <View></View>
    </SafeAreaView>
  );
}

export default SignInScreen;