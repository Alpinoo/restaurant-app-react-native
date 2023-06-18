import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet, } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen =()=>{
    const [searchTerm,setSearchTerm]=useState('')
    const [errorMessage,results,searchApi] = useResults()

    return(
        <View style={styles.background}>
        <SearchBar 
            term={searchTerm}   
            onSearchTermChanged={setSearchTerm}//if just want to pass value and call function, we can use this instead of an arrow function
            onSearchTermSubmitted={()=>searchApi(searchTerm)}
        />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <Text>There are {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white'
    }
})

export default SearchScreen