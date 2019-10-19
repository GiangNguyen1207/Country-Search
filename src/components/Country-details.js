import React from 'react'; 
import Language from './Language'

const CountryDetails = (props) => {
    let weather = props.weather
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='country-details'>
                    <h3>{props.country.name}</h3>
                        <img src={props.country.flag} alt="Flag" width="30%" /><br /><br />
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
                        <h4 style={{marginTop:'20px'}}>Weather in {props.country.capital}</h4>
                        <strong>Temparature: </strong>
                            <span>{props.weather.data[0].temp} Celsius</span><br />
                        <img src = {`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`} alt='pic'/><br />
                        <strong>Description: </strong>
                            <span>{weather.data[0].weather.description}</span><br />
                        <strong>Sunrise: </strong>
                            <span>{weather.data[0].sunrise}</span><br />
                        <strong>Sunset: </strong>
                            <span>{weather.data[0].sunset}</span><br />
                        <strong>Wind: </strong>
                            <span>{weather.data[0].wind_spd} kph </span>
                                <span>Direction {weather.data[0].wind_cdir}</span><br /><br />
                    <button onClick={props.buttonHide}>Hide</button>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails