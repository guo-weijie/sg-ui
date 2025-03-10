<!--
 * @Description: 
 * @Author: 高淼
 * @LastEditors: 高淼
 * @LastEditTime: 2022-05-10 10:12:38
-->
## WaterMark 水印

### 基本用法

:::demo
```html
<sg-watermark :show="show" :text="text"/>

<sg-form label-width="120px">
    <sg-form-item label="显示/隐藏水印">
        <sg-button @click="show = !show">{{show ? '隐藏' : '显示'}}</sg-button>
    </sg-form-item>
    <sg-form-item label="水印内容">
        <sg-input v-model="text" clearable/>
    </sg-form-item>
</sg-form>
<script>
    export default {
        data() {
            return{
                show: true,
                text: 'SG-UI'
            }
        }
    }
</script>
```
:::

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 水印文字 | string | — | 水印内容 |
| angle | 角度 | number | — | 25 |
| color | 颜色 | string | — | 'rgba(0, 0, 0, .15)' |
| font-size | 文字大小 | string | — | 16px |
| top | 距离顶部 | number | — | 70 |
| show | 是否显示 | boolean | — | false |
