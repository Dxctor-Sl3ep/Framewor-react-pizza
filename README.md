# 🍕 Pizza Shop React

Une application e-commerce complète pour commander des pizzas, construite avec **React** et **Vite**.

## 📋 Fonctionnalités

- **Catalogue de pizzas** : Affichage de 6 pizzas différentes avec images, descriptions et prix
- **Panier persistant** : Les articles restent en mémoire avec LocalStorage
- **Routage par hash** : Navigation fluide entre les pages (Accueil, Panier, Paiement)
- **Gestion du panier** : Ajouter/retirer des articles, ajustement des quantités
- **Formulaire de paiement** : Collecte les informations client avec validation
- **Validation téléphone** : Restriction à 10 chiffres uniquement, suppression des caractères spéciaux
- **Redirection après paiement** : Retour automatique à l'accueil après confirmation

## 🚀 Installation

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Étapes

1. Cloner le projet :
```bash
git clone <repository-url>
cd pizza-shop-react
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir dans le navigateur : `http://localhost:5173`

## 📂 Structure du projet

```
src/
├── components/
│   ├── Header.jsx          # Barre de navigation
│   ├── PizzaList.jsx       # Grille des pizzas
│   └── PizzaCard.jsx       # Carte individuelle de pizza
├── pages/
│   ├── Home.jsx            # Page d'accueil
│   ├── Cart.jsx            # Page du panier
│   └── Payment.jsx         # Page de paiement
├── contexts/
│   └── CartContext.jsx     # Contexte global du panier
├── data/
│   └── pizza.js            # Catalogue des pizzas
├── App.jsx                 # Routeur principal
├── App.css                 # Styles globaux
└── main.jsx                # Point d'entrée
```

## 🔀 Routes disponibles

| Route | Page |
|-------|------|
| `#home` | Accueil - Catalogue des pizzas |
| `#cart` | Panier - Articles sélectionnés |
| `#payment` | Paiement - Formulaire de commande |

## 🛠️ Commandes

- `npm run dev` : Lancer le serveur de développement
- `npm run build` : Construire pour la production
- `npm run preview` : Aperçu de la build
- `npm run lint` : Analyser le code avec ESLint

## 💾 Données

Le panier est stocké dans **LocalStorage** sous la clé `mon_panier_pizza`. Les données persistent même après fermeture du navigateur.

## 📝 Formulaire de paiement

Le formulaire collecte les champs suivants :
- **Nom** (texte)
- **Prénom** (texte)
- **Numéro de téléphone** (10 chiffres max)
- **Adresse mail** (email)
- **Adresse** (texte)
- **Code Postal** (texte)
- **Carte Bleu** (texte)

Après soumission, une alerte confirme la livraison, le formulaire se réinitialise, et le panier est vidé avant retour à l'accueil.

## 🎨 Styles

Le projet utilise des **variables CSS** pour une thématisation cohérente :
- `--bg` : Fond sombre (#262626)
- `--accent` : Couleur principale orange (#ff6b4d)
- `--card-bg` : Fond des cartes blanc
- `--muted` : Couleur douce pour les fonds

## 📦 Dépendances

- **React** (v19.2.0) : Librairie UI
- **React DOM** (v19.2.0) : Rendu DOM
- **Vite** : Build tool et serveur dev

## 🔧 Développement futur

- Intégration avec une API backend
- Authentification utilisateur
- Historique des commandes
- Gestion des stocks
- Système de recommandations

## 📄 Licence

Projet EPSI - Formation école.

---

**Made with ❤️ for pizza lovers**
