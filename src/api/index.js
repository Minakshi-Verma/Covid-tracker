import axios from 'axios';

const url =  "https://covid19.mathdro.id/api"

//await should always be wrapped in a async function to work
export const fetchData = async () => {
    try {
        // const response = await axios.get(url)    
        // const {data} = await axios.get(url) 
        //We can further destructure data and get the specific data we are interested in
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        
        return {confirmed, recovered, deaths, lastUpdate}     

    }catch(error) {

    }
}