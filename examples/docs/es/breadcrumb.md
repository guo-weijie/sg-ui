## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `sg-breadcrumb`, cada `sg-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. El valor por defecto es '/'.

```html
<sg-breadcrumb separator="/">
  <sg-breadcrumb-item :to="{ path: '/' }">homepage</sg-breadcrumb-item>
  <sg-breadcrumb-item><a href="/">promotion management</a></sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion list</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion detail</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<sg-breadcrumb separator-class="sg-icon-arrow-right">
  <sg-breadcrumb-item :to="{ path: '/' }">homepage</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion management</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion list</sg-breadcrumb-item>
  <sg-breadcrumb-item>promotion detail</sg-breadcrumb-item>
</sg-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





