## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `sg-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="sg-icon-edit"></i>
<i class="sg-icon-share"></i>
<i class="sg-icon-delete"></i>
<sg-button type="primary" icon="sg-icon-search">Chercher</sg-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sg-icon-' + name"></i>
      <span class="icon-name">{{'sg-icon-' + name}}</span>
    </span>
  </li>
</ul>
