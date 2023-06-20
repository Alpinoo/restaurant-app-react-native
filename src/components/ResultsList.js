import React from "react";
import { View,StyleSheet,Text,FlatList,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";
//?we use FlatList for rendering list of results

const ResultsList = ({title,result,navigation})=>{//?navigation is from props object that passed from parent
    if(!result.length){ //? it won't render whole screen while waiting and categories which has no element  
        return null
    }
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
                    <TouchableOpacity onPress={()=>navigation.navigate('ShowResults',{id:item.id})}>
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

//!Normally, we have to pass navigation to searchScreen, then it passes to ResultsList. It's not very effective because SearchScreen doesn't need navigation. Instead, we wrap component with withNavigation so that ResultsList can use navigation without needing to be declared in searchScreen
export default withNavigation(ResultsList) 