# EventHub — Catalogue d'événements

Application Angular 21 standalone permettant de consulter des événements étudiants, de filtrer la liste par catégorie, d'afficher les détails d'un événement et de gérer une sélection de favoris.

---

## Versions utilisées

| Outil | Version |
|---|---|
| Node.js | 22.x |
| npm | 10.x |
| Angular CLI | 21.2.x |
| Angular | 21.2.x |
| TypeScript | 5.9.x |

---

## Installation et lancement

```bash
# 1. Cloner le dépôt
git clone <URL_DU_DEPOT>
cd eventhub-angular21

# 2. Installer les dépendances
npm install --legacy-peer-deps

# 3. Lancer en développement
ng serve
# ou
npm start
```



---



### Rôle de chaque composant

- **Header** : affiche le titre de l'application, les liens de navigation avec `routerLinkActive` et le nombre de favoris courant.
- **EventCard** : reçoit un objet `Event` via `input()`, affiche ses informations avec des pipes (`date`, `currency`, `uppercase`) et émet un `output()` pour le toggle favori.
- **EventList** : page principale qui stocke le filtre de catégorie dans un `signal()`, calcule les événements filtrés avec `computed()` et délègue la gestion des favoris au `FavoritesService`.
- **EventDetails** : récupère le paramètre `:id` de la route via `input()` (grâce à `withComponentInputBinding()`), trouve l'événement correspondant et affiche un message si l'id est inconnu.
- **NotFound** : page 404 affichée pour toute URL inconnue (`**`).

---

## Fonctionnalités réalisées

- ✅ Architecture standalone Angular 21
- ✅ Signals : `signal()`, `computed()`, `update()`, `set()`
- ✅ `@for` avec `track event.id` + `@empty`
- ✅ `@if / @else` dans les templates
- ✅ `input()` / `output()` pour la communication parent ↔ enfant
- ✅ Pipes : `date`, `currency`, `uppercase`
- ✅ Filtre de catégorie réactif (Signal)
- ✅ Système de favoris via service partagé
- ✅ Routage : `/events`, `/events/:id`, `/about`, `**`, redirection `/` → `/events`
- ✅ `routerLink`, `routerLinkActive`
- ✅ Paramètre de route via `input()` + `withComponentInputBinding()`
- ✅ Lazy loading de toutes les pages avec `loadComponent()`
- ✅ Mise en page responsive (mobile + desktop)
- ✅ Accessibilité : `aria-label`, `aria-pressed`, `loading="lazy"` sur les images

---

## Commandes Git

```bash
git init
git add .
git commit -m "feat: initialisation du projet EventHub"
git branch -M main
git remote add origin <URL_DU_DEPOT>
git push -u origin main
```
