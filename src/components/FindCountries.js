import React from "react"

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