import React from "react"
import Country from "./Country"
import OneCountry from "./OneCountry"

const Countries = (props) => {
    if(props.countries.length < 10) {
        return(
            <ul>
                {props.countries && props.countries.map(country =>
                    {if(props.countries.length > 1) {
                        return (
                            <Country  
                                key={country.numericCode}
                                country={country}/>
                        )
                    } else if(props.countries.length === 1) {
                        return (
                            <OneCountry
                                key={country.numericCode}
                                country={country}
                            />
                        )
                    } else return null
                    })}
            </ul>
        )
    } else if(props.countries.length > 10) {
            if(props.input === '') {
                return props.show === false
            } else return <p style={{paddingLeft:'40px'}}>Too many matches</p>
    } else return null
}

export default Countries