# Stilguide (Introduksjon)
Hvordan identifisere, isolere og dokumentere felles komponenter i en applikasjon på en måte som gjør komponenten til en
levende stilguide.

I denne guiden skal vi vise hvordan du kan identifisere, isolere og dokumentere felles komponenter for å lage en
stilguide. Guiden er delt inn i 3 deler, for å bla mellom delene bytt branch til branchen som starter på 1, 2 eller 3.

Stilguiden vi skal lage blir seende ut som følger:

![ImageBox components][style-guide-w-examples]


For de som er interessert i noen bedre og mer omfattende eksempler på stilguider:

* [Semantic UI Components for React](http://hallister.github.io/semantic-react/)
* [Bulma Components](http://bokuweb.github.io/re-bulma/)

##Introduksjon

Utvikling i team er utfordrende. Det er mange typer aktører, designere, utviklere, kunder, teamledere. Etterhvert som
applikasjonen vokser vil gjerne samme type komponenter brukes flere steder i applikasjonen. Ofte skjer dette uten at
det er planlagt, noe som kan føre til at komponentene blir implementert flere ganger av forskjellige utviklere på
forskjellige måter. Dette fører til duplisert arbeid, inkonsistente grensesnitt og frustrerer hele teamet og kunde.


Med felles komponent mener vi en komponent som er brukt flere steder i en applikasjon som anses for å være en av
grunnsteine i applikasjonen. Størrelsen og type kan ha stort span.

For å unngå dette er det fornuftig å dra komponenter som brukes flere steder i applikasjonen ut som såkalte felles
komponenter. Dette er heller ikke helt problemfritt da det kan være vanskelig å avgjøre hva som er felles komponenter.
Vi vil diskutere dette mer senere. Et annet problem med å dra komponenter ut er at det det kan være vanskelig å vite
hvordan en komponent skal brukes og hva den skal brukes til. Dette kan føre til at to like komponenter implementeres
fordi det ikke kommer tydelig frem at det alt fantes en komponent som passet. Utviklere har også en tendens til å se en
komponent som minner om det de trenger og utvide den til å passe til sitt bruksområde og i prosessen lage
franken-komponenter som er vanskelig å bruke, brekker lett og gjør fremtidige endringer vanskelig.

En stilguide hjelper til med flere av disse utfordringene da det oppfordrer til å dokumentere komponenten og vise
eksempelbruk. En får også et eget sted hvor en kan se oversikt over komponenter som finnes og gir utviklere, designere,
teamledere og kunder at vokabular for å snakke om utformingen av applikasjonen. Det er mye lettere for en kunde å
utforske tilgjengelige komponenter som en visuell reppresentasjon enn å måtte sette seg inn i kode eller å prøve å
identifisere en komponent i en nettleser. En stilguide blir en egen liten wiki for komponentene som er tilgjengelig i
applikasjonen.

[Del 1][1] tar for seg hvordan identifisere felles komponenter

[Del 2][2] tar for seg hvordan isolere felles komponenter

[Del 3][3] tar for seg hvordan dokumentere felles komponenter

[Ekstra][4] Inneholder noen ekstra eksempler på komponenter om er dokumentert

[style-guide-w-examples]: ./img/style-guide-w-examples.png

[1]: https://github.com/DagF/it2810-tutorial/blob/1-identify/README.md
[2]: https://github.com/DagF/it2810-tutorial/blob/2-extract/README.md
[3]: https://github.com/DagF/it2810-tutorial/blob/3-document/README.md
[4]: https://github.com/DagF/it2810-tutorial/blob/4-examples/README.md
