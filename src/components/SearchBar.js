import React from "react";
import { View,StyleSheet, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';// we got it from https://icons.expo.fyi

const SearchBar = ({searchTerm,onSearchTermChanged,onSearchTermSubmitted})=>{
    return(
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle}/> 
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={searchTerm}
                onChangeText={onSearchTermChanged} 
                onEndEditing={onSearchTermSubmitted}//when editing is done via pressing enter or ok key in keyboard of phone 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5, //for edges to be rounded
        marginHorizontal:15, //bar to standing off the edges
        flexDirection:'row',//to see input near icon, instead of below
        marginTop:15, //for bar to distinguish from header of the page
        marginBottom:10

    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:2,//with this, we saw that due to flexDirection, input can't use all of the searchBar.
        flex:1,//we let input to use all of the width of search bar
        fontSize:20
    
    },
    iconStyle:{
        fontSize:45,
        marginHorizontal:5, //for icon not to stick to borders
        alignSelf:'center', //icon to be centered
        
    }
})

export default SearchBar