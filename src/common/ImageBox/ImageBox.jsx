import React from 'react'
import './imageBox.scss'

const ImageBox = ({url, text, alt, type}) => {
    return (
        <figure className={"image-container " + type}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

export default ImageBox;