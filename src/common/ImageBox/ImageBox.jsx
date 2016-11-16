import React from 'react'
import './imageBox.scss'


const ImageBox = ({url, text, alt, size = "medium", boxColor = "transparent"}) => {

    return (
        <figure className={"image-container " + size + " " + boxColor}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

export default ImageBox;