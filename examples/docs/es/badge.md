## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<sg-badge :value="12" class="item">
  <sg-button size="small">comments</sg-button>
</sg-badge>
<sg-badge :value="3" class="item">
  <sg-button size="small">replies</sg-button>
</sg-badge>
<sg-badge :value="1" class="item" type="primary">
  <sg-button size="small">comments</sg-button>
</sg-badge>
<sg-badge :value="2" class="item" type="warning">
  <sg-button size="small">replies</sg-button>
</sg-badge>

<sg-dropdown trigger="click">
  <span class="sg-dropdown-link">
    Click Me<i class="sg-icon-caret-bottom sg-icon--right"></i>
  </span>
  <sg-dropdown-menu slot="dropdown">
    <sg-dropdown-item class="clearfix">
      comments
      <sg-badge class="mark" :value="12" />
    </sg-dropdown-item>
    <sg-dropdown-item class="clearfix">
      replies
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

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<sg-badge :value="200" :max="99" class="item">
  <sg-button size="small">comments</sg-button>
</sg-badge>
<sg-badge :value="100" :max="10" class="item">
  <sg-button size="small">replies</sg-button>
</sg-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<sg-badge value="new" class="item">
  <sg-button size="small">comments</sg-button>
</sg-badge>
<sg-badge value="hot" class="item">
  <sg-button size="small">replies</sg-button>
</sg-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<sg-badge is-dot class="item">query</sg-badge>
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

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

