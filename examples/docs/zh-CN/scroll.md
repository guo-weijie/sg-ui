## Scroll 滚动

[官方文档](https://chenxuan0000.github.io/vue-seamless-scroll/zh/guide)

### 基础用法

:::demo
```html
<template>
    <sg-scroll :limit-move-num="6" style="height: 200px">
        <div v-for="i in 6">
            <sg-button type="primary">测试滚动文字{{i}}</sg-button>
            <br><br>
        </div>
    </sg-scroll>
</template>
```
:::

### 垂直布局

:::demo
```html
<template>
    <sg-scroll :limit-move-num="6" :direction="2" style="height: 50px">
        <span v-for="i in 6">
            <sg-button type="primary">测试滚动文字{{i}}</sg-button>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    </sg-scroll>
</template>
```
:::

### 速度

:::demo
```html
<template>
    速度
    <sg-slider v-model="step" :min="0" :max="10" :step="0.1" /><br>
    <sg-scroll :limit-move-num="6" :direction="2" :step="step" style="height: 50px">
        <span v-for="i in 6">
            <sg-button type="primary">测试滚动文字{{i}}</sg-button>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    </sg-scroll>
</template>
<script>
    export default {

        data() {
            return {
                step: 1
            }
        }
    }
</script>
```
:::

### 单步运动停止

:::demo
```html
<template>
    <sg-scroll :limit-move-num="6" :direction="2" :step="step" :single-width="160" :wait-time="2000" style="height: 50px">
        <span v-for="i in 6">
            <sg-button type="primary">测试滚动文字{{i}}</sg-button>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    </sg-scroll>
</template>
<script>
    export default {

        data() {
            return {
                step: 1
            }
        }
    }
</script>
```
:::


### Scroll Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| step | 步长 | number | — | 0.2 |
| limit-move-num | 开始无缝滚动的数据量(建议是展示元素的数量) | number | — | 2 |
| hover-Stop | 悬停 | boolean | — | true |
| direction | 方向 | number | 0向下 1向上 2向左 3向右 | 1 |
| open-watch | 开启数据实时监控刷新dom | boolean | — | true |
| single-height | 单步运动停止的高度(默认值0是无缝不停止的滚动) | number | — | 0 |
| single-width | 单步运动停止的高度(默认值0是无缝不停止的滚动) | number | — | 0 |
| wait-time | 单步运动停止的时间(ms) | number | — | 1000 |
