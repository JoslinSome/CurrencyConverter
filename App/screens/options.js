import React from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView, Linking } from "react-native";
import colors from "../constants/colors.js"
import {RowItem, RowSeparator} from "../components/RowItem"
import {Entypo} from "@expo/vector-icons"

const openURL=(url) =>{
    Linking.openURL(url).catch(()=>{
        Alert.alert("Sorry, something went wrong")
        }
    )
}

const styles =StyleSheet.create({
    top:{
        marginTop: 30
    },

    separator:{
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
    },
});
export default () => {
    return(
        <SafeAreaView style={ {flex: 1 } }>
            <ScrollView >
            <View style={styles.top}/>
            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Themes</Text>
                <Entypo name="chevron-right" size={20} color={colors.blue}/>
            </TouchableOpacity> */}
            <RowItem 
            text="Themes"
            onPress={ () => openURL("httpsmhb://learn.halndlebarlabs.com/p/react-native-build-a-currency-converter")}
            rightIcon ={
                <Entypo name="chevron-right" size={20} color={colors.blue}/>
            }
            />

            <RowSeparator/>
            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}></Text>
                <Entypo name="export" size={20} color={colors.blue}/>
            </TouchableOpacity> */}

            <RowItem 
            text="React Native Basics"
            onPress={ () => alert("test")}
            rightIcon ={
                <Entypo name="export" size={20} color={colors.blue}/>
            }
            />

            <RowSeparator/>
            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Examples</Text>
                <Entypo name="export" size={20} color={colors.blue}/>
            </TouchableOpacity> */}
            <RowItem 
            text="Examples"
            onPress={ () => alert("test2")}
            rightIcon ={
                <Entypo name="export" size={20} color={colors.blue}/>
            }
            />
          
            </ScrollView>
        </SafeAreaView>
    );
}