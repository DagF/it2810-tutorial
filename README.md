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
/**
 * ImageBox component displaying a image and a text grouped.
 *
 * To be used as full page image, in text image or in-text link image.
 *
 * @param url url of the image
 * @param text text for the image
 * @param alt alternative textual description for the image
 * @param type ImageBox type
 * @returns {XML}
 * @constructor
 */
const ImageBox = ({url, text, alt, type="inline"}) => {
    return (
        <figure className={"image-box image-box-" + type }>
            <img src={url} alt={alt}/>
            <figcaption>{text}</figcaption>
        </figure>
    )
};
```

Dette genererer:<br />
![ImageBox styleguide][style-guide-w-description]


### Hvordan legge til proptypes
Videre legger vi til proptypes:

```
ImageBox.propTypes = {
    /**
     * url of the image
     */
    url: PropTypes.string.isRequired,
    /**
     * text for the image
     */
    text: PropTypes.string.isRequired,
    /**
     * alternative textual description for the image
     */
    alt: PropTypes.string.isRequired,
    /**
     * ImageBox type
     */
    type: PropTypes.oneOf(['inline', 'block', 'link'])
};
```

Dette gir:<br />
![ImageBox styleguide width proptypes][style-guide-w-proptypes]


### Hvordan legge til eksempler

Det som gjenstår nå er å legge til noen eksempler:

For å gjør dette oppdaterer vi beskrivelsen av komponenten med en @example:

```
/**
    * ImageBox component displaying a image and a text grouped.
*
* To be used as full page image, in text image or in-text link image.
*
* @param url url of the image
* @param text text for the image
* @param alt alternative textual description for the image
* @param type ImageBox type
* @returns {XML}
* @constructor
*
* @example ./ImageBox.examples.md
*/
```

Vi må også lage filen ```ImageBox.examples.md```:

```
ImageBox component

'''
<ImageBox
    url={"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}
    text={"Burrito cat"}
    alt={"What does a cat burrito taste like?"}
/>
'''
```

NB! ' er brukt i stedenfor ` i dette eksempelet for å få markdown på denne siden til å rendre.

Dette gir:

![ImageBox styleguide with exampels][style-guide-w-exampels]



[style-guide-w-description]: ./img/style-guide-w-description.png
[style-guide-w-proptypes]: ./img/style-guide-w-proptypes.png
[style-guide-w-exampels]: ./img/style-guide-w-exampels.png


[1]: http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css
