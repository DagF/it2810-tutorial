import React, {PropTypes} from 'react'
import './imageBox.scss'

/**
 * Component is described here.
 *
 * @example ./ImageBox.examples.md
 */
const ImageBox = ({url, text, alt, size = "medium", boxColor = "black"}) => {
    return (
        <figure className={"image-container " + size + " " + boxColor}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

ImageBox.propTypes = {
    /**
     * Url of the image.
     */
    url: PropTypes.string.isRequired,
    /**
     * Text used to together with the image.
     */
    text: PropTypes.string.isRequired,
    /**
     * Alt text, a short description of the picture.
     */
    alt: PropTypes.string.isRequired,
    /**
     * Size of the image box.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Background color of the image box.
     */
    boxColor: PropTypes.oneOf(['transparent', 'black', 'white', 'red'])
};

export default ImageBox;