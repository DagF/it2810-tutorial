import React, {PropTypes} from 'react'
import './imageBox.scss'

/**
 * ImageBox component displaying a image and a text grouped.
 *
 * To be used as full page image, in text image or in-text link image.
 *
 * @param url url of the image
 * @param text text for the image
 * @param alt alternative textual description for the image
 * @param type ImageBox type
 * @returns {XML}
 * @constructor
 *
 * @example ./ImageBox.examples.md
 */
const ImageBox = ({url, text, alt, type="inline"}) => {
    return (
        <figure className={"image-box image-box-" + type }>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

ImageBox.propTypes = {
    /**
     * url of the image
     */
    url: PropTypes.string.isRequired,
    /**
     * text for the image
     */
    text: PropTypes.string.isRequired,
    /**
     * alternative textual description for the image
     */
    alt: PropTypes.string.isRequired,
    /**
     * ImageBox type
     */
    type: PropTypes.oneOf(['inline', 'block', 'link'])
};

export default ImageBox;