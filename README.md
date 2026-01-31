# Site vitrine Octafer (prêt à publier)

Contenu :
- `index.html` (page principale)
- `styles.css` (style)
- `script.js` (menu mobile + formulaires mailto)
- `mentions-legales.html` (à compléter)

## 1) Personnaliser en 5 minutes (important)
Ouvre `index.html` et remplace :
- **Téléphone** : `06 00 00 00 00` + le lien `tel:+33600000000`
- **Email** : `contact@octafer.fr`
- **Ville / rayon** : dans la bande du haut + dans le bloc “Zone”

Ouvre aussi `script.js` et remplace :
- `const CONTACT_EMAIL = "contact@octafer.fr";` par ton email réel.

## 2) Ajouter tes photos de chantiers
Le plus simple :
1. Crée un dossier `images/`
2. Mets tes fichiers dedans (ex: `chantier1.jpg`)
3. Dans `index.html`, remplace un bloc :
   `<div class="ph-img gradient-a">Chantier 1</div>`
   par :
   `<img class="real-img" src="images/chantier1.jpg" alt="Cloison rénovation" />`

Puis ajoute ce CSS à la fin de `styles.css` :
```
.real-img{width:100%; height:160px; object-fit:cover; border-radius:14px; border:1px solid var(--border);}
```

## 3) Mettre en ligne
### Option A — Netlify (simple)
- Va sur Netlify
- Glisse-dépose le dossier du site (ou le zip)

### Option B — GitHub Pages
- Mets les fichiers dans un dépôt GitHub
- Settings → Pages → Deploy

### Option C — Hébergeur classique (OVH, etc.)
- Envoie les fichiers par FTP dans `www` ou `public_html`.

## 4) Formulaire “vrai” (envoi direct)
La version actuelle ouvre un email (mailto). Si tu veux un vrai envoi :
- Netlify Forms (facile) ou
- WordPress + plugin formulaire

## 5) Mentions légales
Ouvre `mentions-legales.html` et complète les infos (SIRET, adresse, hébergeur, etc.).
