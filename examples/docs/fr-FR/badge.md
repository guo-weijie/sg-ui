## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<sg-badge :value="12" class="item">
  <sg-button size="small">Commentaires</sg-button>
</sg-badge>
<sg-badge :value="3" class="item">
  <sg-button size="small">Réponses</sg-button>
</sg-badge>
<sg-badge :value="1" class="item" type="primary">
  <sg-button size="small">Commentaires</sg-button>
</sg-badge>
<sg-badge :value="2" class="item" type="warning">
  <sg-button size="small">Réponses</sg-button>
</sg-badge>

<sg-dropdown trigger="click">
  <span class="sg-dropdown-link">
    Cliquez<i class="sg-icon-caret-bottom sg-icon--right"></i>
  </span>
  <sg-dropdown-menu slot="dropdown">
    <sg-dropdown-item class="clearfix">
      Commentaires
      <sg-badge class="mark" :value="12" />
    </sg-dropdown-item>
    <sg-dropdown-item class="clearfix">
      Réponses
      <sg-badge class="mark" :value="3" />
    </sg-dropdown-item>
  </sg-dropdown-menu>
</sg-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<sg-badge :value="200" :max="99" class="item">
  <sg-button size="small">Commentaires</sg-button>
</sg-badge>
<sg-badge :value="100" :max="10" class="item">
  <sg-button size="small">Réponses</sg-button>
</sg-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<sg-badge value="new" class="item">
  <sg-button size="small">Commentaires</sg-button>
</sg-badge>
<sg-badge value="hot" class="item">
  <sg-button size="small">Réponses</sg-button>
</sg-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<sg-badge is-dot class="item">Requète</sg-badge>
<sg-badge is-dot class="item">
  <sg-button class="share-button" icon="sg-icon-share" type="primary"></sg-button>
</sg-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
