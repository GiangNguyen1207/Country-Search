import React, {useState, useEffect} from "react";
import axios from "axios"
import CountryDetails from "./Country-details";


const Country = (props) => {
    const [ showPopup, togglePopup ] = useState(false)
    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        let isMounted = false
        axios
        .get(`http://api.weatherstack.com/current?access_key=335188ef8b3e043ba8a1669584216372&query=${props.country.capital}`)
        .then((response => {
            if(!isMounted) {
            setWeather(response.data)}
        }))
        return () => {isMounted=true}
    }, [props.country.capital, props.country.alpha2Code])

    const buttonShow = () => {
        togglePopup(true)
    }

    const buttonHide = () => {
        togglePopup(false)
    }

    return(
        <div className='country-list'>
            <li style={{listStyle: 'none'}}>
                <p style={{marginBottom:'0', marginTop:'10px', fontWeight:'bold'}}>{props.country.name}</p>
                <button onClick={()=>buttonShow()}>Show</button>
            </li>
            {showPopup ? 
                <CountryDetails
                    key={props.country.numericCode}
                    country={props.country}
                    weather={weather}
                    buttonHide= {buttonHide}
                />
            : null    
            }
        </div>
    )
}

export default Country