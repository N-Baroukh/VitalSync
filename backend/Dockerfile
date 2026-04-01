#Build & Test
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json si présent
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY .. .

# Exécuter les tests
RUN npm test

#Production
FROM node:18-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/server.js ./
COPY --from=build /app/test ./test

# Installer uniquement les dépendances de production
RUN npm install --production

# Exposer le port de l'API
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]