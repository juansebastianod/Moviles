import { useLayoutEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import api from '../core/api'
import util from '../core/utils'
import useGlobal from "../core/global";
//import fetch from 'fetch';





function SignInScreen({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errorUsername, setErrorUsername] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const login =useGlobal(state => state.login)
  const authenticated= useGlobal(state => state.authenticated)
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  async function onSignIn() {
    console.log('onSign', username, password);
  
    const failUsername = !username;
  
    if (failUsername) {
      setErrorUsername('Username not provided');
    }
  
    const failPassword = !password;
    if (failPassword) {
      setErrorPassword('Password not provided');
    }
  
    if (failUsername || failPassword) {
      return;
    }
  
    api({
      method:'POST',
      url:'/chat/signin/',
      data:{
        username:username,
        password:password


      }
    }).then(response =>{
      util.log('Response data:', response.data);

      login(response.data.user)

      console.log("sebas")
      console.log(authenticated)

    }).catch(error =>{

      if (error.response) {
        
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }
  return (
    <SafeAreaView style={{ flex: 1}}>
       <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          
            <Image
              source={require("../../assets/tora.jpg")}
              style={{
                height: 120,
                width: 120,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
         

          <Input
            title="Username"
            value={username}
            error={errorUsername}
            setValue={setUsername}
            setError={setErrorUsername}
          />
          <Input
            title="Password"
            value={password}
            error={errorPassword}
            setValue={setPassword}
            setError={setErrorPassword}
            secureTextEntry={true}
          />
          <Button title='Sign In' onPress={onSignIn} />

          <Text style={{

            textAlign: "center",
            marginTop: 40
          }}>

            ¿No tiene una cuenta?
            <Text
              style={{
                color: '#23B198'
              }}
              onPress={() => navigation.navigate('SignUp')}
            > Registrate ahora
            </Text>

          </Text>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignInScreen;