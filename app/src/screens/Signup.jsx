import { useLayoutEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";

function SignUpScreen({ navigation }) {

  const [username,setUsername]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [password1,setPassword1]=useState('')
  const [password2,setPassword2]=useState('')

  const [usernameError,setUsernameError]=useState('')
  const [firstNameError,setFirstNameError]=useState('')
  const [lastNameError,setLastNameError]=useState('')
  const [password1Error,setPassword1Error]=useState('')
  const [password2Error,setPassword2Error]=useState('')
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

   const failPassword=!password1 || password1.length<4

   if(failPassword){

    setPassword1Error('Campo vacio o password muy corta')

   }

   const failPassword2=password1 !== password2

   if(failPassword2){

    setPassword2Error('No son iguales')
    setPassword1Error('No son iguales')

   }

   if(failUsername||
    failFirtName||
    failLastName||
    failPassword||
    failPassword2
    ){

      return 
    }
    
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
           value={password1}
           error={password1Error}
           setValue={setPassword1}
           setError={setPassword1Error}
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
            onPress={() => navigation.goBack()}
          > Acceder ahora
          </Text>

        </Text>

      </View>
      </TouchableWithoutFeedback>
     
    </SafeAreaView>
  )
}

export default SignUpScreen