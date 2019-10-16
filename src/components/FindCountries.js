import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const FindCountries = (props) => {
    return (
        <form className='input-country'>
            <label>Find countries:</label><br />
            <input 
                    value={props.input} 
                    onChange={props.handlerInput}
                    placeholder='Search...' />
        </form>
    )
}

export default FindCountries