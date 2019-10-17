import React, {useState, useEffect} from "react";
import axios from "axios"
import Language from "./Language"

const OneCountry = (props) => {
    const [ weather, setWeather ] = useState({})
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        let isMounted = false
        axios
        .get(`https://api.weatherbit.io/v2.0/current?city=${props.country.capital}&country=${props.country.alpha2Code}&key=56ee134f7635482abee590fc671e7dbb`)
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
                    <img src={props.country.flag} alt="Flag" width="50%" />
                    <h3 style={{marginTop:'20px'}}>Weather in {props.country.capital}</h3>
                    <strong>Temparature: </strong>
                        <span>{weather.data[0].temp} Celsius</span><br />
                    <img src = {`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`} alt='pic'/><br />
                    <strong>Description: </strong>
                        <span>{weather.data[0].weather.description}</span><br />
                    <strong>Sunrise: </strong>
                        <span>{weather.data[0].sunrise}</span><br />
                    <strong>Sunset: </strong>
                        <span>{weather.data[0].sunset}</span><br />
                    <strong>Wind: </strong>
                        <span>{weather.data[0].wind_spd} kph </span>
                            <span>Direction {weather.data[0].wind_cdir}</span>
                </div>
            : null}
        </div>
    )
}

export default OneCountry