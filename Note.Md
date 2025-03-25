Voici tes notes restructurées en **Markdown** pour plus de clarté et d'organisation :  

---

#  **Notes Node.js & API REST**

##  **Typage**
### **Typage dynamique**
- Détection des types **à l'exécution**, pas à la compilation.
- Impossible de détecter les erreurs avant la mise en production.
- Les types changent en fonction du **contenu des variables**.

### **Typage statique**
- Les erreurs de type peuvent être **détectées à la compilation**.
- Améliore la **sécurité** et la **maintenabilité** du code.

---

## ⚙️ **Configuration TypeScript**
### **Scripts dans `package.json`**
```json
"scripts": {
  "dev": "nodemon dist/index.js",
  "build": "npx tsc"
}
```

### **Fichier `tsconfig.json`**
- Décommenter `"types": ["node", "jest"]` (mettre uniquement `["node"]` après test).
- Décommenter `"outDir": "./dist"`.

### **Commandes**
1. Compiler le projet :  
   ```sh
   pnpm build
   ```
   - Créera un dossier `dist`.
   - Une erreur peut survenir si `"types"` est mal configuré.

2. Lancer deux terminaux :  
   - Un pour la **compilation** (`pnpm build`).
   - Un pour l'**exécution** (`pnpm dev`).

3. Charger les variables d'environnement dans `index.ts` :
   ```ts
   import dotenv from 'dotenv';
   dotenv.config();
   ```

---

### **Logs**
- **Journal de bord** des activités du serveur.
- Utile pour le **debugging** et le suivi des erreurs.

---

#  **API REST**
## **Définition**
- Une API REST met à disposition une **ressource** accessible via des requêtes HTTP.

### **Formats de données**
- **XML** : Langage balisé pour structurer des données.
- **JSON** : Format léger et plus utilisé.

### **Endpoints REST**
- Une **URL** est une **chaîne de caractères** séparée par des `/`.
- Chaque **méthode HTTP** correspond à une action.

### **Principes REST**
- **Stateless** : Pas de stockage de contexte entre requêtes.
- **Idempotence** : Une requête produit toujours le même effet.

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

#  **Comparaison REST, GraphQL et gRPC**
| REST  | GraphQL  | gRPC  |
|-------|---------|------|
| API publiques | Interfaces complexes | Communication interne |
| Architecture simple | Clients variés | Microservices |
| Ressources distinctes | Requêtes imbriquées | Haute performance |
| Cache HTTP efficace | Évite le **overfetching** | Services en temps réel |

- **REST** : Standard mature, facile à mettre en place.
- **GraphQL** : Plus flexible, mais plus complexe.
- **gRPC** : Très performant, mais moins adapté au Web.

### **Tests avec Jest**
## **Pourquoi utiliser Jest ?**
- Permet de **repérer rapidement** les erreurs dans le code.
- Vérifie **l'avancement du projet** grâce aux tests.
- Simule des requêtes HTTP pour **tester une API**.

### **Tester une API avec Jest**
- Simule les **requêtes HTTP**.
- Vérifie les **réponses attendues** pour chaque endpoint.

---

### **Architecture MVC pour une API REST**
#### **Pourquoi utiliser MVC ?**
- **Séparation des préoccupations**.
- **Maintenance accrue**.
- **Testabilité améliorée**.
- **Scalabilité simplifiée**.
- **Réutilisabilité du code**.

### **Rôles principaux**
| Composant  | Rôle  |
|------------|------|
| **Modèle** | Représente les données (équivalent des tables SQL). |
| **Vue** | Gère l'affichage (non utilisé pour une API REST). |
| **Contrôleur** | **Orchestre** la logique métier et traite les requêtes. |

** Exemple :**  
- Le **contrôleur** traite la requête.
- Il appelle la **logique métier**.
- Il utilise le **modèle** pour accéder aux données.

---

### **Bases de données avec MongoDB**
#### **Comparaison SQL vs NoSQL**
| SQL (RDBMS)  | NoSQL (MongoDB)  |
|--------------|----------------|
| **Bases relationnelles** | **Collections de documents** |
| **Tables** | **Collections** |
| **Lignes** | **Documents** |
| **Colonnes** | **Champs** |

#### **Modélisation des données dans MongoDB**
- **Modèle** : Définit la structure des données.
- **Validation** : Vérifie les types et contraintes.
- **Conversion** : Gère les formats entre l’application et la base.

## **Mongoose**
- Gère la connexion et les requêtes MongoDB en JavaScript.
- **Avantage** : La structure des données en **JavaScript** est **identique** à celle de la base.
