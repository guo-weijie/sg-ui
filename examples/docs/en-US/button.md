## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

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

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

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

### Text Button

Buttons without border and background.

:::demo
```html
<sg-button type="text">Text Button</sg-button>
<sg-button type="text" disabled>Text Button</sg-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<sg-button type="primary" icon="sg-icon-edit"></sg-button>
<sg-button type="primary" icon="sg-icon-share"></sg-button>
<sg-button type="primary" icon="sg-icon-delete"></sg-button>
<sg-button type="primary" icon="sg-icon-search">Search</sg-button>
<sg-button type="primary">Upload<i class="sg-icon-upload sg-icon-right"></i></sg-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<sg-button-group>` to group your buttons.

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

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<sg-button type="primary" :loading="true">Loading</sg-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

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

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |