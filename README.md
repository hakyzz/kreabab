# Kreabab Shop/Konfigurator&nbsp; :burrito:

![alt text](https://i.imgur.com/cCC3Fuf.png "Kreabab")

![alt text](https://i.imgur.com/INmeWKZ.jpg "Kreabab")

Eine E-Commerce Order Applikation für eine Take Away Imbiss Bestellung.<br>
Der User steigt über das Produkt Sortiment in den Shop ein und kann eine beliebige Anzahl Produkte in den Warenkorb legen. Dem User steht dabei das fertige Produkt Sortiment zur Verfügung, oder er entscheidet sich dafür einen "Kebab" in dem Konfigurator selber zusammen zu stellen.<br>
<br>
Dieses Projekt ist im Rahmen der CAS FEE Weiterbildung an der HSR als sogenanntes Projekt 2 - Schulprojekt entstanden.
<br>
<br>
## Demo&nbsp; :desktop_computer:
[### Demo Link einfügen ###](https://www.google.com)
<br>
<br>


# Dokumentation
### Konzept / Design&nbsp; :art:

Konzept und Design ist Tablet First entstanden, da Applikation hauptsächlich auf einem solchen Device laufen wird. Das Konzept und der Umfang der Views wurde mittels Wireframes in Sketch aufgebaut.


| Prozess  | &nbsp; |
| :--- | :--- |
| ![](https://i.imgur.com/QfAQZ5h.jpg "01") | **1.** User Journey und Screens-Übersicht in Form von Mockup Screens |
| ![](https://i.imgur.com/ImXHbdF.jpg "02") | **2.** Wireframes und Design Prototyp mit Dummy Inhalten für Usability Tests |
| ![](https://i.imgur.com/UKs5EPD.jpg "03") | **3.** Detaildesign sowie Spezifikation und Slicing der Komponenten |

### Usability Test&nbsp; :scream:

Mit Hilfe des Screendesigns und einem rudimentären Prototyping Tool "InVision" wurde mit 4 Testpersonen Usability Test durchgeführt. Die Aufgabe war es:<br>
<br>
a) Ein Produkt in den Warenkorb legen und zum Checkout zu gelangen.<br>
b) Einen eigenen "Kebab" zu konfigurieren und in den Warenkorb zu legen.
<br><br>
[InVision Prototyp](https://invis.io/3VDD28R8E)
<br>
<br>
Bei beiden gestellten Aufgaben musste die Testperson den "Bestätigung" Screen erreichen. Der Test wurde begleitet durchgeführt, und die Testpersonen wurden aufgefordert "laut zu denken" und Entscheidungen für Klicks zu kommentieren. Das Feedback wurde anschliessend mittels Notizen festgehalten und ausgewertet.
<br>
<br>
![alt text](https://i.imgur.com/XWWl7eM.jpg "Kreabab")
<br>
#### Ergebnisse & Erkenntnisse
- 3 von 4 Personen hatten den "Bestätigung" Screen erreicht. (Die eine Person hatte den Einstieg in den Konfigurator nicht gefunden, durch einen Hint hat auch diese Person den Abschluss geschafft.)
- Das Design zeigte sogenannte "Dummy-Bilder", welche nicht der Wahrheit entsprachen, was für Alle Testpersonen verwirrend war. (Speziell das Dummy Bild um in den Konfigurator einzusteigen wurde nicht als solches erkannt.)
- Eine Person hat erwähnt sie erwarte eine Detailseite bevor Sie ein Produkt in den Warenkorb legen würde.
- Den Konfigurator fanden alle Intuitiv und einfach zu bedienen.
- Eine Person hat erst den Continue Button "Weiter zu…" nicht als solchen erkannt.


### Technologie&nbsp; :atom_symbol:

- Sass
- React (Create React App Boilerplate)
- Redux
- React Router Dom
- Json Server (REST API)

### Aufbau, Struktur und Komponenten&nbsp; :gear:

#### Views
:file_folder: &nbsp;Homepage<br>
:file_folder: &nbsp;Product Detail<br>
:file_folder: &nbsp;Konfigurator<br>
:file_folder: &nbsp;Shopping Cart<br>
:file_folder: &nbsp;Order Summery<br>

#### Module/Features

- [x] Produktübersicht<br>
- [x] Produkt Detailseite<br>
- [x] Filter (Kategorien)<br>
- [x] Konfigurator (3 Steps)<br>
- [x] Warenkorb<br>

# Setup
#### Installation

```
git clone https://github.com/hakyzz/kreabab.git
cd kreabab
npm install
```
#### Install JSON Mock Server globally

```
npm install -g json-server
```

#### App starten

```
npm run server
npm start
```

Started die App im Entwickler Modus.<br>
Die URL [http://localhost:3000](http://localhost:3000) wird automatisch geöffnet.

Die Seite wird bei Änderungen automatisch aktualisiert.<br>
Fehler werden direkt in der Console ausgegeben.

#### Weitere Scripts

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


# Fazit 🤔

#### Besonders gut gelöst
- UI und Usability
- Gute Herausforderung, dennoch nicht übernommen

#### Würden "wir" anders machen
- Mehr Zeit in den Konfigurator investieren
- Bessere visuelles Bildmaterial für die Toppings "Schichten" aufbereiten

#### Was haben "wir" gelernt
- React & Redux

<hr>

©2018 / [hakyzz](https://github.com/hakyzz) & [miloezger](https://github.com/miloezger/) :metal: