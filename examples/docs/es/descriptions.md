## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<sg-descriptions title="User Info">
    <sg-descriptions-item label="Username">kooriookami</sg-descriptions-item>
    <sg-descriptions-item label="Telephone">18100000000</sg-descriptions-item>
    <sg-descriptions-item label="Place">Suzhou</sg-descriptions-item>
    <sg-descriptions-item label="Remarks">
      <sg-tag size="small">School</sg-tag>
    </sg-descriptions-item>
    <sg-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</sg-descriptions-item>
</sg-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <sg-radio-group v-model="size">
    <sg-radio label="">Default</sg-radio>
    <sg-radio label="medium">Medium</sg-radio>
    <sg-radio label="small">Small</sg-radio>
    <sg-radio label="mini">Mini</sg-radio>
  </sg-radio-group>

  <sg-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template slot="extra">
      <sg-button type="primary" size="small">Operation</sg-button>
    </template>
    <sg-descriptions-item>
      <template slot="label">
        <i class="sg-icon-user"></i>
        Username
      </template>
      kooriookami
    </sg-descriptions-item>
    <sg-descriptions-item>
      <template slot="label">
        <i class="sg-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </sg-descriptions-item>
    <sg-descriptions-item>
      <template slot="label">
        <i class="sg-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </sg-descriptions-item>
    <sg-descriptions-item>
      <template slot="label">
        <i class="sg-icon-tickets"></i>
        Remarks
      </template>
      <sg-tag size="small">School</sg-tag>
    </sg-descriptions-item>
    <sg-descriptions-item>
      <template slot="label">
        <i class="sg-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </sg-descriptions-item>
  </sg-descriptions>

  <sg-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template slot="extra">
      <sg-button type="primary" size="small">Operation</sg-button>
    </template>
    <sg-descriptions-item label="Username">kooriookami</sg-descriptions-item>
    <sg-descriptions-item label="Telephone">18100000000</sg-descriptions-item>
    <sg-descriptions-item label="Place">Suzhou</sg-descriptions-item>
    <sg-descriptions-item label="Remarks">
      <sg-tag size="small">School</sg-tag>
    </sg-descriptions-item>
    <sg-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</sg-descriptions-item>
  </sg-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<sg-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <sg-descriptions-item label="Username">kooriookami</sg-descriptions-item>
  <sg-descriptions-item label="Telephone">18100000000</sg-descriptions-item>
  <sg-descriptions-item label="Place" :span="2">Suzhou</sg-descriptions-item>
  <sg-descriptions-item label="Remarks">
    <sg-tag size="small">School</sg-tag>
  </sg-descriptions-item>
  <sg-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</sg-descriptions-item>
</sg-descriptions>

<sg-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <sg-descriptions-item label="Username">kooriookami</sg-descriptions-item>
  <sg-descriptions-item label="Telephone">18100000000</sg-descriptions-item>
  <sg-descriptions-item label="Place" :span="2">Suzhou</sg-descriptions-item>
  <sg-descriptions-item label="Remarks">
    <sg-tag size="small">School</sg-tag>
  </sg-descriptions-item>
  <sg-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</sg-descriptions-item>
</sg-descriptions>
```
:::

### Customized Style

:::demo

```html
<sg-descriptions title="Customized style list" :column="3" border>
  <sg-descriptions-item label="Username" label-class-name="my-label" content-class-name="my-content">kooriookami</sg-descriptions-item>
  <sg-descriptions-item label="Telephone">18100000000</sg-descriptions-item>
  <sg-descriptions-item label="Place">Suzhou</sg-descriptions-item>
  <sg-descriptions-item label="Remarks">
    <sg-tag size="small">School</sg-tag>
  </sg-descriptions-item>
  <sg-descriptions-item label="Address" :content-style="{'text-align': 'right'}">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</sg-descriptions-item>
</sg-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |
| colon | change default props colon value of Descriptions Item   | boolean |    —  |  true |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
