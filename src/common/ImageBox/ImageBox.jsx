import React from 'react'
import {Link} from 'react-router'
import './imageBox.scss'

const ImageBox = ({url, text, alt, goTo, type}) => {
    return (
        <Link to={goTo} className="imageBox-link">
            <figure className={"image-container " + type}>
                <img src={url} alt={alt}/>
                <figcaption>{text}</figcaption>
            </figure>
        </Link>
    )
};

export default ImageBox;