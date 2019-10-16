import React, {useState, useEffect} from 'react';
import FindCoutries from "./FindCountries"
import axios from "axios"
import Countries from './Countries';
import '../App.css'

const Body = () => {
    const [ countries, setCountries ] = useState([])
    const [ input, setInput ] = useState("")
    const [ show, setShow ] = useState(false)

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response => { 
            setCountries(response.data)
            setShow(false)
        })
    }, [])

    const handlerInput = (event) => {
        setInput(event.target.value) 
        setShow(true)
        }

    const filterCountries=(countries.filter(country=>
        country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1))

    return(
        <div className='container'>
            <div className='content-container'>
                <div className='input-container'>
                    <FindCoutries 
                        input={input} 
                        handlerInput={handlerInput}/> 
                </div>
                <div className='result-container'> 
                    {show ? 
                        <Countries
                            countries={filterCountries}
                            show={show}
                            input={input}
                            /> 
                    :null}
                </div>
            </div>
        </div>
    )
}

export default Body;
