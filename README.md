![SportSee](/Front-end/src/assets/logo.svg)

# SportSee 🏋️‍♀️📈

[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Farthurblanc.github.io%2FSportSee%2F)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Farthurblanc.github.io%2FSportSee%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=fr)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)

[Site live](https://arthurblanc.github.io/SportSee/) - <a href="#description-fr-">README en Français</a> - <a href="#en-description">English README</a>

## Description FR :

Ceci est un projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react)

> Intégrez des graphiques et des diagrammes avec React pour un tableau de bord d'analytics de sport.
> Vous Utilisez une API pour récupérer les données.
>
> #### Compétences évaluées :
>
> -   Assurer la qualité des données d'une application 👨‍💻
> -   Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript 📈
> -   Interagir avec un service Web 🌐
> -   Produire de la documentation technique pour une application 📝

### Situation (fictive) du projet :

Développeur chez “SportSee”, une startup dédiée au coaching sportif.

En pleine croissance, l’entreprise souhaite lancer une nouvelle version de la page profil de l’utilisateur. Cette page va permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

Mon rôle a été de développer le front-end de cette page de profil en utilisant React tout en respectant les maquettes Figma et les User Stories.

### Cahier des charges :

#### Contraintes techniques :

-   Priorité à la version Desktop :
    -   Pas besoin de version mobile et tablette.
    -   Le projet doit être lisible sur les écrans d’au moins 1024 par 780 pixels.
-   React :
    -   Séparation logique du code dans des composants réutilisables.
    -   Il faut intégrer des Proptypes pour chaque composant.
-   Utilisation de D3 ou de Recharts pour générer les graphiques est recommandé.
-   Données : Utilisation d’une API en faisant des calls HTTP sur le backend NodeJS fourni en utilisant Fetch ou Axios.
    -   Les calls doivent être réalisé en dehors des composants React.
-   Réaliser une documentation du projet.
    -   La documentation doit être réalisée en anglais.
    -   Les fonctions et les méthodes du projet doivent être documentées.
    -   Le fichier README ne doit comporter que les étapes d’installation ainsi que les prérequis du projet.

## Installation :

### Prérequis :

