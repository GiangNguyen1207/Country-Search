import React, {useState, useEffect} from "react";
import axios from "axios"
import Language from "./Language"

const Country = (props) => {
    const [ showDetails, setShowDetails ] = useState(false)
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
    }, [props.country.capital])

    const buttonShow = () => {
        setShowDetails(true)
    }

    const buttonUnShow = () => {
        setShowDetails(false)
    }

    return(
        <div className='country-list'>
            <li style={{listStyle: 'none'}}>
                <p style={{marginBottom:'0', marginTop:'10px', fontWeight:'bold'}}>{props.country.name}</p>
                <button onClick={()=>buttonShow()}>Show</button>
                <button onClick={()=>buttonUnShow()}>Unshow</button>
            </li>
            {showDetails ? 
                <div>
                    <h2>{props.country.name}</h2>
                    <strong>Capital: </strong><span>{props.country.capital}</span><br />
                    <strong>Population: </strong><span>{props.country.population}</span><br />
                    <strong>Languages: </strong> 
                        <ul>
                            {props.country.languages && props.country.languages.map((language,index) =>
                                <Language 
                                    key={index}
                                    language={language}
                                />
                            )}
                        </ul>
                    <img src={props.country.flag} alt="Flag" width="50%" />
                    <h3 style={{marginTop:'20px'}}>Weather in {props.country.capital}</h3>
                    <strong>Date and Time: </strong> <span>{weather.location.localtime}</span><br />
                    <strong>Temparature: </strong>
                        <span>{weather.current.temperature} Celsius</span><br />
                    <img src={weather.current.weather_icons} alt="Pic"/><br />
                    <strong>Wind: </strong>
                        <span>{weather.current.wind_speed} kph </span>
                            <span>Direction {weather.current.wind_dir}</span>
                </div>
                : null
            }
        </div>
       
    )
}

export default Country