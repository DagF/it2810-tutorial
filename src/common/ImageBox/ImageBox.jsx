import React, {PropTypes} from 'react'
import './imageBox.scss'


/**
 * Component is described here.
 *
 * @example ./ImageBox.examples.md
 */
const ImageBox = ({url, text, alt, type}) => {
    return (
        <figure className={"image-container " + type}>
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