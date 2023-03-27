# Projet de formation

<img 
            class="IMGlink"
            src="assets\capture.jpg"
            alt="Capture du site "
            aria-label="Photo de l'équipe de travail"
            width= 90%
            align="center"
        />

</p>

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

- 1.  ### Prendre en main les éléments, la maquette et la base de code :

  - ✅ une compréhension des maquettes
  - ✅ une compréhension des livrables attendus
  - ✅ une connaissance du fonctionnement / du découpage des pages HTML / JS et CSS.
  - ✅ ⚠️ Attention à vous assurer que vous comprenez bien tout le code
    présent. N'hésitez pas à le modifier pour vous l'approprier

- 2.  ### Importer les datas :

  - ✅ Votre application qui récupère les données provenant du fichier
    JSON
  - ✅ Vous aurez votre fichier JSON dans datas. Vous devrez également
    mettre les images associées dans assets.
  - ✅ Ajouter fetch dans la fonction getPhotographers pour récupérer
    vos datas, et faire un console.log de ces datas
  - ✅ Retourner les datas
  - ✅ Modifier `scripts/factories/Photographer.js` pour récupérer les
    données nécessaires (id, tagline, city, etc.)

- 3.  ### Intégrer la page d'accueil :

  - ✅ Pour ce qui est du JS, vous trouverez un exemple de base de factory
    pattern qui a été fait pour photographerFactory dans
    scripts/factories/photographer.js. Vous devrez étendre cette factory
    function afin de générer tous les éléments nécessaires, et retourner
    les éléments du DOM associés.
  - ✅ Les éléments du DOM ainsi que le HTML et CSS devront être écrits
    afin d'assurer l'accessibilité : vous devrez surtout être vigilant sur les déclarations alt et aria-label.
  - ✅ Le début d'intégration CSS qui a été fait utilise flexbox et CSS grid,
    n'hésitez pas à jeter un œil à leur documentation.

- 4. ### Gérer la navigation entre la page accueil et la page photographe :

  - ✅ Votre page d'accueil finalisée
  - ❌ Le rapport AChecker de votre page
  - ✅ Le chargement des données correspondant à la page détaillée
  - ✅ Attention à l'accessibilité de vos liens (aria-label, gérer le focus, etc.)
  - ❌ Maintenant que vous avez finalisé votre page d'accueil, vous pouvez
    réaliser un rapport d'accessibilité avec un validateur d'accessibilité ou
    une checklist, et corriger votre code en fonction

- 5. ### Afficher le contenu statique de la page photographe :

  - ✅ Vous devrez réutiliser la fonction photographerFactory que vous
    aviez étendu à l'étape 3 pour afficher le contenu de votre page, ainsi
    que votre fonction permettant d'utiliser fetch.
  - ✅ Vous afficherez également les réalisations des photographes. Sur le
    modèle de la factory photographerFactory, vous devrez également
    créer une factory pour Media.
  - ✅ N'oubliez pas le petit encart qui affiche le tarif journalier du ou de la
    photographe affiché.
  - ✅ ⚠️ Dans la factory Media, vous devrez gérer les différents cas où le
    média est une image ou une vidéo.

- 6. ### Créer la modale de contact :

  - ✅ Une modale qui s'affiche lorsque l'on clique sur "Contactez-moi".
  - ❌ La base de la modale est déjà présente dans la codebase. Vous
    devrez y ajouter la gestion du formulaire ainsi que le style manquant.
  - ✅ Pas d’API complexe avec laquelle interagir ici pour envoyer le
    contenu de votre formulaire. Un simple console.log des données
    entrées par l'utilisateur suffira à montrer que vous maîtrisez votre
    sujet.
  - ❌ ⚠️ Attention : dans la codebase actuelle, rien n'a été fait pour gérer
    l'accessibilité de votre modale. Vous devrez gérer le focus sur toute la
    page, le role, l'aria-label, etc.

- 7. ### Gérer les médias de la Lightbox :

  - ✅ La LightBox qui s'affiche lorsque vous cliquez sur une photographie,
    et dans laquelle vous pouvez faire défiler les autres photographies. La
    LightBox se ferme au clic sur le bouton de fermeture.
  - ✅ Vous devrez gérer les images et les vidéos affichées.
  - ✅ ⚠️ Attention à bien gérer l'ouverture de la Lightbox, le défilement et la
    fermeture avec le clic souris, mais aussi avec le clavier. Pour cela, vous
    devrez utiliser des EventListeners et bien déclencher les actions
    correspondantes.
  - ❌ Comme pour les autres étapes, n'oubliez pas de bien déclarer les
    aria-label et le rôle de votre LightBox.

- 8. ### Afficher et gérer les likes :

  - ✅ Les photos et vidéos de la galerie pourront être likées.
  - ✅ L'encart en bas de page affiche maintenant le nombre total de likes
  - ✅ Vous pouvez gérer le nombre de likes total depuis votre factory
    photographerFactory.
  - ✅ Ici, il n'y a pas besoin de sauvegarder vos likes : si vous rafraîchissez la
    page, les likes ne doivent pas être sauvegardés.
  - ✅ L’utilisateur ne doit pouvoir liker chaque photo qu’une seule fois,
    attention à votre implémentation.

- 9. ### Créer le système de tri :

  - ✅ La page photographe finale intégrant la fonctionnalité de tri
  - Rapport d'accessibilité de la page photographe
  - ✅ Vous pouvez utiliser la méthode sort pour faire votre tri.
  - ❌ Une fois votre page photographe finalisée, vous pouvez également
    réaliser un rapport d'accessibilité avec un validateur d'accessibilité ou
    une checklist, et corriger votre code en fonction.
  - ✅ ⚠️ Attention à bien gérer l'accessibilité en permettant de sélectionner
    les éléments au clavier dans le menu déroulant.

- 10. ### Vérifier le code avec un linter :

  - La base de code terminée et vérifiée avec un linter de code
  - ✅ Vous devrez mettre en place votre linter de code (ESLint, JSLint, etc.)
  - ✅ Vous êtes autorisé à faire taire certains avertissements

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
