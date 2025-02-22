## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<sg-row>
  <sg-button>Default</sg-button>
  <sg-button type="primary">Primary</sg-button>
  <sg-button type="success">Success</sg-button>
  <sg-button type="info">Info</sg-button>
  <sg-button type="warning">Warning</sg-button>
  <sg-button type="danger">Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button plain>Plain</sg-button>
  <sg-button type="primary" plain>Primary</sg-button>
  <sg-button type="success" plain>Success</sg-button>
  <sg-button type="info" plain>Info</sg-button>
  <sg-button type="warning" plain>Warning</sg-button>
  <sg-button type="danger" plain>Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button round>Round</sg-button>
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

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<sg-row>
  <sg-button disabled>Default</sg-button>
  <sg-button type="primary" disabled>Primary</sg-button>
  <sg-button type="success" disabled>Success</sg-button>
  <sg-button type="info" disabled>Info</sg-button>
  <sg-button type="warning" disabled>Warning</sg-button>
  <sg-button type="danger" disabled>Danger</sg-button>
</sg-row>

<sg-row>
  <sg-button plain disabled>Plain</sg-button>
  <sg-button type="primary" plain disabled>Primary</sg-button>
  <sg-button type="success" plain disabled>Success</sg-button>
  <sg-button type="info" plain disabled>Info</sg-button>
  <sg-button type="warning" plain disabled>Warning</sg-button>
  <sg-button type="danger" plain disabled>Danger</sg-button>
</sg-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<sg-button type="text">Text Button</sg-button>
<sg-button type="text" disabled>Text Button</sg-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<sg-button type="primary" icon="sg-icon-edit"></sg-button>
<sg-button type="primary" icon="sg-icon-share"></sg-button>
<sg-button type="primary" icon="sg-icon-delete"></sg-button>
<sg-button type="primary" icon="sg-icon-search">Search</sg-button>
<sg-button type="primary">Upload<i class="sg-icon-upload sg-icon-right"></i></sg-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<sg-button-group>` para agrupar sus botones.

```html
<sg-button-group>
  <sg-button type="primary" icon="sg-icon-arrow-left">Previous Page</sg-button>
  <sg-button type="primary">Next Page<i class="sg-icon-arrow-right sg-icon-right"></i></sg-button>
</sg-button-group>
<sg-button-group>
  <sg-button type="primary" icon="sg-icon-edit"></sg-button>
  <sg-button type="primary" icon="sg-icon-share"></sg-button>
  <sg-button type="primary" icon="sg-icon-delete"></sg-button>
</sg-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<sg-button type="primary" :loading="true">Loading</sg-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<sg-row>
  <sg-button>Default</sg-button>
  <sg-button size="medium">Medium</sg-button>
  <sg-button size="small">Small</sg-button>
  <sg-button size="mini">Mini</sg-button>
</sg-row>
<sg-row>
  <sg-button round>Default</sg-button>
  <sg-button size="medium" round>Medium</sg-button>
  <sg-button size="small" round>Small</sg-button>
  <sg-button size="mini" round>Mini</sg-button>
</sg-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

