import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
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
        // console.log(fetchedData)
        this.setState({data: fetchedData})
    }
    // componentWillUnmount(){
    //   console.log("component unmounted")
    // }
  
    handleChangeCountry = async(country) =>{
    //   const fetchData= await fetchDataByCountry(country)
    //   this.setState({data: fetchData})
    // //   console.log("s",fetchCountryData)
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)
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