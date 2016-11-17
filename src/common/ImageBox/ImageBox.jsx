import React from 'react'

/**
 * 
 * @param url
 * @param text
 * @param alt
 * @param size
 * @param boxColor
 * @returns {XML}
 * @constructor
 */
const ImageBox = ({url, text, alt, size, boxColor}) => {
    return (
        <figure className={"image-box " + size + " " + boxColor}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

export default ImageBox;