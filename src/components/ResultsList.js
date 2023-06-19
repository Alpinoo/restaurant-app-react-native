import React from "react";
import { View,StyleSheet,Text,FlatList,TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
//?we use FlatList for rendering list of results

const ResultsList = ({title,result,navigation})=>{//?navigation is from props object that passed from parent
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}//disable horizontal scroll bar
                horizontal //= horizontal={true}
                data={result}
                keyExtractor={(result)=>result.id}//id is unique for all restaurants
                renderItem={({item})=>{
                    return (
                    <TouchableOpacity onPress={()=>navigation.navigate('ShowResults')}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',// makes element heavier
        marginLeft:15,
        marginBottom:5
    }
})

export default ResultsList