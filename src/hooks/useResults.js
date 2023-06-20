import { useState,useEffect } from "react";
import yelp from "../api/yelp";

//?For dividing hooks, first find which elements will be used in hooks then paste into hooks file and export necessary elements

export default ()=>{
    const [results,setResults]=useState([])
    const [errorMessage,setErrorMessage] = useState('')

    //?useEffect has two arguments: a function and an array with a value. When that value changes, it'll be rerender
    //?if there's no value, useEffect will run every time component rendered

    const searchApi= async(term)=>{
        console.log('Hello there');
        try {
            const response = await yelp.get('/search',{
                params:{ //?in axios, object after route represents filters for the result
                    term,
                    location: 'san jose',
                    limit:50,
                }
              
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage(`Can't communicate with Yelp API`)
        }
    }
    //for giving search an initial search.
    // searchApi('pasta') this is bad code because due to it's in component, it'll be called forever.
    useEffect(()=>{searchApi('turkish')},[])

    return {searchApi,results,errorMessage}//?elements we're using in SearchScreen
}