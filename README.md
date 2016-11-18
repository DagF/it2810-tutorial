# Stilguide (Del 1 av 3)

Vi har på denne branchen satt opp et enkelt React prosjekt. For å innstallere kjør ```npm install```. For å kjøre
prosjektet kjør ```npm start```.

## Hvordan identifisere felles komponenter
Vi sa tidligere at det kan være vanskelig å identifisere hva som er en komponent som bør inngå som en felles komponent
og komponenter som ikke bør være det. Innen utvikling lærer en ofte at all kode skal skrives på en slik måte at det er
lett å gjenbruke den. Dette er ofte en god kjøreregel, men det kommer med en kostnad. Det tar tid og arbeid å gjøre en
komponent om til noe som kan fungere som en felles komponent. I artikkelen [The economics of reuse][1] diskuterer
Johannes Brodwall når det lønner seg å tilpasse en komponent for gjenbruk. Alternativet til å tilpasse en komponent for
gjenbruk er å duplisere koden og modifisere den til bruk et annet sted i koden. I denne artikkelen argumenterer Johannes
for at ved fjerde gang en komponent skal brukes lønner det seg å refakturere koden og tilpasse modulen for gjenbruk.
Vi tar derfor denne regelen som utgangspunkt, men legger til at i utvikling i React vil det oppstå situasjoner hvor
kode en skriver blir så komplisert at det er upraktisk å ikke dra kode ut i egne komponenter. Spørsmålet i slike
situasjoner blir da er dette en komponent en ser for seg vil bli brukt mye, i såfall kan det lønne seg å dra den ut som
en felles komponent med en gang. Hvis ikke holder det å dra koden ut i en egen komponent kun til bruk i komponenten en
jobber på.

## Eksempel
I eksempelkoden i dette reposotory viser vi en enkel komponent som blir brukt flere ganger. Vi skal i denne guiden jobbe
med å refakturere koden til en felles komponent og dokumentere den.

I vår ```Home``` komponent har vi følgende kode:

```jsx
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
```

Dette produserer:
![ImageBox components][image-box-components]

I dette eksempelet er det lett å se hvilke komponenter som bør dras ut som en felles komponent.
Det er helt klart behov for en bildeboks for å gjøre koden mer leselig og for å standardisere bildeboksene
slik at de har et mer uniformt design.

Vi ser på en enkelt bildeboks med koden:

```jsx
<figure className={"image-container large red"}>
    <img src={"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} alt={"Burrito cat"}/>
    <figcaption>{"What does a cat burrito taste like?"}</figcaption>
</figure>
```


Og resultatet av koden:

![ImageBox component][image-box-component]


I [del 2][2] ser vi på hvordan isolere koden ut i en egen komponent


[Del 1][1] tar for seg hvordan identifisere felles komponenter

[Del 2][2] tar for seg hvordan isolere felles komponenter

[Del 3][3] tar for seg hvordan dokumentere felles komponenter

[Ekstra][4] Inneholder noen ekstra eksempler på komponenter om er dokumentert

[style-guide-w-examples]: ./img/style-guide-w-examples.png

[1]: https://github.com/DagF/it2810-tutorial/blob/1-identify/README.md
[2]: https://github.com/DagF/it2810-tutorial/blob/2-extract/README.md
[3]: https://github.com/DagF/it2810-tutorial/blob/3-document/README.md
[4]: https://github.com/DagF/it2810-tutorial/blob/4-examples/README.md

[image-box-components]: ./img/image-box-components.png
[image-box-component]: ./img/image-box-component.png


[1]: http://johannesbrodwall.com/2014/03/24/the-economics-of-reuse/
