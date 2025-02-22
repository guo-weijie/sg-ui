## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

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

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

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

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

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

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

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

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
