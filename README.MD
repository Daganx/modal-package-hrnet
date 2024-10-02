# modal-package-daganx
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
## Description  : 
Une modale réutilisable et personnalisable pour vos projets React. Ce composant permet d'afficher une fenêtre modale avec un **titre personnalisable**, **un bouton de fermeture** et **un contenu personnalisé** grâce à la prop spéciale `children`.
## Installation : 
1. Installation du package :
```
npm i modal-package-daganx
```
## Utilisation : 
Voici comment utiliser la modale dans un projet React :
1.  Importer le composant `Modal` dans votre fichier React.
2.  Utiliser les props `isOpen`, `onClose`, `title`, et `children` pour personnaliser la modale.

### Props

-   **`isOpen`** _(bool)_ : Contrôle l'état d'ouverture de la modale. Si `true`, la modale s'affiche. Si `false`, elle reste cachée.
-   **`onClose`** _(function)_ : Fonction de rappel à exécuter lorsque l'utilisateur ferme la modale (par exemple, lorsqu'il clique sur le bouton de fermeture).
-   **`title`** _(string)_ : Le titre affiché dans l'en-tête de la modale.
-   **`children`** _(React node)_ : Le contenu personnalisé de la modale. Tout ce que vous placez entre les balises `<Modal>` sera rendu dans le corps de la modale.

## Exemple d'utilisation : 
Exemple de personnalisation :
```
<Modal isOpen={isOpen} onClose={handleClose} title="Exemple">
  <p>Voici du contenu personnalisé !</p>
  <button onClick={handleClose}>Fermer</button>
</Modal>
```

## Personnalisation du style :
La modale est stylisée via le fichier `Modal.css`. Vous pouvez personnaliser les styles en modifiant ce fichier ou en ajoutant vos propres classes CSS.

## Github : 

Retrouvez également le code sur mon github : 
https://github.com/Daganx/modal-package-hrnet
Ainsi que mes autres projets : 
https://github.com/Daganx