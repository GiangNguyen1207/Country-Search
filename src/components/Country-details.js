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
                    <button onClick={props.buttonHide}>Hide</button>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails