# Mon super projet
##Setup

First rename the file env `env.enxample` to `env` and fill in the values.

typages dynamique : détecter le type a l'executions pas l'etapes de compilation pas capable de detecter les erreurs de type sans avoir mis en prod (type change en fonction du contenue de la variable)
typages : statique on peut prevoir c'est incohérence
"dev": "nodemon dist/index.js"
    "build" : "npx tsc"

    decommenter lignes types["node" , "jest"]
    dans tsconfig.json
    decommenter "outDir": "./dist",

    pnpm build pour lancer le projet
    "dist" va apparaitre
    une erreur va apparaitre car dans types on met juste ["node"]
    separer deux terminal avec un pnpm dev


    import dotenv from 'dotenv'
    dotenv.config();
    dans index.ts

    log = journal de bord de l'activité des choses