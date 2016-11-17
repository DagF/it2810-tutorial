# Stilguide (Del 3 av 3)


## Hvordan dokumentere felles komponenter
Vi har nå isolert komponenten vår. Dette i seg selv gir ikke mye ekstra verdi. For å gi komponenten vår mer verdi
trenger vi å legge til en beskrivelse, prop types og eksempler.

Vi bruker i denne tutorialen npm modulen ```react-styleguidist```. Den genererer en stilguide fra vår beskrivelse,
proptypes og eksempler.

### Hvordan legge til beskrivelse
Det å legge til en beskrivelse gjøres på samme måte en er vant med i for eksempel JavaDoc.
Vi har oppdatert koden under med en enkel beskrivelse.

```jsx
const ImageBox = ({url, text, alt, type="inline"}) => {
    return (
        <figure className={"image-box image-box-" + type }>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};
```

Vi ser nå at det er flere verdier i komponenten som vil være forskjellige for hver enkelt instanse.
Vi bytter derfor ut verdiene inne i ```{}``` ut med beskrivende variabler og deklarerer som paramtere i komponenten.
```jsx
const ImageBox = ({url, text, alt, size, boxColor}) => {
    return (
        <figure className={"image-box " + size + " " + boxColor}>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};
```

![ImageBox component][image-box-component]



[image-box-component]: ./img/image-box-component.png


[1]: http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css
