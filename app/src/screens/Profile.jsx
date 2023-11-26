import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import useGlobal from "../core/global";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function ProfileImage() {
    const imagePicker=()=>{
        let options ={

            storageOptions:{
                path:'image'
            }
        }
        launchImageLibrary(options,response=>{
            const imageUri = response.assets[0].uri;
            console.log(response)
        })
    }

    return (
        <TouchableOpacity
            style={{
                marginBottom: 20
            }}
            onPress={() => {
                imagePicker()
            }}
        >
            <Image
                source={require('../../assets/profile.png')}
                style={{ width: 180, height: 180, borderRadius: 90, backgroundColor: '#e0e0e0' }} />
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: '#202020',
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 3,
                    borderColor: "#9900FF"
                }}
            >
                <FontAwesomeIcon
                    icon='pencil'
                    size={15}
                    color="#d0d0d0"
                />
            </View>
        </TouchableOpacity>

    )
}

function ProfileLogout() {
    const logout = useGlobal(state => state.logout)
    return (

        <TouchableOpacity
            onPress={logout}
            style={{

                flexDirection: 'row',
                height: 52,
                borderRadius: 26,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 26,
                backgroundColor: '#202020',
                marginTop: 40

            }}
        >

            <FontAwesomeIcon
                icon='right-from-bracket'
                size={20}
                color="#9900FF"
                style={{
                    marginRight: 12

                }}
            >


            </FontAwesomeIcon>
            <Text

                style={{

                    fontWeight: 'bold',
                    color: '#d0d0d0',

                }}>
                Logout
            </Text>
        </TouchableOpacity>
    )
}

function ProfileScreen({ navigation }) {
    const user = useGlobal(state => state.user)
    return (

        <View
            style={{
                flex: 1,
                alignItems: "center",
                paddingTop: 100,

            }}
        >

            <ProfileImage />
            <Text
                style={{
                    textAlign: "center",
                    color: '#9900FF',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 6


                }}
            >
                {user.name}
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    color: '#606060',
                    fontSize: 12,


                }}
            >
                @{user.username}
            </Text>

            <ProfileLogout />


        </View>

    )
}

export default ProfileScreen