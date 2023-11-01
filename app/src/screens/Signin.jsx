import { useLayoutEffect } from "react";
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Title from "../common/Title";

function Input({ title }) {
  return (
    <View>
      <Text
        style={{
          color: "#70747a",
          paddingLeft: 30,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      <TextInput
        style={{
          backgroundColor: "#e1e2e4",
          borderRadius: 26,
          height: 52,
          paddingHorizontal: 16,
          fontSize: 16,
        }}
      />
    </View>
  );
}

function Button({ title }) {

  return (

    <TouchableOpacity
      style={{
        backgroundColor: '#202020',
        height: 52,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: "bold",

        }}
      >
        {title}
      </Text>

    </TouchableOpacity>
  )
}

function SignInScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Image
            source={require("../../assets/tora.jpg")}
            style={{
              height: 120,
              width: 120,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
        </View>

        <Input title="Username" />
        <Input title="Password" />
        <Button title='Sign In' />

        <Text style={{

          textAlign: "center",
          marginTop: 40
        }}>

          ¿No tiene una cuenta?
          <Text
            style={{
              color: '#23B198'
            }}
            onPress={()=>navigation.navigate('SignUp')}
          > Registrate ahora
          </Text>

        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignInScreen;