import React, {PropTypes} from 'react'


const Content = ({children}) => {
    return (<div id="content">
        {children}
    </div>)
}

Content.propTypes = {
    children: PropTypes.shape().isRequired
}

export default Content
