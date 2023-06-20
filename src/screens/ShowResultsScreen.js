import React, { useEffect, useState } from "react";
import {View,StyleSheet,Text,Image,FlatList} from "react-native"
import yelp from "../api/yelp";

const ShowResultsScreen = ({navigation})=>{
    const [result,setResult]= useState(null)//?it means we don't have data but we'll fill soon
    const id = navigation.getParam('id')//?we got id from resultList's navigation. We passed item's id.

    const getResults=async(id)=>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    
    useEffect(()=>{
        getResults(id)
    },[])//!we did this because we don't want getResults to work when component rerender every time  
    
    if(!result){ //?when page first rendered, it'll be null. So, if there's no result, don't do anything
        return null
    }
    
    return (
        <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
        </View>

  );
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})

export default ShowResultsScreen