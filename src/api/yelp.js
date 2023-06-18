import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer vlBTPozd56D9SWGEWRxR0jD4Zk808PRSwDXwWqMA4PvVDme9URfu3nGdd7USHNbYCiim1JOR2FlLxx1MknzEb2TWXbLdUXXnIEaPGYI9-Kfo6M3waLfIg6maImSPZHYx"
    }
})