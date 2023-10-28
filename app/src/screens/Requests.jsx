import { useLayoutEffect } from "react";
import { SafeAreaView,Text } from "react-native";

function RequestScreen({navigation}){
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return(

        <SafeAreaView>
            <Text>
                request
            </Text>
        </SafeAreaView>
    )
}

export default RequestScreen