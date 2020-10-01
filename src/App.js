import React from 'react';
import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData} from './api';

import coronaImage from '../src/images/image.png';


class App extends React.Component {
    state = {
        data: {},
        country: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData()      
        this.setState({data: fetchedData})
    }   
  
    handleChangeCountry = async(country) =>{    
    const fetchedData = await fetchData(country)    
    this.setState({data: fetchedData, country:country})
    }
    componentWillUnmount(){
        console.log("component unmounted")
      }
    render(){
        const {data, country} = this.state
        return (
            //while using App.module.css , we use dynamic className in the following format.
            //.module ensures , styles are applied exactly where they are intended for.
            <div className = {styles.container}>
                <img className= {styles.image} src = {coronaImage} alt ="COVID-19"/>
               <Cards  data = {data}  />
               <CountryPicker handleChangeCountry= {this.handleChangeCountry}/>
               <Chart data = {data} country= {country}  />
              
            </div>
        )
    }
}

export default App