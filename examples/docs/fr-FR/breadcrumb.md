## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `sg-breadcrumb`, chaque `sg-breadcrumb-item` est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type `String` appelé `separator` qui détermine le séparateur. Sa valeur par défaut est '/'.

```html
<sg-breadcrumb separator="/">
  <sg-breadcrumb-item :to="{ path: '/' }">Accueil</sg-breadcrumb-item>
  <sg-breadcrumb-item><a href="/">Gestion promotions</a></sg-breadcrumb-item>
  <sg-breadcrumb-item>Liste promotions</sg-breadcrumb-item>
  <sg-breadcrumb-item>Détail promotion</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<sg-breadcrumb separator-class="sg-icon-arrow-right">
  <sg-breadcrumb-item :to="{ path: '/' }">Accueil</sg-breadcrumb-item>
  <sg-breadcrumb-item>Gestion promotions</sg-breadcrumb-item>
  <sg-breadcrumb-item>Liste promotions</sg-breadcrumb-item>
  <sg-breadcrumb-item>Détail promotion</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique. | boolean | — | false |
