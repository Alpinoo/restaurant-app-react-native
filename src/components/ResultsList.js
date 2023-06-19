import React from "react";
import { View,StyleSheet,Text,FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";
//?we use FlatList for rendering list of results

const ResultsList = ({title,result})=>{
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal //= horizontal={true}
                data={result}
                keyExtractor={(result)=>result.id}//id is unique for all restaurants
                renderItem={({item})=>{
                    return <ResultsDetail result={item}/>
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',// makes element heavier
        marginLeft:15
    }
})

export default ResultsList