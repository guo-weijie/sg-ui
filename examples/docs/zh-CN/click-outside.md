## clickoutside 点击外部

:::demo

```html

<div style="width: 200px; height: 200px; background: var(--color-primary)"
     v-clickoutside="clickoutside"
     @click="click">点击div内部和外部有不同效果哦</div>
<script>
    export default {
        methods: {
            clickoutside() {
                this.$message.success('点击外部')
            },
            click() {
                this.$message.error('点击内部')
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
