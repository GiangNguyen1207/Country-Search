import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faFlag} />
            <span> Country search </span>
        </div>
    )
}

export default Header;