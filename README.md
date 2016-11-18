# Stilguide (Del 3 av 3)


## Hvordan dokumentere felles komponenter
Vi har nå isolert komponenten vår. Dette i seg selv gir ikke mye ekstra verdi. For å gi komponenten vår mer verdi
trenger vi å legge til en beskrivelse, prop types og eksempler.

For å generere en stilguide benytter vi oss av npm modulen```react-styleguidist``` eller [React Styleguidist][5]. Denne bruker beskrivelsen, proptypes og eksempler til å lage en interaktiv stilguide hvor man kan lese om og teste de ulike komponentene.

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

For å legge til eksempler oppdaterer vi beskrivelsen av komponenten med en @example:

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
    text={"What does a cat burrito taste like?"}
    alt={"Burrito cat"}
/>
'''
```

NB! ' er brukt i stedenfor ` i dette eksempelet for å få markdown på denne siden til å rendre.

Dette gir:

![ImageBox styleguide with exampels][style-guide-w-examples]


[Del 1][1] tar for seg hvordan identifisere felles komponenter

[Del 2][2] tar for seg hvordan isolere felles komponenter

[Del 3][3] tar for seg hvordan dokumentere felles komponenter

[Ekstra][4] Inneholder noen ekstra eksempler på komponenter om er dokumentert

[style-guide-w-examples]: ./img/style-guide-w-examples.png

[1]: https://github.com/DagF/it2810-tutorial/blob/1-identify/README.md
[2]: https://github.com/DagF/it2810-tutorial/blob/2-extract/README.md
[3]: https://github.com/DagF/it2810-tutorial/blob/3-document/README.md
[4]: https://github.com/DagF/it2810-tutorial/blob/4-examples/README.md

[5]: https://github.com/styleguidist/react-styleguidist

[style-guide-w-description]: ./img/style-guide-w-description.png
[style-guide-w-proptypes]: ./img/style-guide-w-proptypes.png
[style-guide-w-examples]: ./img/style-guide-w-examples.png
