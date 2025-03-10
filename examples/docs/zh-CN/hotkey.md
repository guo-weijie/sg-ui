## HotKey 热键

:::demo

```html

<p v-hotkey="{
      'space': space
      }">请敲击键盘space</p>
<script>
    export default {
        methods: {
            space() {
                this.$message.success('已经敲击键盘space')
            }
        }
    }
</script>
```
:::

使用`v-hotkey`指令可实现键盘热键监听执行事件，传入对象`key`为键盘单个按键或组合按键,`value`可以是事件名称，也可以定义`keydown`及`keyup`,例如
```
v-hotkey = "{
    'ctrl+esc': this.toggle,
    'enter': {
      keydown: this.hide,
      keyup: this.show
    }
}"
```
