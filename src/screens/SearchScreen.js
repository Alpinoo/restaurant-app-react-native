import React,{useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen =()=>{
    const [searchTerm,setSearchTerm]=useState('')
    return(
        <View style={styles.background}>
        <SearchBar 
            term={searchTerm}   
            onSearchTermChanged={setSearchTerm}//if just want to pass value and call function, we can use this instead of an arrow function
            onSearchTermSubmitted={()=> console.log('term submitted')}
        />
            <Text>Search Screen</Text>
            <Text>{searchTerm}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white'
    }
})

export default SearchScreen