# Dockerfile global pour backend + minishells
FROM node:18

# Installer outils nécessaires pour compiler tes programmes C
RUN apt-get update && apt-get install -y \
    build-essential \
    libreadline-dev \
    && rm -rf /var/lib/apt/lists/*

# Définir le dossier de travail global
WORKDIR /app

# Copier uniquement le package.json du backend pour installer les dépendances
COPY backend/package*.json ./backend/

# Installer les dépendances Node dans le dossier backend
WORKDIR /app/backend
RUN npm install

# Copier tout le code backend
COPY backend/. .

# Définir la variable d'environnement pour les programmes C
ENV TERM=xterm

# Builder les minishells et autres programmes C
WORKDIR /app/c_programs/minishell
RUN make

WORKDIR /app/c_programs/philosophers
RUN make

WORKDIR /app/c_programs/push_swap
RUN make

# Retour au backend pour démarrer le serveur
WORKDIR /app/backend

# Exposer le port du backend
EXPOSE 5000

# Lancer le serveur
CMD ["npm", "start"]