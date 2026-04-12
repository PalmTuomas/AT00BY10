# Software Testing Assignment - AT00BY10

Coverage Status](https://coveralls.io/repos/github/PalmTuomas/AT00BY10/badge.svg?branch=main)](https://coveralls.io/github/PalmTuomas/AT00BY10?branch=main)

Tämä projekti on osa ohjelmistotestauksen harjoitustyötä. Projektissa on toteutettu yksikkötestaus valmiille koodikirjastolle, pystytetty automaattinen CI-putki (GitHub Actions) ja integroitu testikattavuusraportointi (Coveralls).

##  Tekninen toteutus

* **Testaustyökalu:** [Jest](https://jestjs.io/)
* **Kääntäjä:** [Babel](https://babeljs.io/) (ES-moduulien tuki)
* **CI/CD:** GitHub Actions
* **Kattavuusraportointi:** Coveralls

##  Testitulokset

Projektin tavoitteena oli saavuttaa vähintään 60 % testikattavuus (lukuun ottamatta `.internal`-kansiota). Tämänhetkinen kattavuus on **n. 93 %**.

* **Testatut tiedostot:** `map.js`, `toInteger.js` (ja mahdolliset muut toteutetut testit).
* **Testaamatta jätetyt tiedostot:** Loput kirjaston tiedostot, jotka eivät kuuluneet tämän harjoituksen laajuuteen.
* **.internal-kansio:** Jätetty testauksen ulkopuolelle tehtävänannon mukaisesti.

## GitHub Actions Työnkulku

Työnkulku (`.github/workflows/main.yml`) suorittaa seuraavat vaiheet jokaisen push-komennon yhteydessä:
1.  Asentaa riippuvuudet (`npm install`).
2.  Ajaa yksikkötestit ja kerää kattavuusdatan (`npm test`).
3.  Lähettää raportin Coveralls-palveluun käyttäen turvallista `GITHUB_TOKEN`-tunnistetta.

##  Linkit

* **GitHub Actions lokit:** [Actions Tab](https://github.com/PalmTuomas/AT00BY10/actions)
* **Coveralls raportti:** [Coveralls.io](https://coveralls.io/github/PalmTuomas/AT00BY10)
* **Issue Tracker:** [Löydetyt bugit ja huomiot](https://github.com/PalmTuomas/AT00BY10/issues)

##  Final Verdict

Kirjasto on testatun osan osalta hyvässä vaiheessa, mutta ei täysin valmis tuotantoon. Testauksessa löytyi joitakin epäjohdonmukaisuuksia rajatapausten (kuten null-arvojen) käsittelyssä. Lisätietoja löytyy Issue-osiosta.
