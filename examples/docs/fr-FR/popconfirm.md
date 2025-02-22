## Popconfirm 

A simple confirmation dialog of an element click action.

### Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.
```html
<template>
<sg-popconfirm
  title="Are you sure to delete this?"
>
  <sg-button slot="reference">Delete</sg-button>
</sg-popconfirm>
</template>
````
:::

### Customise
You can customise Popconfirm like:
:::demo
```html
<template>
<sg-popconfirm
  confirm-button-text='OK'
  cancsg-button-text='No, Thanks'
  icon="sg-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <sg-button slot="reference">Delete</sg-button>
</sg-popconfirm>
</template>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Title | String | — | — |
|  confirm-button-text              | Confirm button text | String | — | — |
|  cancsg-button-text              | Cancel button text | String | — | — |
|  confirm-button-type              | Confirm button type | String | — | Primary |
|  cancsg-button-type              | Cancel button type | String | — | Text |
|  icon              | Icon | String | — | sg-icon-question |
|  icon-color              | Icon color | String | — | #f90 |
|  hide-icon              | is hide Icon | Boolean | — | false |

### Slot
| Name | Description |
|--- | ---|
| reference | HTML element that triggers Popconfirm |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| confirm | triggers when click confirm button | — |
| cancel | triggers when click cancel button | — |