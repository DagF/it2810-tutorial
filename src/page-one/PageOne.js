import React from 'react'
import ImageBox from '../common/ImageBox/ImageBox'

import './page-one.scss'

const PageOne = () => {
    return <div className="container">
            <ImageBox
                    url="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                    alt="Burrito cat"
                    text="Lorem Ipsum..."
                    type="no-background"
                />
            </div>
};

export default PageOne
