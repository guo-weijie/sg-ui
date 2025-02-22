## Icon

Element proporciona un conjunto de iconos propios.

### Uso básico

Simplemente asigna el nombre de la clase a `sg-icon-iconName`.

:::demo

```html
<i class="sg-icon-edit"></i>
<i class="sg-icon-share"></i>
<i class="sg-icon-delete"></i>
<sg-button type="primary" icon="sg-icon-search">Search</sg-button>

```
:::

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sg-icon-' + name"></i>
      <span class="icon-name">{{'sg-icon-' + name}}</span>
    </span>
  </li>
</ul>
