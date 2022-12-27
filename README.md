# Projet de formation

## Instructions :

- Notre objectif est de construire un prototype fonctionnel d'un nouveau site web que nous pourrons présenter à FishEye lors de notre prochaine réunion avec les clients.
- Fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype.
- Continuer le code déjà existant
- Comme l'a mentionné le client lors de la réunion de lancement, sa priorité absolue est l'accessibilité.
- Construire le site conformément aux exigences d'accessibilité indiquées dans mes notes.
- Faire une démonstration de la navigation du site au moyen du clavier pour qu’on s’assure qu'il est utilisable par les lecteurs d'écran.
- Utiliser un pattern Factory Method, ça sera idéal pour créer les media en distinguant les vidéos des photos.

## Les informations forunies :

- Les notes de réunions (disponible dans ./document/Notes+de+reunion.pdf)
- Les maquettes (disponibles dans ./documents/figma00X.jpg)
- Des exemples de photos (disponibles dans ./Sample Photos/...)
- Des exemples de format JSON pour créer les pages (disponibles dans ./data/photographers.json)
- Les étapes à suivre détaillées (disponibles dans ./documents/Etapes+cles.pdf)

## Les Etapes :

- Prendre en main les éléments, la maquette et
  la base de code
- Importer les datas
- Intégrer la page d'accueil
- Gérer la navigation entre la page accueil et la
  page photographe
- Afficher le contenu statique de la page
  photographe
- Créer la modale de contact
- Gérer les médias de la Lightbox
- Afficher et gérer les likes
- Créer le système de tri
- Vérifier le code avec un linter

## Les design patterns :

Il existe trois grands types de design patterns :

- Les Creational Design Patterns qui représentent tous les design patterns dédiés à la création d’objets. On y trouvera le Constructor Pattern, le Factory Pattern, etc. ;

- Les Structural Design Patterns qui permettent de gérer et d’assembler des objets dans des structures plus grandes. Vous y trouverez, par exemple, l’Adapter Pattern et le Decorator Pattern ;

- Et enfin les Behavioral Design Patterns qui correspondent à la communication entre les objets. On y trouve, par exemple, l'Observable Pattern et les State Patterns.

### Attention :

- Un design pattern est relatif à la création, la manipulation et/ou la communication entre un ou plusieurs objets. Dans ce cas, vous travaillez sur un sujet assez précis : la communication avec une API, par exemple.

- Un design d’architecture est un ensemble de règles et de conventions pour le design de l’application elle-même, qu’elle soit front-end ou back-end... Par exemple, quelle partie du code s’occupe de gérer les données, quelle partie s’occupe de les afficher, etc.
