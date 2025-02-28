## Split 面板分割

简单的面板分割，可快速进行页面布局，支持拖拽调整大小

### 基础用法

:::demo
```html
  <sg-split split="vertical" style="height: 50vh" :default-percent="70">
    <sg-scrollbar slot="paneL" style="height: 100%; background: #00feff;">
        <div style="padding: 10px">
            测试1
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            测试2
        </div>
    </sg-scrollbar>
    <div slot="paneR" style="height: 100%;">
        <sg-split split="horizontal" style="height: 50vh">
            <div slot="paneL" style="height: 100%; background: #1d8ce0">
                <div style="padding: 10px">2</div>
            </div>
            <div slot="paneR" style="height: 100%; background: #2dc26b">
                <div style="padding: 10px">3</div>
            </div>
        </sg-split>
    </div>
</sg-split>
```
:::


### Split Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| split     | 分割方向      | string    | vertical / horizontal           | 	vertical |
| default-percent | 默认百分比    | number    | 0 - 100                         | 16 |
| min-percent | 最小百分比    | number    | 0 - 100                         | 16 |
| className | 拖拽区域的类名    | string    |                        |  |

### Split Events
| 事件名称      | 说明          | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| resize | 拖拽结束触发 | percent |
