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
        return error
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily/`)
        // console.log("data from api", data)
        const modifiedData = data.map(dailyData=>({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return  modifiedData

    }catch (error) {
        return error
    }
}

export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        // console.log(response)
       return countries.map(country=>country.name)
    }catch(error){
        console.log(error)
    }
}