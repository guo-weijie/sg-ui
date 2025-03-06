## Clamp 文字显示

### 基础用法

在使用`sg-clamp`组件`autoresize`属性时必须指定宽高，否则会一直渲染，虽然做了防抖但是依旧会造成不必要的性能开销
:::demo

```html
<template>
    <sg-clamp :max-lines="maxLines" show-tip autoresize style="width: 500px; height: 100px" >
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动
    </sg-clamp>
</template>
<script>
  export default {
    data() {
      return {
        maxLines: 3
      };
    }
  };
</script>
```
:::

### 最大行数

:::demo

```html
<template>
    最大行数 <sg-input-number v-model="maxLines"/><br><br>
    <sg-clamp :max-lines="maxLines" show-tip autoresize style="width: 500px; height: 100px">
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动
    </sg-clamp>
</template>
<script>
  export default {
    data() {
      return {
        maxLines: 3
      };
    }
  };
</script>
```
:::

### 插槽

:::demo

```html
<template>
    最大行数 <sg-input-number v-model="maxLines"/><br><br>
    <sg-clamp :max-lines="maxLines" show-tip style="width: 500px;" effect="light" :expanded="expanded">
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动
        <sg-button type="warning" slot="before" size="mini" round>推荐</sg-button>
        <sg-button type="info" slot="after" size="mini" @click="change">切换</sg-button>
    </sg-clamp>
</template>
<script>
  export default {
    data() {
      return {
        maxLines: 3,
          expanded: false
      };
    },
      methods: {
          change() {
              this.expanded = !this.expanded
          }
      }
  };
</script>
```
:::

### Clamp 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tag | 标签 | String | — | div |
| autoresize | 自动调整大小 | Boolean | — | false |
| max-lines | 最大行数 | Number | — | — |
| max-height | 最大高度 | Number / String | — | — |
| ellipsis | 省略符合 | String | — | … |
| expanded | 扩展(显示全部) | Boolean | — | false |
| show-tip | 显示提示 | Boolean | — | false |
| placement | 位置 | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | top |
| effect | 提示效果 | String | light / dark | dark |
| value / v-model | 提示框是否默认展示 | Boolean | — | false |
| offset | 出现位置的偏移量 | Number | — | 0 |
| transition | 过渡效果 | String | — | sg-fade-in-linear |
| visible-arrow | 是否显示 Tooltip 箭头 | Boolean | — | true |
| open-delay | 延迟出现，单位毫秒 | Number | 0 |
| popper-class | 为 Tooltip 的 popper 添加类名 | String | - |
| enterable | 鼠标是否可进入到 tooltip 中 | Boolean | — | true |
| hide-after | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏 | Number | - | 0 |
| tabindex | Tooltip 组件的 tabindex | Number | - | 0 |

### Clamp 插槽
| name            | 说明          |
|-----------------|-------------- |
| default            | 显示的文字 |
| before            | 文字之前显示内容 |
| after            | 文字之后显示内容 |
