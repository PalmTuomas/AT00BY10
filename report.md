# Software Testing Report: AT00BY10

1. Approach and Implementation
Tässä projektissa toteutettiin yksikkötestaus valikoiduille kirjaston funktioille käyttäen **Jest**-testikehystä. Koska kirjasto hyödyntää ES-moduuleita (`import`/`export`), projektissa käytettiin **Babelia** koodin kääntämiseen testiajon aikana. 

CI/CD-putki toteutettiin **GitHub Actionsilla**, joka automatisoi testien ajon jokaisen push-komennon yhteydessä. Testikattavuusraportit lähetetään automaattisesti **Coveralls**-palveluun, jotta koodin laatua voidaan seurata visuaalisesti.

2. Configuration
### Package.json
Testit ajetaan komennolla `npm test`, joka suorittaa Jestin kattavuusraportin kanssa.

3. Test Results and Coverage
Tavoitteena oli saavuttaa vähintään 60 % kattavuus. Projektissa saavutettiin 92.85 % kattavuus testatuille tiedostoille.
Testatut tiedostot: src/map.js, src/toInteger.js, src/add.js.
Testaamatta jätetyt tiedostot: Muut kirjaston tiedostot (esim. src/filter.js), koska harjoituksen laajuus oli rajattu.
.internal-kansio: Jätetty pois testauksesta ja kattavuusraporteista tehtävänannon mukaisesti.

![testit](https://github.com/user-attachments/assets/ea9971ae-679c-4941-8148-0d74e2c00f9c)

4. GitHub Actions and Coveralls
CI-putki toimii virheettömästi. Jokainen commit suorittaa testit onnistuneesti ja päivittää Coveralls-raportin.

![GitHub-Actions](https://github.com/user-attachments/assets/d49b49ac-0f4b-4a03-8ba4-0a054b5672e0)

![coveralls](https://github.com/user-attachments/assets/a068f0d5-b495-48da-83d3-1e9a5edb7562)


Linkki raporttiin: https://coveralls.io/github/PalmTuomas/AT00BY10

5. Issue Reports
Testauksen aikana löytyi seuraavat huomiot/virheet:
toInteger.js: Funktio palauttaa erittäin suuren numeron Infinityn sijasta, mikä voi aiheuttaa ongelmia laskutoimituksissa.
map.js: Funktio palauttaa tyhjän taulukon, jos syöte on null.


6. Final Verdict (Production Readiness)
Mielestäni kirjasto ei ole vielä valmis tuotantoon (production ready) seuraavista syistä:

Vaikka testikattavuus on korkea, testauksessa löytyi epäloogisuuksia rajatapausten (edge cases) käsittelyssä.
.internal-kansio on täysin testaamatta, ja koska kirjaston julkiset funktiot tukeutuvat niihin, taustalogiikan luotettavuutta ei voida taata.

Kirjasto vaatii kattavamman testauksen kaikille moduuleille ja löydettyjen bugien korjaamisen ennen julkaisua.
