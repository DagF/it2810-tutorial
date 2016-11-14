import React from 'react'
import ImageBox from '../common/ImageBox/ImageBox'

import './home.scss'

const Home = () => {
    return (
        <div className="container">

            <ImageBox url="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                      alt="Burrito cat"
                      text="What does a cat burrito taste like?"
                      goTo="/PageOne"
                      type="no-background"/>

            <ImageBox url="http://animal-dream.com/data_images/monkey/monkey3.jpg"
                      alt="Cute monkey"
                      text="MONKEY MONKEY MONKEY MONKEY"
                      goTo="/PageTwo"
                      type="death big"/>

            <ImageBox url="http://animal-dream.com/data_images/monkey/monkey3.jpg"
                      alt="Cute monkey"
                      text="MONKEY MONKEY MONKEY MONKEY"
                      goTo="/PageTwo"
                      type="important small"/>

            <ImageBox url="http://animal-dream.com/data_images/monkey/monkey3.jpg"
                      alt="Cute monkey"
                      text="MONKEY MONKEY MONKEY MONKEY"
                      goTo="/PageTwo"
                      type="death"/>
        </div>
    )
};

export default Home