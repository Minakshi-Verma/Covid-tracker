import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) =>{
    console.log("props", props)

    const [fetchedCountries, setFetchCountries] = useState([])

    useEffect (()=>{
        const fetchAPI = async(country) =>{
           setFetchCountries(await fetchCountries(country))
        }
        
        fetchAPI()
    },[setFetchCountries])
    console.log("fetchcountries", fetchedCountries)
    //for Global option, value should be "", since no country is chosen
    return(
       <FormControl className={styles.formControl}>
           <NativeSelect onClick={(e)=>props.handleChangeCountry(e.target.value)}>
            <option value ="">Global</option> 
                {fetchedCountries.map((country, i)=><option key = {i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker