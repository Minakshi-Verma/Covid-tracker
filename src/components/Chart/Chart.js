import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = ({data:{confirmed, recovered, deaths}, country}) =>{
    
    const [dailyData, setDailyData] = useState([])

    useEffect (() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());                             
        }       
          fetchAPI() 
    },[]) 

    //building the line Chart for global data   
    const lineChart = (
        //Line component imported from chart that needs only data
        //data is going to be a dyanamic object with some properties
        dailyData.length  // checking if dailydata array has length more than 0 or truthy: if yes Line chart will dispalay
            ? (
            <Line             //Line chart will have only data object (with few properties like labels and datasets)
                data = {{
                    labels: dailyData.map(({date})=>date),
                    datasets:[
                        {
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: 'Infected',
                        borderColor: '#333ff',
                        backgroundColor: 'rgba(0 ,0, 255, 0.5)',
                        fill: true
                        },
                        {
                        data: dailyData.map(({deaths})=> deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                        }
                    ],  
                }} 
            />) :null
    )

    //building the bar chart for data from individual country
    const barChart = (
        //checking id data exists since only then, barchart will display
        confirmed 
        ? (
            <Bar            //bar will have data and options object
             data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets:[{
                    label: "People",
                    backgroundColor:[
                        'rgba(0 ,0, 255, 0.5)',
                        "rgba(0, 255, 0, 0.5)",
                        "rgba(255, 0, 0, 0.5)",
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]

                }]
             }}
             options= {{
                legend:{ display: false} ,
                title: { display: true, text:`Current state in ${country}`}
             }}
            />
        ) : null
    )

    return(
      <div className={styles.container}>
          {country ? barChart : lineChart}
      </div>
    )
}

export default Chart