import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View ,Image, TouchableOpacity} from "react-native";

function ProfileLogout(){

    return(

        <TouchableOpacity
            style={{

                flexDirection:'row',
                height:52,
                borderRadius:26,
                alignItems:"center",
                justifyContent:"center",
                paddingHorizontal:26,
                backgroundColor:'#202020',
                marginTop:40

            }}
        >
            <Text
            
            style={{

                fontWeight:'bold',
                color:'#d0d0d0',
               
            }}>
                Logout
            </Text>
        </TouchableOpacity>
    )
}

function ProfileScreen({ navigation }) {

    return (

        <View
            style={{
                flex: 1,
                alignItems: "center",
                paddingTop: 100,

            }}
        >

            <Image
                source={require('../../assets/profile.png')}
                style={{ width: 180, height: 180, borderRadius: 90, backgroundColor: '#e0e0e0', marginBottom:20 }} />

            <Text
            style={{
                textAlign:"center",
                color:'#9900FF',
                fontSize:20,
                fontWeight:'bold',
                marginTop:6


            }}
            >
                dogulas
            </Text>
            <Text
            style={{
                textAlign:"center",
                color:'#606060',
                fontSize:12,
              

            }}
            >
                @douglas
            </Text>

            <ProfileLogout/>

            
        </View>

    )
}

export default ProfileScreen