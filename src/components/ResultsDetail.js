import React from "react";
import { View,Image,StyleSheet,Text } from "react-native";

const ResultsDetail=({result})=>{
    return(
        <View>
        <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.text}>{result.name}</Text>
            <Text>{result.rating} Ratings, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{//?without width and heigh, image won't be shown as default
        width:250,
        height:125,
        borderRadius:3 //remove edges from image
    },
    text:{
        fontWeight:'bold'
    }
})

export default ResultsDetail