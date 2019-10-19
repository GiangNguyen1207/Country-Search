import React, {useState, useEffect} from "react";
import axios from "axios"
import CountryDetails from "./Country-details";


const Country = (props) => {
    const [ showPopup, togglePopup ] = useState(false)
    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        let isMounted = false
        axios
        .get(`https://api.weatherbit.io/v2.0/current?city=${props.country.capital}&country=${props.country.alpha2Code}&key=56ee134f7635482abee590fc671e7dbb`)
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
                    buttonHide = {buttonHide}
                />
            : null    
            }
        </div>
    )
}

export default Country