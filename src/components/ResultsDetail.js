import React from "react";
import { View,Image,StyleSheet,Text } from "react-native";

const ResultsDetail=({result})=>{
    return(
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultsDetail