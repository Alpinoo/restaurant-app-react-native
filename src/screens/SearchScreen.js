import React,{useState} from "react";
import { View,Text,StyleSheet, } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen =()=>{
    const [searchTerm,setSearchTerm]=useState('')
    const [errorMessage,results,searchApi] = useResults()

    const filterByPrice=(price)=>{
        // price = "$"||"$$"||"$$$"||"$$$$"
        return results.filter((result)=>{
            return result.price === price //return results which have the same price as input price
        })
    }

    return(
        <View style={styles.background}>
        <SearchBar 
            term={searchTerm}   
            onSearchTermChanged={setSearchTerm}//if just want to pass value and call function, we can use this instead of an arrow function
            onSearchTermSubmitted={()=>searchApi(searchTerm)}
        />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <Text>There are {results.length} results</Text>
            <ResultsList result={filterByPrice("$")} title="Cost Effective"/>
            <ResultsList result={filterByPrice("$$")} title="Bit Pricier"/>
            <ResultsList result={filterByPrice("$$$")} title="Big Spender!"/>
            <ResultsList result={filterByPrice("$$$$")} title="Richie Rich!"/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white'
    }
})

export default SearchScreen