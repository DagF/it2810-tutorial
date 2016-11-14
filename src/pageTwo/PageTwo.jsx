
import React from 'react'
import ImageBox from '../common/ImageBox/ImageBox.jsx'
import './pageTwo.scss';


const PageTwo = () => {
    return <div className="container">
        <ImageBox
            url="http://animal-dream.com/data_images/monkey/monkey3.jpg"
            alt="Cute monkey"
            text="MONKEY MONKEY MONKEY MONKEY"
            type="no-background"
        />
        </div>
};

export default PageTwo;

