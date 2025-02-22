## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `sg-breadcrumb`, each `sg-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<sg-breadcrumb separator="/">
  <sg-breadcrumb-item :to="{ path: '/' }">homepage</sg-breadcrumb-item>
  <sg-breadcrumb-item><a href="/">promotion management</a></sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion list</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion detail</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<sg-breadcrumb separator-class="sg-icon-arrow-right">
  <sg-breadcrumb-item :to="{ path: '/' }">homepage</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion management</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion list</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion detail</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