-   [Git](https://git-scm.com)
-   [Node](https://nodejs.org/en/) pour les commandes npm ou [Yarn](https://yarnpkg.com/) pour les commandes yarn

### Dépendances :

-   [React](https://reactjs.org): ^18
-   [React-router-dom](https://reactrouter.com/): ^6.3.0
-   [Sass](https://sass-lang.com/): ^1.49.11
-   `npm i sass` or `yarn add sass`
-   [Recharts](https://recharts.org/): ^2.1.9
-   `npm i recharts` or `yarn add recharts`
-   [Prop-types](https://www.npmjs.com/package/prop-types): ^15.8.1
-   `npm i prop-types` or `yarn add prop-types`

### Procédure d'installation :

Cloner le repository:

-   `git clone https://github.com/ArthurBlanc/SportSee`

### Installation et lancement du back-end :

1. Aller dans le dossier "Back-end"

2. Installer toutes les dépendances pour le back-end:

-   `npm install` ou `yarn`

3. Lancer le back-end sur le port 3000 (port par défaut):

-   `npm run dev` ou `yarn run dev`

### Installation et lancement du front-end :

1. Aller dans le dossier "Front-end"

2. Installer toutes les dépendances pour le front-end:

-   `npm install` ou `yarn`

3. Lancer le front-end:

-   `npm start` ou `yarn start`

Le front-end sera lancé à l'URL:
`http://localhost:80/SportSee`.

URL disponibles dans ce projet:

-   `http://localhost:80/SportSee`
-   `http://localhost:80/SportSee/profil/12`
-   `http://localhost:80/SportSee/profil/18`
-   `http://localhost:80/SportSee/settings`
-   `http://localhost:80/SportSee/community`

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [React 18](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook
-   [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [Recharts](https://recharts.org/) - Une bibliothèque de graphiques pour React
-   [Prop-types](https://www.npmjs.com/package/prop-types) - Un package utilisé pour documenter les types de propriétés prévus transmises aux composants React
-   [JSDoc](https://jsdoc.app/) - Générateur de documentation pour JavaScript
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [GitHub Pages](https://pages.github.com/) - Outil d’hébergement

## Auteur :

**Arthur Blanc** : [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

## Maquettes :

Lien des maquettes : https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1

---

## EN Description:

This is a project carried out as part of the Front-End JavaScript React Developer training program at [OpenClassrooms](https://openclassrooms.com/en/paths/517-javascript-react-developer).

> Create the consumer-facing dashboard of a sports analytics platform.
> Build graphs and charts with React and use an API to fetch data.
>
> #### Skills evaluated:
>
> -   Ensuring the data quality of an application 👨‍💻
> -   Develop advanced graphical elements using JavaScript libraries 📈
> -   Interact with a web service 🌐
> -   Produce technical documentation for an application 📝

### Project (fictional) situation:

I work as a developer at "SportSee", a startup dedicated to sports coaching.

As the company is growing, they want to launch a new version of the user profile page. This page will allow the user to track the number of sessions completed and the number of calories burned.

My role was to develop the front-end of this profile page using React, while adhering to the Figma mockups and User Stories.

### Specifications:

#### Technical Constraints:

-   Priority to the Desktop version:
    -   No need for mobile and tablet versions.
    -   The project must be readable on screens of at least 1024 by 780 pixels.
-   React:
    -   Logical separation of code into reusable components.
    -   Proptypes must be integrated for each component.
-   Use of D3 or Recharts to generate charts is recommended.
-   Data: Use an API by making HTTP calls on the provided NodeJS backend using Fetch or Axios.
    -   Calls must be made outside of React components.
-   Create project documentation.
    -   Documentation must be done in English.
    -   Functions and methods in the project must be documented.
    -   The README file should only contain installation steps and project prerequisites.

## Installation:

### Prerequisites:

-   [Git](https://git-scm.com)
-   [Node](https://nodejs.org/en/) for npm commands or [Yarn](https://yarnpkg.com/) for yarn commands

### Dependencies:

-   [React](https://reactjs.org): ^18
-   [React-router-dom](https://reactrouter.com/): ^6.3.0
-   [Sass](https://sass-lang.com/): ^1.49.11
-   `npm i sass` or `yarn add sass`
-   [Recharts](https://recharts.org/): ^2.1.9
-   `npm i recharts` or `yarn add recharts`
-   [Prop-types](https://www.npmjs.com/package/prop-types): ^15.8.1
-   `npm i prop-types` or `yarn add prop-types`

### Installation process:

Clone the repository :

-   `git clone https://github.com/ArthurBlanc/SportSee`

### Installing and launching Back-end:

1. Go in "Back-end" folder

2. Install all dependencies for Back-end:

-   `npm install` or `yarn`

3. Launch back-end on port 3000 (default port):

-   `npm run dev` or `yarn run dev`

### Installing and launching Front-end:

1. Go in "Front-end" folder

2. Install all dependencies for Front-end:

-   `npm install` or `yarn`

3. Launch front-end:

-   `npm start` or `yarn start`

Front-end will launch at URL:
`http://localhost:80/SportSee`.

URL availables in this project:

-   `http://localhost:80/SportSee`
-   `http://localhost:80/SportSee/profil/12`
-   `http://localhost:80/SportSee/profil/18`
-   `http://localhost:80/SportSee/settings`
-   `http://localhost:80/SportSee/community`

## Built With:

-   [Visual Studio Code](https://code.visualstudio.com/) - Text editor
-   [Sass](https://sass-lang.com/) - CSS preprocessor
-   [React 18](https://reactjs.org/) - Free and open-source JavaScript library developed by Facebook
-   [Create React App](https://create-react-app.dev/) - Toolkit created by Facebook, which is the reference for initiating a React project
-   [React Router V6](https://reactrouter.com/) - Routing library for React
-   [Recharts](https://recharts.org/) - A charting library for React
-   [Prop-types](https://www.npmjs.com/package/prop-types) - A package used to document the intended types of properties passed to React components
-   [JSDoc](https://jsdoc.app/) - Documentation generator for JavaScript
-   [GitHub](https://github.com/) - Version control tool
-   [GitHub Pages](https://pages.github.com/) - Hosting tool

## Author:

**Arthur Blanc**: [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

## Mockups:

Link to mockups: https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1
