## Radio

Boutons de sélection entre plusieurs options.

### Usage

Radio ne devrait pas avoir trop d'options. Dans ce cas utilisez plutôt Select.

:::demo Créer un composant Radio est facile, vous avez juste besoin de lier les `v-model` des options. Chacun équivaut à la valeur de `label` du radio correspondant. Le type de `label` est `String`, `Number` ou `Boolean`.
```html
<template>
  <sg-radio v-model="radio" label="1">Option A</sg-radio>
  <sg-radio v-model="radio" label="2">Option B</sg-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Désactivé

L'attribut `disabled` désactive le radio.

:::demo Ajoutez simplement l'attribut `disabled` au radio.
```html
<template>
  <sg-radio disabled v-model="radio" label="disabled">Option A</sg-radio>
  <sg-radio disabled v-model="radio" label="selected and disabled">Option B</sg-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Groupe de boutons radio

Utile pour choisir entre plusieurs groupes d'options mutuellement exclusives.

:::demo Combinez `sg-radio-group` avec `sg-radio` pour afficher un groupe de radios. Liez une variable au `v-model` de `sg-radio-group` et configurez le label dans `sg-radio`. Cet élément fournit aussi l'évènement `change` qui a en paramètre la valeur courante.

```html
<sg-radio-group v-model="radio">
  <sg-radio :label="3">Option A</sg-radio>
  <sg-radio :label="6">Option B</sg-radio>
  <sg-radio :label="9">Option C</sg-radio>
</sg-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Style bouton

Des radios affichés comme des boutons standards.

:::demo Changez simplement `sg-radio` pour `sg-radio-button`. L'attribut `size` permet de régler la taille.
```html
<template>
  <div>
    <sg-radio-group v-model="radio1">
      <sg-radio-button label="New York"></sg-radio-button>
      <sg-radio-button label="Washington"></sg-radio-button>
      <sg-radio-button label="Los Angeles"></sg-radio-button>
      <sg-radio-button label="Chicago"></sg-radio-button>
    </sg-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sg-radio-group v-model="radio2" size="medium">
      <sg-radio-button label="New York" ></sg-radio-button>
      <sg-radio-button label="Washington"></sg-radio-button>
      <sg-radio-button label="Los Angeles"></sg-radio-button>
      <sg-radio-button label="Chicago"></sg-radio-button>
    </sg-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sg-radio-group v-model="radio3" size="small">
      <sg-radio-button label="New York"></sg-radio-button>
      <sg-radio-button label="Washington" disabled ></sg-radio-button>
      <sg-radio-button label="Los Angeles"></sg-radio-button>
      <sg-radio-button label="Chicago"></sg-radio-button>
    </sg-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sg-radio-group v-model="radio4" disabled size="mini">
      <sg-radio-button label="New York"></sg-radio-button>
      <sg-radio-button label="Washington"></sg-radio-button>
      <sg-radio-button label="Los Angeles"></sg-radio-button>
      <sg-radio-button label="Chicago"></sg-radio-button>
    </sg-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### Avec bordures

:::demo L'attribut `border` ajoute une bordure aux radios.
```html
<template>
  <div>
    <sg-radio v-model="radio1" label="1" border>Option A</sg-radio>
    <sg-radio v-model="radio1" label="2" border>Option B</sg-radio>
  </div>
  <div style="margin-top: 20px">
    <sg-radio v-model="radio2" label="1" border size="medium">Option A</sg-radio>
    <sg-radio v-model="radio2" label="2" border size="medium">Option B</sg-radio>
  </div>
  <div style="margin-top: 20px">
    <sg-radio-group v-model="radio3" size="small">
      <sg-radio label="1" border>Option A</sg-radio>
      <sg-radio label="2" border disabled>Option B</sg-radio>
    </sg-radio-group>
  </div>
  <div style="margin-top: 20px">
    <sg-radio-group v-model="radio4" size="mini" disabled>
      <sg-radio label="1" border>Option A</sg-radio>
      <sg-radio label="2" border>Option B</sg-radio>
    </sg-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Attributs de Radio

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| label | La valeur du radio. | string / number / boolean | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| border  | Si une bordure doit être affichée autour du radio. | boolean   | — | false |
| size  | Taille du radio, ne marche que si `border` est `true`. | string  | medium / small / mini | — |
| name | Attribut 'name' natif. | string | — | — |

### Évènements de Radio

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs de Radio-group

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| size | Taille des radios. | string | medium / small / mini | —
| disabled  | Si les radios sont désactivés. | boolean   | — | false
| text-color | Couleur du texte quand le bouton est actif. | string | — | #ffffff   |
| fill  | Bordure et couleur de fond quand le bouton est actif. | string | — | #409EFF |

### Évènements de Radio-group

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs Radio-button

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| label | Valeur du radio. | string / number | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| name | Attribut 'name' natif. | string | — | — |
