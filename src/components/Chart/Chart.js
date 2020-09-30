import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


const Chart = () =>{
    const [dailyData, setDailyData] = useState([])

    useEffect (() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
            // setDailyData(initialDailyData)                   
        }
          console.log("useState data updated", dailyData)
          fetchAPI() 

    },[dailyData])

    const lineChart = (
        //Line component imported from chart that needs only data
        //data is going to be a dyanamic object with some properties
        dailyData.length  // checking if dailydata array has length more than 0 or truthy
            ? (
            <Line
                data = {{
                    labels: dailyData.map(({date})=>date),
                    datasets:[{
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: 'Infected',
                        borderColor: '#333ff',
                        fill: true
                    },{
                        data: dailyData.map(({deaths})=> deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }],  
                }} 
            />) :null
    )

    return(
      <div className={styles.container}>
          {lineChart}
      </div>
    )
}

export default Chart