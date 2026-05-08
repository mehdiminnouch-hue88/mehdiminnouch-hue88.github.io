#  CV Personnel Interactif - Projet Web 

##  Vue d'ensemble

Un CV personnel interactif et moderne créé avec **HTML5**, **CSS3**, **jQuery** et **React**. Hébergé sur **GitHub Pages** avec un design créatif et unique, animations fluides et composants dynamiques.

**URL Live:** `https://username.github.io`

---

##  Objectifs du Projet

    Créer une présentation professionnelle en ligne  
    Démontrer les compétences en développement web  
    Intégrer HTML5/CSS3 pour la structure et le style  
    Utiliser jQuery pour l'interactivité et les animations  
    Implémenter des composants React dynamiques  
    Déployer sur GitHub Pages  

---

##  Structure du Projet

```
MEHDI-MINNOUCH.github.io/
├── index.html          # Fichier HTML principal
├── styles.css          # Styles CSS3
├── script.js           # JavaScript (jQuery + React)
└── README.md           # Documentation
```

---

## Technologies Utilisées

### Frontend Stack
- **HTML5** - Structure sémantique
- **CSS3** - Design responsive avec Flexbox/Grid
- **jQuery** - Interactivité et manipulation du DOM
- **React** - Composants dynamiques et réutilisables

### Outils & Librairies
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographies `Space Grotesk` et `Outfit`
- **React 18** - Via CDN
- **Babel** - Transpilation JSX

### Hébergement
- **GitHub Pages** 

---

##  Design & Esthétique

### Thème Rétro-Futuriste
- **Couleurs primaires:** 
  - Rose électrique `#ff006e`
  - Cyan `#00d9ff`
  - Or néon `#ffd60a`
  - Fond sombre `#0a0a0a`

- **Typographie distinctive:**
  - Display: Space Grotesk (gras, moderne)
  - Body: Outfit (lisible, épuré)

- **Animations:**
  - Float de la photo de profil
  - Barres de compétences animées au scroll
  - Cartes de projets avec effet de glissement
  - Timeline animée pour la formation

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Mobile petit écran (< 480px)

---

##  Sections du CV

### 1. **Header (En-tête)**
- Photo de profil avec bordure et ombre LED
- Nom et titre professionnel avec gradient
- Liens sociaux (Email, LinkedIn, GitHub)
- Animations au chargement (fade-in-up)

### 2. **À Propos**
- Biographie personnelle (8-10 lignes)
- Parcours et aspirations professionnelles
- Cartes avec effet hover

### 3. **Compétences**
- 3 catégories : Frontend, Backend, Outils
- Barres de progression animées
- Niveaux de maîtrise visuels
- Animation au scroll et au hover

### 4. **Formation**
- Timeline interactive
- 3 diplômes/formations
- Alternance droite/gauche
- Marqueurs animés au hover
- Dates et descriptions

### 5. **Projets & Expériences**
- 3 composants React `<ProjectCard />`
- Cartes avec effet glassmorphism
- Technologies utilisées
- Liens GitHub et Démo
- Animation au hover

### 6. **Contact**
- Formulaire avec 3 champs (Nom, Email, Message)
- Validation jQuery :
  - Champs obligatoires
  - Format email valide
  - Longueur minimale
- Messages d'erreur animés
- Feedback de succès/erreur

---

##  Fonctionnalités jQuery

### 1. **Animations des Barres de Compétences**
```javascript
// Animation au scroll
// Animation au hover (+5% temporaire)
```

### 2. **Validation du Formulaire**
```javascript
// Vérification : nom (≥3 caractères)
// Vérification : email (format valide)
// Vérification : message (≥10 caractères)
// Messages d'erreur avec animation shake
```

### 3. **Navigation Mobile**
```javascript
// Hamburger menu responsive
// Fermeture au clic sur un lien
```

### 4. **Scroll Reveal**
```javascript
// Animation fade-in au scroll pour les éléments
```

### 5. **Active Nav Link**
```javascript
// Mise à jour automatique du lien actif à la navigation
```

---

##  Composants React

### `<ProjectCard />`
Affiche une carte de projet avec :
- Titre, description
- Technologies (tags)
- Liens GitHub et Démo

