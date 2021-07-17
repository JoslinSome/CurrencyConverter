import React from 'react'
import { View, StyleSheet,Text, TextInput, TouchableOpacity} from "react-native";
import colors from "../constants/colors"
import { bold } from 'ansi-colors';

const styles= StyleSheet.create({
    button:{
        padding: 15,
        borderColor: colors.border,
        borderWidth: 1,
     
        
    },
    buttonText:{
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold",
    },
    container:{
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 7,
        flexDirection: "row"
    },
    input:{
        flex: 1,
        padding: 10,
        color: "black"
    },
})
export const ConversionInput= ({text,onButtonPress,...props}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.input} 
                {...props} />
        </View>
    )
};