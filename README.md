# VitalSync

## 1. Description du projet et architecture

**VitalSync** est une application de suivi médical et sportif qui centralise les activités et les données de santé des utilisateurs.  
L’architecture est composée de trois services principaux :

- **Backend Node.js (Express)** : expose l’API REST (`/health` et `/api/activities`).
- **Frontend (HTML + Nginx)** : interface utilisateur qui consomme l’API backend.
- **Base de données PostgreSQL** : stockage des informations utilisateurs et activités.

L’ensemble des services est conteneurisé avec **Docker** et peut être orchestré avec Kubernetes pour une haute disponibilité et un déploiement scalable.

---

## 2. Pipeline CI/CD

La pipeline CI/CD est configurée avec **GitHub Actions** et comporte trois étapes principales :

1. **Lint & Tests**
    - Installation des dépendances Node.js (`npm install`)
    - Exécution des tests unitaires avec **Jest** pour le backend

2. **Build Docker**
    - Construction des images Docker backend et frontend

3. **Déploiement staging**
    - Déploiement local via `docker-compose up`
    - Health check automatique du backend (`/health`)
    - La pipeline échoue si le service n’est pas disponible

**Déclencheurs :**
- Push sur `develop` → test et build continu
- Pull Request vers `main` → validation avant merge

Les secrets (mot de passe DB, Docker Hub) sont stockés dans GitHub Actions ou dans un fichier `.env` non versionné, jamais en clair.

---

## 3. Choix techniques et justifications

| Composant | Choix | Justification |
|-----------|-------|---------------|
| Backend | Node.js + Express | Rapide à prototyper, tests Jest faciles à intégrer |
| Frontend | HTML + Nginx | Serveur léger pour fichiers statiques et proxy API |
| Base de données | PostgreSQL | Fiable et relationnelle, adaptée aux besoins |
| Conteneurisation | Docker + Docker Compose | Isolation, portabilité et déploiement simple |
| CI/CD | GitHub Actions | Pipeline multi-étapes avec intégration de secrets et health checks |
| Supervision | Prometheus + Grafana + ELK | Collecte métriques, visualisation, alerting et logs centralisés |
---