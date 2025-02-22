## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<sg-empty description="description"></sg-empty>
```
:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<sg-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></sg-empty>
```
:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<sg-empty :image-size="200"></sg-empty>
```
:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo
```html
<sg-empty>
  <sg-button type="primary">Button</sg-button>
</sg-empty>
```
:::

### Empty Attributes
| Attribute       | Description      | Type         | Acceptable Value    | Default Value   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| image          | image URL       | string  |          —             |    —     |
| image-size    | image size (width)  | number | — |    —  |
| description  | description    | string  |    —  |  — |

### Empty Slots

| Name | Description |
|------|--------|
| default | Custom bottom content  |
| image | Custom image     |
| description | Custom description     |
