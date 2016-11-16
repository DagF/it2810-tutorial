import React from 'react'

import './home.scss'

const Home = () => {
    return (
        <div className="container">
            <figure className={"image-container large red"}>
                <img src={"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} alt={"Burrito cat"}/>
                <figcaption>{"What does a cat burrito taste like?"}</figcaption>
            </figure>
            <figure className={"image-container medium transparent"}>
                <img src={"http://animal-dream.com/data_images/monkey/monkey3.jpg"} alt={"Cute monkey"}/>
                <figcaption>{"Planet of the Monkeys"}</figcaption>
            </figure>


            <figure className={"image-container small white"}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/0/07/Giraffe08_-_melbourne_zoo.jpg"} alt={"Cute monkey"}/>
                <figcaption>{"There's a giraffe in my loft!"}</figcaption>
            </figure>

            <figure className={"image-container medium black"}>
                <img src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRToWlBIIT3JOGPvGMk7C7lseTY-GPI9tvK3tmeqHsvAVcI0r5lQw"} alt={"Cute monkey"}/>
                <figcaption>{"My horse is amazing!"}</figcaption>
            </figure>
        </div>
    )
};

export default Home