import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData} from './api'


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

    handleChangeCountry = async(country) =>{
       console.log(country)
    }
    render(){
        const {data} = this.state
        return (
            //while using App.module.css , we use dynamic className in the following format.
            //.module ensures , styles are applied exactly where they are intended for.
            <div className = {styles.container}>
               <Cards  data = {data}/>
               <Chart />
               <CountryPicker handleChangeCountry= {this.handleChangeCountry}/>
            </div>
        )
    }
}

export default App