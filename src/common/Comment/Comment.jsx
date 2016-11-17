import React, {PropTypes} from 'react'
import './comment.scss'

/**
 * Component is described here.
 *
 * @example ./Comment.examples.md
 */
const Comment = ({imageUrl, text, username, date}) => {
    return (
            <div className="comment">
                <div className="comment-image">
                    <img src={imageUrl} alt={username}/>
                </div>
                <div className="comment-text">
                    <div className="comment-username">
                        <a>{username}</a>
                        <p>Posted: {date}</p>
                    </div>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
    )
};

Comment.propTypes = {
    /**
     * Url of the user's profile image.
     */
    imageUrl: PropTypes.string.isRequired,
    /**
     * Text of the comment.
     */
    text: PropTypes.string.isRequired,
    /**
     * Username of the user.
     */
    username: PropTypes.string.isRequired,
    /**
     * The date the comment was posted.
     */
    date: PropTypes.string.isRequired
};

export default Comment;