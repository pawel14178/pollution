import React from 'react'
import './Social.css'

const Footer = ({url, image}) => {
    return(
        <a href={url}><img src={image} alt="" /></a>
    )
}

export default Footer;