```jsx
<ProjectCard project={{
    title: "Nom du projet",
    description: "Description...",
    technologies: ["React", "Node.js"],
    github: "https://...",
    demo: "https://..."
}} />
```

### `<ProjectsList />`
Conteneur pour mapper plusieurs projets.

---

##  Installation & Déploiement

### Étape 1 : Cloner et Configurer

```bash
# Créer/aller dans votre dépôt GitHub Pages
cd username.github.io

# Initialiser Git si nécessaire
git init
```

### Étape 2 : Ajouter les Fichiers

Copier/coller les fichiers dans le dépôt :
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

### Étape 3 : Push vers GitHub

```bash
git add .
git commit -m "init: cv project"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Aller dans **Settings** du dépôt
2. Section **Pages**
3. Source: `main` branch, dossier `/root`
4. Sauvegarder

### Étape 5 : Vérifier

Accéder à https://mehdiminnouch-hue88.github.io/ après quelques minutes.

---

##  Personnalisation

### Remplacer les Données Fictives

#### Dans `index.html` :
```html
<!-- Header -->
<h1 class="name-title">Votre Nom</h1>
<p class="profession">Votre Titre</p>
<p class="tagline">Votre Tagline</p>

<!-- Coordonnées -->
<a href="mailto:votre@email.com">Email</a>
<a href="https://linkedin.com/in/votreprofil">LinkedIn</a>
<a href="https://github.com/votreusername">GitHub</a>

<!-- À propos -->
<!-- Remplacer les 2 paragraphes -->

<!-- Compétences -->
<!-- Modifier les skill-item -->

<!-- Formation -->
<!-- Mettre à jour les timeline-item -->
```

#### Dans `script.js` :
```javascript
const projects = [
    {
        title: "Votre Projet",
        description: "Description...",
        technologies: ["Tech1", "Tech2"],
        github: "https://...",
        demo: "https://..."
    },
    // ...
];
```

#### Photo de Profil
```html
<img src="votre-photo.jpg" alt="Photo de profil">
```

---

##  Animations Principales

| Élément | Animation | Trigger |
|---------|-----------|---------|
| Photo profil | Float vertical | Page load |
| Titre | Fade-in-up cascade | Page load |
| Compétences | Barres progression | Scroll to section |
| Hover compétences | +5% bar | Hover |
| Timeline | Fade-in staggered | Scroll |
| Projets | Glissement + ombre | Hover |
| Formulaire | Shake d'erreur | Validation fail |
| Footer | Heartbeat | Animation loop |

---

##  Optimisations & Bonnes Pratiques

 **Performance :**
- CDN pour librairies externes
- CSS variables pour maintainabilité
- Animations CSS/GPU optimisées

 **Accessibilité :**
- Sémantique HTML5
- Alt text pour images
- Contraste de couleurs adéquat

 **SEO :**
- Meta tags
- Titre descriptif
- Structure sémantique

 **Responsive :**
- Mobile-first approach
- Breakpoints à 480px, 768px, 1200px
- Flexbox/Grid

---

##  Commits Recommandés

```bash
# Initial
git commit -m "init: cv project"

# Après chaque étape
git commit -m "feat: add html structure"
git commit -m "style: add css design"
git commit -m "feat: add jquery interactivity"
git commit -m "feat: add react components"
git commit -m "docs: add readme"
git commit -m "deploy: github pages"
```

---

##  Troubleshooting

### GitHub Pages ne se met à pas à jour
- Attendre 5-10 minutes
- Vider le cache du navigateur (Ctrl+Shift+Del)
- Vérifier que le branch est `main` et le dossier `/root`

### CSS/JS ne charge pas
- Vérifier les chemins dans `index.html` (doivent être relatifs)
- S'assurer que les fichiers sont au même niveau que `index.html`

### Formulaire ne fonctionne pas
- Vérifier la console navigateur (F12)
- S'assurer que jQuery est chargé (vérifier CDN)

---

##  Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [jQuery Documentation](https://jquery.com/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

##  Licence

Ce projet est fourni à titre éducatif. Libre d'utilisation et de modification.

---

##  Auteur

**MEHDI-MINNOUCH**  
  SOC ANALISIS IN FUTER
[LinkedIn]https://www.linkedin.com/in/mehdi-minnouch-a3457a317/ | [GitHub]https://github.com/MADMIX55 | [Email] MADMAX0101000@gmail.com

---
