## Sauvergarde des publications Facebook d'un utilisateur dans mongoDB avec node JS + express JS

### Lancer le projet sur local
-   Installer les packages:

```js
   npm  install
```

-   Créer un compte développeur sur [developers.facebook.com](https://developers.facebook.com/)

-   API à utiliser pour fetcher les publications Facebook sur votre clients API et les sauvegarder dans mongoDB:
```bash
   http://localhost:8000/posts/fetchAPI
```

-   Entrez dans le body de votre clients API en JSON les champs : userID et access_token

-   Remplacer dans le fichier .env par votre URI l' URI de mongoDB en local et votre PORT

- Lancer le serveur

```js
    npm run server
```
fait avec ❤️ par kiritoEM
