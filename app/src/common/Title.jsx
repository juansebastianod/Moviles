import { Text } from "react-native"

export default function Title({text,color}){
return (

    <Text
    style={{
        color:color,
        textAlign:"center",
        fontSize:48,
        fontStyle: "italic",

        
    }}
    >
        {text}
    </Text>
)


}