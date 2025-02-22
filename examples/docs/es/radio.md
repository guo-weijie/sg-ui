## Radio
Selección única entre múltiples opciones.

### Uso básico
El elemento Radio no debe tener muchas opciones. De otra manera, utilice el componente Select.

:::demo Crear un elemento Radio es fácil, solo necesita enlazar(`bind`) una variable a la directiva `v-model` del Radio. Va a ser igual al valor `label` del Radio seleccionado. El tipo de dato de `label` es `String`, `Number` o `Boolean`.
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

### Deshabilitado

El atributo `disabled` es utilizado para deshabilitar un Radio.

:::demo Solo necesita agregar el atributo `disabled`.
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

### Grupo de elementos Radio

Recomendado para seleccionar opciones que se excluyen mutuamente.

:::demo Combine `sg-radio-group` con `sg-radio` para mostrar un grupo de Radios. Enlace la variable con `v-model` del elemento `sg-radio-group` y asigne el valor del `label` en `sg-radio`. Se provee el evento `change` con el valor actual como parámetro.

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

### Estilo Button

Radio con estilo de botón.

:::demo Solo necesita cambiar el elemento `sg-radio` a `sg-radio-button`. Se provee el atributo `size`.
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

### Con bordes

:::demo El atributo `border` agrega un borde al elemento Radio.
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

### Atributos de Radio

| Atributo | Descripción                              | Tipo                      | Valores Aceptado      | Por defecto |
| -------- | ---------------------------------------- | ------------------------- | --------------------- | ----------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| label    | el valor del Radio                       | string / number / boolean | —                     | —           |
| disabled | si el Radio está deshabilitado           | boolean                   | —                     | false       |
| border   | agregar borde alrededor del elemento Radio | boolean                   | —                     | false       |
| size     | tamaño del elemento Radio, solo funciona si `border` es verdadero | string                    | medium / small / mini | —           |
| name     | atributo nativo `name`                 | string                    | —                     | —           |

### Atributos de Radio-button

| Atributo | Descripción                    | Tipo            | Valores Aceptado | Por defecto |
| -------- | ------------------------------ | --------------- | ---------------- | ----------- |
| label    | el valor del Radio             | string / number | —                | —           |
| disabled | si el Radio está deshabilitado | boolean         | —                | false       |
| name     | atributo nativo `name`         | string          | —                | —           |

### Atributos de Radio-group

| Atributo   | Descripción                              | Tipo    | Valores Aceptado      | Valores por defecto |
| ---------- | ---------------------------------------- | ------- | --------------------- | ------------------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| size       | tamaño de los `radio buttons` o `bordered radios` | string  | medium / small / mini | —                   |
| disabled   | si la anidación de radios está deshabilitada | boolean | —                     | false               |
| text-color | color de las letras cuando el botón está activo | string  | —                     | #ffffff             |
| fill       | color del borde y fondo cuando el botón está activo | string  | —                     | #409EFF             |

### Eventos de Radio 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |


### Eventos de Radio-group 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |

