import { useLayoutEffect } from "react";
import { SafeAreaView,Text } from "react-native";

function FriendsScreen({navigation}){
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return(

        <SafeAreaView>
            <Text>
                Amigo
            </Text>
        </SafeAreaView>
    )
}

export default FriendsScreen

