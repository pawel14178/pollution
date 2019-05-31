import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer__info">
                <h3>Powered by Paweł Jakubiec. Project done as a recruitment task</h3>
            </div>
            <div className="Footer__social">
                <a href="https://github.com/pawel14178"><img src={github} alt="github" className="Footer__social-github" /></a>
                <a href="https://www.linkedin.com/in/pawe%C5%82-jakubiec-321426153/"><img src={linkedin} alt="linkedIn" className="Footer__social-linkedin" /></a>
            </div>    
        </div>
    )
}

export default Footer;