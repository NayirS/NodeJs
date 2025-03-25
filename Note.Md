# Notes NodesJS 

## 🔹 Typage  

- **Typage dynamique** :  
  - Détection du type à l'exécution, pas à la compilation.  
  - Impossible de détecter les erreurs de type avant la mise en production.  
  - Le type d'une variable change en fonction de son contenu.  

- **Typage statique** :  
  - Les incohérences de type peuvent être détectées à la compilation.  

---

## ⚙️ Configuration TypeScript  

### **`package.json` (scripts)**  
```json
"scripts": {
  "dev": "nodemon dist/index.js",
  "build": "npx tsc"
}
```

### **`tsconfig.json`**  
- Décommenter `"types": ["node", "jest"]` (mettre uniquement `["node"]` après test).  
- Décommenter `"outDir": "./dist"`.  

### **Commandes**  
1. Compiler le projet :  
   ```sh
   pnpm build
   ```
   - Un dossier `dist` apparaîtra.  
   - Une erreur peut survenir si `"types"` est mal configuré.  

2. Séparer deux terminaux :  
   - Un pour la compilation (`pnpm build`).  
   - Un pour l'exécution (`pnpm dev`).  

3. Charger les variables d'environnement dans `index.ts` :  
   ```ts
   import dotenv from 'dotenv';
   dotenv.config();
   ```

---

## 📝 Logs  
- Journal de bord des activités du serveur.  

---

# 🌐 API REST  

## **Définition**  
- Une API REST met à disposition une **ressource**.  

### **Formats de données**  
- **XML** : Langage balisé pour stocker des données.  
- **JSON** : Format plus courant et léger.  

### **Endpoints REST**  
- Structure des URL : une chaîne de caractères séparée par des `/`.  
- Chaque **méthode HTTP** permet d'accéder à une action précise sur une ressource.  

### **Principes REST**  
- **Stateless** : Pas de stockage de contexte entre deux requêtes.  
- **Idempotence** : Une même requête produit toujours le même effet (ex : `GET`).  

### **Requêtes HTTP courantes**  
| Méthode  | Description  |
|----------|-------------|
| **GET**  | Lire une ressource |
| **POST** | Créer une ressource |
| **PUT**  | Modifier/remplacer une ressource |
| **PATCH** | Modifier partiellement une ressource |
| **DELETE** | Supprimer une ressource |

### **Codes HTTP importants**  
| Code  | Signification |
|-------|-------------|
| `200` | Succès (OK) |
| `201` | Création réussie (POST) |
| `204` | Suppression réussie (DELETE) |
| `400` | Mauvaise requête (client) |
| `500` | Erreur serveur (non anticipée) |

---

#  Comparaison REST, GraphQL et gRPC  

| REST  | GraphQL  | gRPC  |
|-------|---------|------|
| API publiques | Interfaces complexes | Communication interne |
| Architecture simple | Clients variés | Microservices |
| Ressources distinctes | Requêtes imbriquées | Haute performance |
| Cache HTTP efficace | Évite le **overfetching** | Services en temps réel |

- **REST** : Standard mature, simple à mettre en place.  
- **GraphQL** : Plus flexible, mais plus complexe.  
- **gRPC** : Très performant, mais moins adapté au Web.  


Voici tes notes restructurées en **Markdown** :  

---

###  Tests avec Jest  

####  Pourquoi utiliser Jest ?  
- Permet de **repérer facilement les erreurs** dans le code.  
- Utile pour **tester notre JavaScript** et s'assurer que notre application fonctionne.  
- Particulièrement utile quand on travaille **seul**, pour identifier rapidement les problèmes.  

###  Mise en place d'une base de tests  
- On va **implémenter une base de tests** pour suivre l'avancement du projet.  
- Jest permet de **simuler le dialogue client-serveur**, utile pour tester notre API.  
- Il faut **aider Jest** à tester des fonctionnalités spécifiques comme les requêtes HTTP.  

### Tester une API avec Jest  
- Simulation des requêtes HTTP pour tester notre backend.  
- Vérification du bon fonctionnement des routes.  
- Test des réponses attendues pour chaque endpoint.  

web service 

user service reprend la listes des utilisateur dans la couche model (mvc)

mvc pour une api rest
séparation des préocuppations
maintenance accru 
testabilité améliorée 
scalabilité simplifié 
réutilisabilité du code

le controleur traite la requete et gere tout ça 
controlleur mvc = chef d'orchestre
 
 la logique metier permet de faire tout les opérations sur les objet métiers

 le service c'est la logique le repo c'est l'accès a la base
 models c'est ce qu'on va manipuler en javascript c'est l'equivalent de la table en sql
 mongodb est un systeme de stockage de données pas basé sur sql
 rdbms = nitiales de relational database management system 
 database tables rows columns

 Mongodb 
 database collections documents fields
 pour créer un type de données avec mongo on fait une collections 

 ecriver code model
 définit la strucure des données valider les données convertir entre formats définir les schémas 
 debase de données
 mongoz gere toute les connexion et requete 
 l'avantage ce quon manipule avec le code js et le meme en base