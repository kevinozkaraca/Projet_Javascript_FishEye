# Projet de formation

## Instructions :

- Notre objectif est de construire un prototype fonctionnel d'un nouveau site web que nous pourrons présenter à FishEye lors de notre prochaine réunion avec les clients.
- Fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype.
- Continuer le code déjà existant
- Comme l'a mentionné le client lors de la réunion de lancement, sa priorité absolue est l'accessibilité.
- Construire le site conformément aux exigences d'accessibilité indiquées dans mes notes.
- Faire une démonstration de la navigation du site au moyen du clavier pour qu’on s’assure qu'il est utilisable par les lecteurs d'écran.
- Utiliser un pattern Factory Method, ça sera idéal pour créer les media en distinguant les vidéos des photos.

## Les informations fournies :

- Les notes de réunions (disponible dans ./document/Notes+de+reunion.pdf)
- Les maquettes (disponibles dans ./documents/figma00X.jpg)
- Des exemples de photos (disponibles dans ./Sample Photos/...)
- Des exemples de format JSON pour créer les pages (disponibles dans ./data/photographers.json)
- Les étapes à suivre détaillées (disponibles dans ./documents/Etapes+cles.pdf)

## Les Etapes :

- Prendre en main les éléments, la maquette et la base de code
- Importer les datas
- Intégrer la page d'accueil
- Gérer la navigation entre la page accueil et la page photographe
- Afficher le contenu statique de la page photographe
- Créer la modale de contact
- Gérer les médias de la Lightbox
- Afficher et gérer les likes
- Créer le système de tri
- Vérifier le code avec un linter

## Fonctionnalités à mettre en place :

### Page d'accueil :

- Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.
- Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.

### Page des photographes :

(le contenu de la page sera généré de manière dynamique en fonction du photographe)

- Affiche une galerie des travaux du photographe.
- Les photographes peuvent montrer à la fois des photos et des vidéos.
  - Dans le cas des vidéos, montrer une image miniature dans la galerie.
- Chaque média comprend un titre et un nombre de likes.
  - Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté.
  - Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias.aw
- Les médias peuvent être triés par popularité ou par titre.
- Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox :
  - Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
  - Des boutons de navigation permettent de passer d'un élément média à l'autre dans la lightbox (les utilisateurs peuvent cliquer sur ces boutons pour naviguer).
  - Les touches fléchées du clavier permettent également de naviguer entre les médias dans la lightbox.
- Afficher un bouton pour contacter le photographe.
  - Le formulaire de contact est une modale qui s'affiche par-dessus le reste.
  - Il comprend des champs pour les noms, l'adresse électronique et le message.
  - Plus tard, le bouton de contact enverra un message au photographe. Pour l'instant, seulement afficher le contenu des trois champs dans les logs de la console.

## Accessibilité :

- Toutes nos photos doivent comporter des descriptions textuelles
- De plus, l'utilisateur doit pouvoir utiliser les commandes du clavier pour naviguer sur le site, comme les touches fléchées de la lightbox
- Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que possible, au lieu de mettre des éléments "div" et "span" partout.
- Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA pour décrire ce qu'il fait.
- Les images doivent présenter un attribut “alt”. Utilisez le titre des photos pour remplir cet attribut, et le nom du photographe dans le cas d’une photo de profil de photographe.
- Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit conforme aux WCAG).
- Toute la gestion des événements (par exemple, les clics et les pressions au clavier) doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).
- Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que représente l'utilisation du site pour une personne malvoyante.

## Contrainte :

- Le code est séparé en différents fichiers (HTML, CSS, JavaScript).
- ESLint est utilisé (avec les paramètres par défaut) pour garantir que le code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE VSCode.
- Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et les fonctionnalités obsolètes ne sont pas utilisées.
- Le code est lisible. Il faudra s'assurer que les variables et fonctions ont un nom qui ont un sens, et commenter le code lorsque le nom
  n'indique pas explicitement ce qu'il se passe

## Avance du projet :

- Commencement du projet 08/01/2023
- Mise en place d'ESlint
- Recupération de la data dans le fichier JSON
- Affichage des photos d'ID des photographes
