import React, { useState } from 'react';
import { View, StyleSheet, StatusBar,Image, Dimensions,Text, ScrollView, TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons"
import {SafeAreaView} from "react-native-safe-area-context"
import colors from "../constants/colors";
import { blue } from 'ansi-colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {ConversionInput} from "../components/conversionInput"
import {Button} from "../components/Button"
import Navigation from '../config/Navigation';

const screen= Dimensions.get("window")


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
        color: "white",
        marginBottom: 10
    },
    specification:{
        marginLeft: 20,
        color: "white"
    },
    header:{
        alignItems: "flex-end"
    }

})

export default({navigation}) => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [quoteCurrency, setQuoteCurrency] = useState('GBP');
    const [value,setValue]= useState("100")
    const conversionRate=0.834
    let tempCurrency=""
    const [scrollEnabled, setScrollEnabled] = useState(false);

    const swapCurrencies = () =>{
        setBaseCurrency(quoteCurrency)
        setQuoteCurrency(baseCurrency)
    }
    return(

        <View style={styles.container}>
            <ScrollView>
                 <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=> navigation.push("Options")}>
                            <Entypo name="cog" size={32} color="white"/>
                        </TouchableOpacity>
                    </View>
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
                <Text style={styles.title}>Currency Converter</Text>

                <ConversionInput
                    text={baseCurrency}
                    value={value}
                    onButtonPress={()=> navigation.push("CurrencyList",{activeCurrency: baseCurrency})}
                    onChangeText= {text=> {setValue(text)}}
                    keyboardType= 'numeric'
                    />
                <ConversionInput
                    text={quoteCurrency}
                    value={
                        {value} && parseFloat({value})*conversionRate
                    }
                    onButtonPress={()=> navigation.push("CurrencyList", {activeCurrency: quoteCurrency})}
                    editable={false}
                    />
                    <Text style={styles.specification}>1 {baseCurrency} = {conversionRate} {quoteCurrency} as of april 23 2021</Text>
                    <Button text="Reverse currencies" onPress={()=>swapCurrencies()}/>
            </ScrollView>

        </View>
    )
}