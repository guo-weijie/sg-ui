## Link

Texto con hipervínculo

### Básico

Texto con hipervínculo básico
:::demo

```html
<div>
  <sg-link href="https://element.eleme.io" target="_blank">default</sg-link>
  <sg-link type="primary">primary</sg-link>
  <sg-link type="success">success</sg-link>
  <sg-link type="warning">warning</sg-link>
  <sg-link type="danger">danger</sg-link>
  <sg-link type="info">info</sg-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervínculo
:::demo

```html
<div>
  <sg-link disabled>default</sg-link>
  <sg-link type="primary" disabled>primary</sg-link>
  <sg-link type="success" disabled>success</sg-link>
  <sg-link type="warning" disabled>warning</sg-link>
  <sg-link type="danger" disabled>danger</sg-link>
  <sg-link type="info" disabled>info</sg-link>
</div>
```

:::

### Subrayado

Subrayado del hipervínculo
:::demo

```html
<div>
  <sg-link :underline="false">Without Underline</sg-link>
  <sg-link>With Underline</sg-link>
</div>
```

:::

### Icono

Hipervínculo con icono
:::demo

```html
<div>
  <sg-link icon="sg-icon-edit">Edit</sg-link>
  <sg-link>Check<i class="sg-icon-view sg-icon--right"></i> </sg-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervínculo estará subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervínculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
