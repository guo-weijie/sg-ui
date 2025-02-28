## Fullscreen 全屏

[点击查看官方文档](https://mirari.cc/posts/vue-fullscreen)

### 以 API 形式使用

在Vue组件实例中，可以直接调用`this.$fullscreen`来获取全屏 api。

```javascript
this.$fullscreen.toggle()
```

### 以指令形式使用

可以使用`v-fullscreen`使任意元素拥有点击切换全屏的效果

```javascript
<button v-fullscreen>FullScreen</button>
```

### 以组件形式使用

:::demo
```html
<template>
  <div>
    <fullscreen :fullscreen.sync="fullscreen" :teleport="teleport" :page-only="pageOnly" >
      Content
    </fullscreen>
    <button type="button" @click="toggle" >Fullscreen</button>
  </div>
</template>
<script>
  export default {
    methods: {
      toggle () {
        this.fullscreen = !this.fullscreen
      },
    },
    data() {
      return {
        fullscreen: false,
        teleport: true,
        pageOnly: false,
      }
    }
  }
</script>
```
:::

### 属性
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| fullscreen-class | 全屏组件的样式类，只有全屏时才生效 | String | - | fullscreen |
| exit-on-click-wrapper | 点击全屏组件的空白部分是否退出全屏 | Boolean | false | true |
| teleport | 是否将全屏组件移动到页面的根节点下 | Boolean | false | true |
| page-only | 是否仅将当前组件撑满网页 | Boolean | true | false：将浏览器全屏 |


### 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 全屏状态发生变化时触发 | isFullscreen 当前的全屏状态 |
