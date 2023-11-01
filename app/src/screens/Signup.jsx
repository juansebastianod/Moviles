import { useLayoutEffect } from "react";
import { SafeAreaView,Text, View } from "react-native";

function SignUpScreen({navigation}){
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
    return(

        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}}>


          </View>
        </SafeAreaView>
    )
}

export default SignUpScreen