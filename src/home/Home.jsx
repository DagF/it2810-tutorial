import React from 'react'
import ImageBox from '../common/ImageBox/ImageBox'

import './home.scss'

const Home = () => {
    return (
        <div className="container">

            <ImageBox url="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                      alt="Burrito cat"
                      text="What does a cat burrito taste like?"
                      type="no-background"/>

            <ImageBox url="http://animal-dream.com/data_images/monkey/monkey3.jpg"
                      alt="Cute monkey"
                      text="Planet of the Monkeys"
                      type="death big"/>

            <ImageBox url="https://upload.wikimedia.org/wikipedia/commons/0/07/Giraffe08_-_melbourne_zoo.jpg"
                      alt="Cute monkey"
                      text="There's a giraffe in my loft!"
                      type="important small"/>

            <ImageBox url="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRToWlBIIT3JOGPvGMk7C7lseTY-GPI9tvK3tmeqHsvAVcI0r5lQw"
                      alt="Cute monkey"
                      text="My horse is amazing!"
                      type="death"/>
        </div>
    )
};

export default Home