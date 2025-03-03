## InputIp ip输入框

通过键盘输入ipv4地址

### 基础用法

:::demo 通过`v-model`来绑定数据
```html
<div style="width: 200px;">
  <sg-input-ip v-model="ip"/>
</div>
<script>
  export default {
    data() {
      return {
        ip: '',
      }
    }
  }
</script>
```
:::

### 禁用状态

:::demo 通过`disabled`属性指定是否禁用`input-ip`组件
```html
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip disabled/>
</div>
```
:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框
```html
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip clearable/>
</div>
```
:::

### 只读

:::demo 通过`readonly`属性指定是否为只读
```html
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip v-model="ip" readonly/>
</div>
<script>
  export default {
    data() {
      return {
        ip: '123.231.152.123',
      }
    }
  }
</script>
```
:::

### 尺寸

:::demo 通过`size`属性指定输入框的尺寸，可选值为`medium`、`small`、`mini`
```html
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip v-model="ip"/>
</div>
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip v-model="ip" size="medium"/>
</div>
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip v-model="ip" size="small"/>
</div>
<div style="width: 200px;margin-bottom:20px;">
  <sg-input-ip v-model="ip" size="mini"/>
</div>
<script>
  export default {
    data() {
      return {
        ip: '123.231.152.123'
      }
    }
  }
</script>
```
:::

### 返回格式

:::demo 使用`formatStyle`属性即可控制返回值的格式, 支持输入`node、noNode`, 默认为`node`。 `node`返回格式为`xxx.xxx.xxx.xxx`, `noNode`返回格式为`xxxxxxxxxxxx`此格式不足字符用0填充
```html
<div style="width: 200px;">
  <sg-input-ip v-model="ip"/>
</div>
 &nbsp;返回值为：<span>{{ip}}</span>
<div style="width: 200px;margin-top:20px;">
  <sg-input-ip v-model="ipNoNode" :formatStyle="'noNode'"/>
</div>
 &nbsp;返回值为：<span>{{ipNoNode}}</span>
<script>
  export default {
    data() {
      return {
        ip: '',
        ipNoNode: ''
      }
    }
  }
</script>
```
:::

### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|v-model|绑定数据|String|||
|disabled|是否禁用|Boolean|true/false|false|
|clearable|是否可清空|Boolean|true/false|false|
|readonly|是否为只读|Boolean|true/false|false|
|size|输入框尺寸|String|medium/small/mini|medium|
|formatStyle|设置返回值类型|String|node/noNode|node|


### 事件
| 事件名称      | 说明          | 回调参数      |
|---------- |-------------- |---------- |
|clear|在点击由`clearable`属性生成的清空按钮时触发||
