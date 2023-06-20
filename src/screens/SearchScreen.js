import React,{useState} from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen =()=>{
    const [searchTerm,setSearchTerm]=useState('')
    const {errorMessage,results,searchApi} = useResults()

    const filterByPrice=(price)=>{
        // price = "$"||"$$"||"$$$"||"$$$$"
        return results.filter((result)=>{
            return result.price === price //return results which have the same price as input price
        })
    }

    return(
        <>
        <SearchBar 
            term={searchTerm}   
            onSearchTermChanged={setSearchTerm}//if just want to pass value and call function, we can use this instead of an arrow function
            onSearchTermSubmitted={()=>searchApi(searchTerm)}
        />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
                <ResultsList result={filterByPrice("$")} title="Cost Effective"/>
                <ResultsList result={filterByPrice("$$")} title="Bit Pricier"/>
                <ResultsList result={filterByPrice("$$$")} title="Big Spender!"/>
                <ResultsList result={filterByPrice("$$$$")} title="Richie Rich!"/>
            </ScrollView> 
        </>
    )
    //?ScrollView is for scrolling down when content on screen is too much for screen size
    //?we don't have to use a view tag to view different components. Instead, we can use empty tags (<> </>)
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white',
        flex:1 //added this because on android, we can't make scroll in fully
    }
})

export default SearchScreen