import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text} from "react-native";

const styles=StyleSheet.create({
    btn:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    image:{

    },
    btnText:{
        color: "white",
        marginLeft: 20,
    }

})
export const Button =({text, onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.btn}> 
            <Image source={require("../assets/images/reverse.png")} style={styles.image}/>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}