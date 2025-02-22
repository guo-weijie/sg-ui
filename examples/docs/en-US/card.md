## Card
Integrate information in a card container.

### Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.
```html
<sg-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <sg-button style="float: right; padding: 3px 0" type="text">Operation button</sg-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</sg-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Simple card

The header part can be omitted.

:::demo
```html
<sg-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</sg-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`. This example also uses `sg-col` for layout.
```html
<sg-row>
  <sg-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <sg-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <sg-button type="text" class="button">Operating</sg-button>
        </div>
      </div>
    </sg-card>
  </sg-col>
</sg-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.
```html
<sg-row :gutter="12">
  <sg-col :span="8">
    <sg-card shadow="always">
      Always
    </sg-card>
  </sg-col>
  <sg-col :span="8">
    <sg-card shadow="hover">
      Hover
    </sg-card>
  </sg-col>
  <sg-col :span="8">
    <sg-card shadow="never">
      Never
    </sg-card>
  </sg-col>
</sg-row>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| header | title of the card. Also accepts a DOM passed by `slot#header` | string| — | — |
| body-style | CSS style of body | object| — | { padding: '20px' } |
| shadow | when to show card shadows | string | always / hover / never | always |
