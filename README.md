** HUOM: Tämä repo on kopio alkuperäisestä reposta ennen kuin projekti vaihtoi suuntaa. Tämä repo näyttää, miltä projekti näyttä siinä vaiheessa, kun ideana oli hakea tapahtumat Facebookista. **

# Fb-opiskelijatapahtumat
Harjoitustyön aiheena oli tehdä kalenterisovellus, josta näkee yhdelllä vilkaisulla kaikki kunkin viikon opiskelijatapahtumat. Tiedot haetaan ainejärjestöjen ja osakuntien Facebook-sivuilta käyttäen Facebookin APIa.

[Linkki sovellukseen](http://fb-opiskelijatapahtumat.herokuapp.com)

[Käyttöohjeet](https://github.com/hanninev/fb-opiskelijatapahtumat/blob/master/Kayttoohjeet.md)

[Backendin repo](https://github.com/hanninev/fb-opiskelijatapahtumat-backend)


Projekti koki takaiskun, kun Facebook päivitti API:aan ja esti kaikki kyselyt tapahtumiin. Edes julkisten tapahtumien julkisia tietoja ei ole enää saatavilla. Backendistä on kommentoitu pois osa, joka teki pyynnöt Facebookille ja korvattu kovakoodatulla testidatalla, joka on samassa muodossa kuin se vielä projektin alussa tuli Facebookilta. Tapahtumia löytyy etenkin 7.5. alkavalla viikolla: http://fb-opiskelijatapahtumat.herokuapp.com/week/2018-05-07

Koska tapahtumia ei saanut haettua enää mistään järkevästi, projekti vaihtoi tässä vaiheessa suuntaa.
