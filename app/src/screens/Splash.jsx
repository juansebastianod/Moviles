import { useEffect, useLayoutEffect } from "react"
import { StatusBar } from "expo-status-bar" 
import { 
    Animated,
    Text,
    View,
    SafeAreaView ,
   
} from "react-native"
import Title from "../common/Title"

export default function SplashScreen({navigation}) {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const translateY = new Animated.Value(0)
    const duration = 500
    useEffect(()=>{
        Animated.loop(
        Animated.sequence([
        Animated.timing(translateY,{
            toValue:20,
            duration:duration,
            useNativeDriver:true
        }),
        Animated.timing(translateY,{
            toValue:0,
            duration:duration,
            useNativeDriver:true
        })
    
    ])).start()
    },[])
    return (
        <SafeAreaView 
        style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor:'black',
            }}>
            <StatusBar barStyle='light-content'/>

            <Animated.View style={[{ transform:[{translateY}]}]}>
                <Title text='RealtimeChat' color='white'/>
         
            </Animated.View>
        </SafeAreaView>

    )

}



