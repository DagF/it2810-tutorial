import React, {PropTypes} from 'react'
import './imageBox.scss'

/**
 * Component is described here.
 *
 * @example ./ImageBox.examples.md
 */
const ImageBox = ({url, text, alt, size = "medium", boxColor = "transparent"}) => {
    return (
        <figure className={"image-container " + size + " " + boxColor}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};

ImageBox.propTypes = {
    url: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['large', 'small']),
}

export default ImageBox;