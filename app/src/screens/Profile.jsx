import { useLayoutEffect } from "react";
import { SafeAreaView,Text } from "react-native";

function ProfileScreen({navigation}){
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return(

        <SafeAreaView>
            <Text>
                Profile
            </Text>
        </SafeAreaView>
    )
}

export default ProfileScreen