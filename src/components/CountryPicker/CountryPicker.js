import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) =>{
    console.log(props)

    const [fetchedCountries, setFetchCountries] = useState([])

    useEffect (()=>{
        const fetchAPI = async() =>{
           setFetchCountries(await fetchCountries())
        }
        
        fetchAPI()
    },[setFetchCountries])
    console.log("fetchcountries", fetchedCountries)

    return(
       <FormControl className={styles.formControl}>
           <NativeSelect onClick={(e)=>props.handleChangeCountry(e.target.value)}>
            <option value ="global">Global</option>
                {fetchedCountries.map((country, i)=><option key = {i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker