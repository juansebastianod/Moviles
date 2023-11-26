import { useLayoutEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";
import api from '../core/api'
import util from '../core/utils'
import useGlobal from "../core/global";

function SignUpScreen({ navigation }) {


  const [username,setUsername]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPassword2]=useState('')

  const [usernameError,setUsernameError]=useState('')
  const [firstNameError,setFirstNameError]=useState('')
  const [lastNameError,setLastNameError]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const [password2Error,setPassword2Error]=useState('')
  const login =useGlobal(state => state.authenticated)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function onSignUp(){

    console.log("onSign UP")

   const failUsername=!username || username.length<5

   if(failUsername){

    setUsernameError('Mayor a 5 caracteres o  campo vacio')
   }

   const failFirtName=!firstName 
 
   if(failFirtName){

    setFirstNameError('Campo vacio')
   }

   const failLastName=!lastName 

   if(failLastName){

    setLastNameError('Campo vacio')
   }

   const failPassword=!password || password.length<4
   
   if(failPassword){

    setPasswordError('Campo vacio o password muy corta')

   }

   const failPassword2 = password !== password2
 
   if(failPassword2){

    setPassword2Error('No son iguales')
    setPasswordError('No son iguales')

   }

   if(failUsername||
    failFirtName||
    failLastName||
    failPassword||
    failPassword2
    ){

      return 
    }

    api({
      method:'POST',
      url:'chat/signup/',
      data:{
        username:username,
        first_name:firstName,
        last_name:lastName,
        password:password,
      }
    }).then(response =>{

      
      util.log(response.data)
      login(response.data)

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

    <SafeAreaView style={{ flex: 1 }}>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 16
        }}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 24,
            fontSize: 25,
            fontWeight: 'bold'



          }}
        >
          Hoola! Registrate para comenzar
        </Text>

        <Input
            title="Username" 
            value={username}
            error={usernameError}
            setValue={setUsername}
            setError={setUsernameError}
            />
        <Input
           title='First Name' 
           value={firstName}
           error={firstNameError}
           setValue={setFirstName}
           setError={setFirstNameError}
            />
        <Input 
           title='Last Name' 
           value={lastName}
           error={lastNameError}
           setValue={setLastName}
           setError={setLastNameError}
           />
        <Input 
           title='Password' 
           value={password}
           error={passwordError}
           setValue={setPassword}
           setError={setPasswordError}
           secureTextEntry={true}
           />
        <Input 
           title='Retype Password'
           value={password2}
           error={password2Error}
           setValue={setPassword2}
           setError={setPassword2Error}
           secureTextEntry={true}
            />

        <Button title='Resgistrar' onPress={onSignUp} />

        <Text style={{

          textAlign: "center",
          marginTop: 40
        }}>

          ¿Ya tienes cuenta ?
          <Text
            style={{
              color: '#23B198'
            }}
            onPress={() => navigation.navigate('SignIn')}
          > Acceder ahora
          </Text>

        </Text>

      </View>
      </TouchableWithoutFeedback>
     
    </SafeAreaView>
  )
}

export default SignUpScreen