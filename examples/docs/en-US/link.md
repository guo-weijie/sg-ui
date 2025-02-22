## Link

Text hyperlink

### Basic

Basic text link
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

### Disabled

Disabled state of link
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

### Underline

Underline of link
:::demo

```html
<div>
  <sg-link :underline="false">Without Underline</sg-link>
  <sg-link>With Underline</sg-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <sg-link icon="sg-icon-edit">Edit</sg-link>
  <sg-link>Check<i class="sg-icon-view sg-icon--right"></i> </sg-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
