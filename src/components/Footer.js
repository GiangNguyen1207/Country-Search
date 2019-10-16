import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <span>Giang Nguyen</span><br />
            <a href='https://www.linkedin.com/in/giang-nguyen-aa8161106/'>
                <FontAwesomeIcon icon={faLinkedin} style={{marginRight:'10px'}} />
            </a>
            <a href='https://github.com/GiangNguyen1207'>
                <FontAwesomeIcon icon={faGithub} />
            </a> 
        </div>
    )
}

export default Footer;