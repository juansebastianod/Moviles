import { useEffect, useLayoutEffect } from "react"
import { StatusBar } from "expo-status-bar" 
import Button from "../common/Button";
import useGlobal from "../core/global";
import { 
    Animated,
    Text,
    View,
    SafeAreaView ,
   
} from "react-native"
import Title from "../common/Title"


export default function SplashScreen({navigation}) {
const init =useGlobal(state => state.init)   
    
 function Into(page){

        init(page)
    }
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
            backgroundColor:'white',
            }}>          
            <StatusBar barStyle='light-content'/>
            <Animated.View style={[{ transform:[{translateY}]}]}>
                <Title text='RealtimeChat' color='#9900FF'/>


                <Button title="SignIn" onPress={()=>Into('entrar')} />
                <Button title="SignUp" onPress={()=>Into('Registrarse')} />
            </Animated.View>

         

        </SafeAreaView>

    )

}