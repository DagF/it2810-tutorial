import React from 'react'
import './imageBox.scss'

const ImageBox = ({url, text, alt}) => {
    return (
        <figure className="image-container">
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

export default ImageBox;