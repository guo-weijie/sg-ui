## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `sg-icon-iconName`.

:::demo

```html
<i class="sg-icon-edit"></i>
<i class="sg-icon-share"></i>
<i class="sg-icon-delete"></i>
<sg-button type="primary" icon="sg-icon-search">Search</sg-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sg-icon-' + name"></i>
      <span class="icon-name">{{'sg-icon-' + name}}</span>
    </span>
  </li>
</ul>
