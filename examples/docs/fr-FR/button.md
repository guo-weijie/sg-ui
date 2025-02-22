## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<sg-row>
  <sg-button>Défaut</sg-button>
  <sg-button type="primary">Primary</sg-button>
  <sg-button type="success">Success</sg-button>
  <sg-button type="info">Info</sg-button>
  <sg-button type="warning">Warning</sg-button>
  <sg-button type="danger">Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button plain>Plein</sg-button>
  <sg-button type="primary" plain>Primary</sg-button>
  <sg-button type="success" plain>Success</sg-button>
  <sg-button type="info" plain>Info</sg-button>
  <sg-button type="warning" plain>Warning</sg-button>
  <sg-button type="danger" plain>Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button round>Arrondi</sg-button>
  <sg-button type="primary" round>Primary</sg-button>
  <sg-button type="success" round>Success</sg-button>
  <sg-button type="info" round>Info</sg-button>
  <sg-button type="warning" round>Warning</sg-button>
  <sg-button type="danger" round>Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button icon="sg-icon-search" circle></sg-button>
  <sg-button type="primary" icon="sg-icon-edit" circle></sg-button>
  <sg-button type="success" icon="sg-icon-check" circle></sg-button>
  <sg-button type="info" icon="sg-icon-message" circle></sg-button>
  <sg-button type="warning" icon="sg-icon-star-off" circle></sg-button>
  <sg-button type="danger" icon="sg-icon-delete" circle></sg-button>
</sg-row>
```
:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<sg-row>
  <sg-button disabled>Défaut</sg-button>
  <sg-button type="primary" disabled>Principal</sg-button>
  <sg-button type="success" disabled>Succès</sg-button>
  <sg-button type="info" disabled>Info</sg-button>
  <sg-button type="warning" disabled>Attention</sg-button>
  <sg-button type="danger" disabled>Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button plain disabled>Plein</sg-button>
  <sg-button type="primary" plain disabled>Principal</sg-button>
  <sg-button type="success" plain disabled>Succès</sg-button>
  <sg-button type="info" plain disabled>Info</sg-button>
  <sg-button type="warning" plain disabled>Attention</sg-button>
  <sg-button type="danger" plain disabled>Danger</sg-button>
</sg-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo
```html
<sg-button type="text">Bouton texte</sg-button>
<sg-button type="text" disabled>Bouton texte</sg-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<sg-button type="primary" icon="sg-icon-edit"></sg-button>
<sg-button type="primary" icon="sg-icon-share"></sg-button>
<sg-button type="primary" icon="sg-icon-delete"></sg-button>
<sg-button type="primary" icon="sg-icon-search">Recherche</sg-button>
<sg-button type="primary">Upload<i class="sg-icon-upload sg-icon-right"></i></sg-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<sg-button-group>` pour grouper vos boutons.

```html
<sg-button-group>
  <sg-button type="primary" icon="sg-icon-arrow-left">Page précédente</sg-button>
  <sg-button type="primary">Page suivante<i class="sg-icon-arrow-right sg-icon-right"></i></sg-button>
</sg-button-group>
<sg-button-group>
  <sg-button type="primary" icon="sg-icon-edit"></sg-button>
  <sg-button type="primary" icon="sg-icon-share"></sg-button>
  <sg-button type="primary" icon="sg-icon-delete"></sg-button>
</sg-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<sg-button type="primary" :loading="true">Chargement</sg-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<sg-row>
  <sg-button>Défaut</sg-button>
  <sg-button size="medium">Medium</sg-button>
  <sg-button size="small">Small</sg-button>
  <sg-button size="mini">Mini</sg-button>
</sg-row>
<sg-row>
  <sg-button round>Défaut</sg-button>
  <sg-button size="medium" round>Medium</sg-button>
  <sg-button size="small" round>Small</sg-button>
  <sg-button size="mini" round>Mini</sg-button>
</sg-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
