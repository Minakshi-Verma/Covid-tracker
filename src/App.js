import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'

class App extends React.Component {
    render(){
        return (
            //while using App.module.css , we use dynamic className in the following format.
            //.module ensures , styles are applied exactly where they are intended for.
            <div className = {styles.container}>
               <Cards />
               <Chart />
               <CountryPicker />
            </div>
        )
    }
}

export default App