# Stilguide (Del 1 av 3)
Hvordan identifisere, isolere og dokumentere felles komponenter i en applikasjon på en måte som gjør komponenten til en
levende stilguide.

For del 2 og 3 bytt branch til branch som starter med 2 og 3.

Vi har på denne branchen satt opp et enkelt React prosjekt. For å innstallere kjør ```npm install```. For å kjøre
prosjektet kjør ```ǹpm start```.

## Hvordan identifisere felles komponenter
### Introduksjon
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
utforkse tilgjengelige komponenter i som en visuell reppresentasjon enn å måtte sette seg inn i kode eller å prøve å
identifisere en komponent i en nettleser. En stilguide blir en egen liten wiki for komponentene som er tilgjengelig i
applikasjonen.


### Hvordan identifisere felles komponenter
Vi sa tidligere at det kan være vanskelig å identifisere hva som er en komponent som bør inngå som en felles komponent
og komponenter som ikke bør være det. Innen utvikling lærer en ofte at all kode skal skrives på en slik måte at det er
lett å gjenbruke den. Dette er ofte en god kjøreregel, men det kommer med en kostnad. Det tar tid og arbeid å gjøre en
komponent om til noe som kan fungere som en felles komponent. I artikkelen [The economics of reuse][1] diskuterer
Johannes Brodwall når det lønner seg å tilpasse en komponent for gjennbruk. Alternativet til å tilpasse en komponent for
gjenbruk er å duplisere koden og modifisere den til bruk et annet sted i koden. I denne artikkelen argumenterer Johannes
for at ved fjerde gang en komponent skal brukes lønner det seg å refakturere koden og tilpasse modulen for gjenbruk.
Vi tar derfor denne regelen som utgangspunkt, men legger til at i utvikling i React vill det oppstå situasjoner hvor
kode en skriver blir så komplisert at det er upraktisk å ikke dra kode ut i egne komponenter. Spørsmålet i slike
situasjoner blir da er dette en komponent en ser for seg vil bli brukt mye, i såfall kan det lønne seg å dra den ut som
en felles komponent med en gang. Hvis ikke holder det å dra koden ut i en egen komponent kun til bruk i komponenten en
jobber på.

### Eksempel
I eksempelkoden


[1]: http://johannesbrodwall.com/2014/03/24/the-economics-of-reuse/
