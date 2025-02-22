## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <sg-link href="https://element.eleme.io" target="_blank">défaut</sg-link>
  <sg-link type="primary">primaire</sg-link>
  <sg-link type="success">succès</sg-link>
  <sg-link type="warning">avertissement</sg-link>
  <sg-link type="danger">danger</sg-link>
  <sg-link type="info">info</sg-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <sg-link disabled>défaut</sg-link>
  <sg-link type="primary" disabled>primaire</sg-link>
  <sg-link type="success" disabled>succès</sg-link>
  <sg-link type="warning" disabled>avertissement</sg-link>
  <sg-link type="danger" disabled>danger</sg-link>
  <sg-link type="info" disabled>info</sg-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <sg-link :underline="false">non souligné</sg-link>
  <sg-link>Souligné</sg-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <sg-link icon="sg-icon-edit">Éditer</sg-link>
  <sg-link>Vérifier<i class="sg-icon-view sg-icon--right"></i> </sg-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
