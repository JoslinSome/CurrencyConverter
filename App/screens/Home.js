import React from 'react'
import { View, StyleSheet, StatusBar,Image, Dimensions,Text} from "react-native";
import colors from "../constants/colors";
import { blue } from 'ansi-colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {ConversionInput} from "../components/conversionInput"
import {Button} from "../components/Button"

const screen= Dimensions.get("window")
const baseCurrency="USD"
const quoteCurrency="GBP"
const conversionRate=0.834
const styles =StyleSheet.create({
    container:{
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: "center"
    },
    logoContainer:{
        alignItems: "center",
        justifyContent: "center",
      
    },
    logoBackground:{
        width: screen.width*0.5,
        height: screen.height* 0.5,
    },
    logo:{
        position: "absolute",
        width: screen.width*0.25,
        height: screen.height* 0.25,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
        color: "white"

    },
    specification:{
        marginLeft: 20,
        color: "white"
    }

})

export default() => {

    return(

        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/images/background.png")}
                    style={styles.logoBackground}
                    resizeMode="contain"/>
                <Image 
                    source={require("../assets/images/logo.png")}
                     style={styles.logo}
                     resizeMode="contain"/>
            </View>
            <ConversionInput
                text="USD"
                value="123"
                onButtonPress={()=> alert("Todo")}
                onChangeText= {text=> console.log("text", text)}
                keyboardType= 'numeric'
                />
            <ConversionInput
                text="GBP"
                value="333"
                onButtonPress={()=> alert("Todo22")}
                editable={false}
                />
                <Text style={styles.specification}>1 {baseCurrency} = {conversionRate} {quoteCurrency} as of april 23 2021</Text>
                <Button text="Reverse currencies" onPress={()=>alert("Todo")}/>

        </View>
    )
}