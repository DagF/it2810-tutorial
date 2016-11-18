# Stilguide (Del 2 av 3)


## Hvordan isolere felles komponenter
Vi har til nå identifisert en bildeboks vi ønsker å dra ut som en felles komponent.
I denne delen ser vi på hvordan dette kan gjøres.

### Hvordan strukturere felles komponenter
Når en skal isolere felles komponenter lønner det seg å plassere disse i en egen mappe. Vi velger å kalle denne
```common``` da resten av språket i koden er på engelsk. I denne mappen kommer hver av komponentene vi drar ut som
felles komponenter til å ha sin egen mappe. Vi oppretter altså en mappe ```ImageBox``` for vår bildebokskomponent.
I denne mappen flytter vi all kode som er relatert til bildeboksen vår, det vil si jsx og sass, vi oppretter derfor
filene ```ImageBox.jsx``` og ```ImageBox.scss```.




### Hvordan isolere komponenten
Vi starter med å flytte kode fra en av de dupliserte komponentene vi har inn i den nyopprettede filen
```/common/ImageBox/ImageBox.jsx```.

Den ser da slik ut:
```jsx
<figure className={"image-box large red"}>
    <img src={"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} alt={"Burrito cat"}/>
    <figcaption>{"What does a cat burrito taste like?"}</figcaption>
</figure>
```

Vi fortsetter med å gjøre den om til en komponent:
```jsx
import React from 'react'

const ImageBox = () => {
    return (
        <figure className={"image-box large red"}>
            <img src={"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} alt={"Burrito cat"}/>
            <figcaption>{"What does a cat burrito taste like?"}</figcaption>
        </figure>
    )
};

export default ImageBox;
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

Vi tester så at komponenten vår fungerer:

```jsx
...
import ImageBox from '../common/ImageBox/ImageBox'

const Home = () => {
    return (
        <div className="container">
            <ImageBox
                url="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                alt="Burrito cat"
                text="What does a cat burrito taste like?"
                size="large"
                boxColor="red"
            />
        </div>
    )
};
```

Dette gir:

![ImageBox component][image-box-component]


### Hvordan tilpasse en komponent til felles bruk
Vi har nå isolert komponenten. Vi må videre se på hvordan tilpasse komponenten for felles bruk. Komponenten har nå flere
parametere som kan gi utallige kombinasjoner av den samme komponenten. Noe av poenget med en stilguide er å begrense
muligheter. Vi bør derfor se på hvordan begrense mulige variasjoner av bildekomponenten vår og heller definere bestemte
design på forksjellige bruksområder for bildeboksen.

Vi bestemmer oss derfor for å fjerne muligheten til å forandre farge og størrelse og identifiserer i dette eksempelet 3 bruksområder for vår komponent: ```block```, ```inline``` og ```link```.
Vi ønsker også at den mest brukte type som er ```inline``` skal være default.
Vi oppdaterer komponenten vår til å ta hensyn til dette:

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

Her er det en ting flere kanskje stusser litt over, hvorfor har vi både klassen ```image-box``` og
```image-box-inline``` på det samme elementet, hadde det ikke holdt med ```image-box-inline``` eller
```image-box``` og ```inline```. Grunnen til at disse alternativene ikke er brukt er at ved å bruke de to klassene 
```image-box``` og ```image-box-inline``` oppnår vi bedre beskrivelse av komponenten. Vi ungår også uheldige 
endringer i en eventuell ```inline``` klasse som brukes over hele applikasjonen. ```image-box``` gir basen til 
alle bildebokser. ```image-box-inline``` utvider denne definisjonen med hvordan til bildeboks skal se ut når den
plasseres inline.


I [del 3][3] ser vi på hvordan vi kan dokumentere komponenten vi har isolert.


Skal se om det er mulig å dra inn noen poenger fra denne:
Er ikke helt sikker på hvorfor fremgangsmåten jeg har beskrevet skal være bedre, men er noe jeg ble fortalt i sommerjobben.


[Del 1][1] tar for seg hvordan identifisere felles komponenter

[Del 2][2] tar for seg hvordan isolere felles komponenter

[Del 3][3] tar for seg hvordan dokumentere felles komponenter

[Ekstra][4] Inneholder noen ekstra eksempler på komponenter om er dokumentert


[1]: https://github.com/DagF/it2810-tutorial/blob/1-identify/README.md
[2]: https://github.com/DagF/it2810-tutorial/blob/2-extract/README.md
[3]: https://github.com/DagF/it2810-tutorial/blob/3-document/README.md
[4]: https://github.com/DagF/it2810-tutorial/blob/4-examples/README.md

[image-box-component]: ./img/image-box-component.png
[style-guide-w-examples]: ./img/style-guide-w-examples.png

