## Number 数字

[点击访问官方文档](https://www.npmjs.com/package/vue-count-to)

### 基本用法

:::demo

```html
<h1>
    <sg-number
        :startVal="startValue"
        :endVal="endValue"
        :duration="3000"
        :decimals="2"
        separator="-"
        prefix="￥"
        suffix="元"/>
    <br>
    <br>
    <sg-button type="primary" @click="add">增加</sg-button>
</h1>
<script>
    export default {
        data() {
            return {
                startValue: 0,
                endValue: 123456789.987632
            }
        },
        methods: {
            add() {
                this.startValue = this.endValue
                this.endValue = this.endValue + 10000
            }
        }
    }
</script>

```

:::

### 缓动函数

:::demo
```html
<h1>
    <sg-number
        :startVal="startValue"
        :endVal="endValue"
        :duration="3000"
        :decimals="2"
        prefix="￥ "
        :useEasing='true'
        :easingFn='easingFn'
        suffix=" 元"/>
    <br>
    <br>
    <sg-button type="primary" @click="add">增加</sg-button>
</h1>
<script>
    export default {
        data() {
            return {
                startValue: 0,
                endValue: 123456789.987632
            }
        },
        methods: {
            easingFn(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            add() {
                this.startValue = this.endValue
                this.endValue = this.endValue + 10000
            }
        }
    }
</script>
```
:::


### 属性
| 参数      | 说明          | 类型      | 可选值  |  默认值 |
|---------- |-------------- |-------  |------ |---- |
| startVal | 起始值    | Number| -  | 0 |
| endVal | 终止值    | Number| -  | 2017 |
| duration     | 动画时长    | Number| -  | 4000 |
| autoplay |  是否自动播放 | Boolean | -  | true |
| decimal | 分割小数 | String   | -  | . |
| decimals | 小数显示位数 | Number   | -  | 0 |
| separator | 整数部分分隔符 | String | - | , |
| prefix | 前缀 | String | - | '' |
| suffix | 后缀 | String | - | '' |
| useEasing | 是否使用缓动函数 | Boolean | - | true |
| easingFn | 缓动函数 (t: number, b: number, c: number, d: number) => number | Function | - | - |

**注意: 当`autoplay:true`时，`startVal`或`endVal`更改时，将自动开始执行**

### easingFn 函数
| 参数      | 说明          | 类型      | 可选值  |  默认值 |
|---------- |-------------- |-------  |------ |---- |
| t（time） | 已执行时间，从动画开始到当前的时间差。单位：毫秒 | Number | -  | - |
| b（beginning value） | 起始值，即组件`startVal`属性值 | Number | -  | - |
| c（change in value） | 变化量，等于`endVal - startVal` | Number | -  | - |
| d（duration） | 总持续时间，即组件`duration`属性值。单位：毫秒 | Number | -  | - |


### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- | --------|
| mountedCallback | 挂载完成后触发 | - |
| start | 开始执行动画时触发 | - |
| pause | 暂停动画时触发 | - |
| reset | 重置计数 | - |
