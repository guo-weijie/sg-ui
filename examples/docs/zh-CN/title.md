## Title 头部

### 基本用法

:::demo

```html

<sg-card>
    <sg-title :title="title"></sg-title>
</sg-card>
<br>

<sg-card>
    <sg-title :title="title" border-position="top" font-bold>
        <div>
            <button type="button" class="sg-dialog__headerbtn">
                <i class="sg-dialog__close sg-icon sg-icon-close"></i>
            </button>
        </div>
    </sg-title>
</sg-card>

<br>

<sg-card>
    <sg-title :title="title" iconName='iconfont-table' :content="info" border-position="null">
        <div>
            <button type="button" class="sg-dialog__headerbtn">
                <i class="sg-dialog__close sg-icon sg-icon-close"></i>
            </button>
        </div>
    </sg-title>
</sg-card>

<br>

<sg-card>
    <sg-title :title="title" isLink linkClassName='linkClass' @onTitle='clickTitle'>
        <div slot="content">
            <sg-button size="mini" type="primary" @click='testFn'>测试</sg-button>
        </div>
    </sg-title>
</sg-card>
<script>
    export default {
        data() {
            return {
                title: '我是标题',
                info: `<h1 style='color: red'><i>通知</i></h1>`
            }
        },
        methods: {
            testFn(){
                this.$message({
                    message: '点击测试按钮',
                    type: 'success'
                });
            },
            clickTitle(){
                this.$message({
                    message: '点击标题',
                    type: 'success'
                });
            }
        }
    };
</script>
```

:::


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------  |-------- |
| title     | 标题，也可通过具名 slot （见下表）传入 | String    | — | — |
| iconName  | 标题前面显示图标的名称，传值显示，不传不显示。显示图标的话，会自动隐藏竖线 | String | 详见 icon 图标 |
| content | 提示框显示的内容 | String | — | — |
| placement | Tooltip 的出现位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top-start |
| effect | 默认提供的主题 | String | dark/light | dark |
| isLink | 是否为链接，是否可以点击 | Boolean | true/false | false |
| linkClassName | 为链接时自定义样式类名 | String | - | - |
| showLine | 是否显示标题前的竖线 | Boolean | true/false | true |
| borderPosition | 边框位置 | String | bottom/top | bottom |
| fontBold | 文字加粗 | Boolean | true/false | false |

### 事件
| 事件名称 | 说明 | 回调参数 |
|--------|--------|--------|
| onTitle | 点击标题时触发 | - |


### 插槽
| name | 说明 |
|------|--------|
| left | 标题区的内容 |
| default | 标题右侧区域的内容 |
