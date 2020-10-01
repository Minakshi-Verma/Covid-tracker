import axios from 'axios';

const url =  "https://covid19.mathdro.id/api"

//fetch all the data(global) for confirmed, recovered and deaths and lastUpdate
//await should always be wrapped in a async function to work
export const fetchData = async (country) => {
    let changeableurl = url
    if(country){
        changeableurl = `${url}/countries/${country}`
    } 
    // You can use changeable url in get request if you follow above approach in getting
    //all data and data based on country in just one function

    try {
        // const response = await axios.get(url)    
        // const {data} = await axios.get(url) 
        //We can further destructure data and get the specific data we are interested in

        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableurl)         
        return {confirmed, recovered, deaths, lastUpdate}     

    }catch(error) {
        return error
    }
}


//fetch all the data (confirmed, recovered, deaths) for specific country

// export const fetchDataByCountry = async (country) =>{
//     if(country){
//     try{  

//         const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(`${url}/countries/${country}`)
//         console.log({confirmed, recovered, deaths, lastUpdate})
//         return {confirmed, recovered, deaths, lastUpdate}  

//     }catch(error){
//         console.log(error)
//     }
// }   
// }


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