import { Text, TouchableOpacity } from "react-native";


export default function Button({ title,onPress }) {

  

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
        onPress={onPress}
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