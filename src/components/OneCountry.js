import React, {useState, useEffect} from "react";
import axios from "axios"
import Language from "./Language"

const OneCountry = (props) => {
    const [ weather, setWeather ] = useState({})
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        let isMounted = false
        axios
        .get(`http://api.weatherstack.com/current?access_key=335188ef8b3e043ba8a1669584216372&query=${props.country.capital}`)
        .then((response => {
            if(!isMounted) {
            setWeather(response.data)
            setLoaded(true)}
        }))
        return () => {isMounted=true}
    }, [props.country.capital, props.country.alpha2Code])

    return(
        <div className='country-list'>
            {loaded ?
                <div>
                   <h2>{props.country.name}</h2>
                   <img src={props.country.flag} alt="Flag" width="50%" /><br /><br />
                    <strong>Capital: </strong>
                        <span>{props.country.capital}</span><br />
                    <strong>Population: </strong>
                        <span>{props.country.population}</span><br />
                    <strong>Timezone: </strong>
                        <span>{props.country.timezones}</span><br />
                    <strong>Languages: </strong> 
                        <ul>
                            {props.country.languages && props.country.languages.map((language,index) =>
                                <Language 
                                    key={index}
                                    language={language}
                                />
                            )}
                        </ul>
                    <h3 style={{marginTop:'20px'}}>Weather in {props.country.capital}</h3>
                    <strong>Temparature: </strong>
                            <span>{weather.current.temperature} Celsius</span><br />
                        <img src={weather.current.weather_icons} alt='pic'/><br />
                        <strong>Description: </strong>
                            <span>{weather.current.weather_descriptions}</span><br />
                        <strong>Localtime </strong>
                            <span>{weather.location.localtime}</span><br />
                        <strong>Wind: </strong>
                            <span>{weather.current.wind_speed} kph </span>
                                <span>Direction {weather.current.wind_dir}</span><br />
                        <strong>Humidity: </strong>
                            <span>{weather.current.humidity}</span><br /><br />
                </div>
            : null}
        </div>
    )
}

export default OneCountry