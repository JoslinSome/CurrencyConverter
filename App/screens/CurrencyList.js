import { View,  FlatList, StyleSheet} from "react-native";
import React from 'react'
import currencies from '../data/currencies.json'
import {RowItem, RowSeparator} from "../components/RowItem"
import {Entypo} from "@expo/vector-icons"

const styles=StyleSheet.create({

})

export default ({navigation, route={} }) => {
    const params= route.params || {};
    return (
      <View>
        <FlatList
            data={currencies}
            renderItem={({item}) =>{
                const selected = params.activeCurrency === item;
                return (<RowItem text={item} onPress={()=>navigation.pop()} 
                rightIcon={
                selected && (
                <View>
                    <Entypo name="check" size={20} color= "blue"/>
                </View>
                )
                }
                />)
            }}
            ItemSeparatorComponent={()=> <RowSeparator/>}
        />
      </View>
    );
  };