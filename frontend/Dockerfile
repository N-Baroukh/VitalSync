# Image Nginx officielle
FROM nginx:alpine

# Copier le fichier index.html
COPY index.html /usr/share/nginx/html/

# Copier le fichier de configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]