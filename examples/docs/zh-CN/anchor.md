## Anchor 导航锚点

### 基本用法
通过锚点来定位和快速到达想要看到的内容
:::demo
```html
<sg-anchor scroll-container-id="scroll-content-md">
  <sg-anchor-item href="#href1">
    <div class="itemClass">
      <i class="sg-icon-chat-round"></i>
    </div>
  </sg-anchor-item>
  <sg-anchor-item href="#href2">
    <div class="itemClass">
      <i class="sg-icon-s-help"></i>
    </div>
  </sg-anchor-item>
  <sg-anchor-item href="#href3">
    <div class="itemClass">
      <i class="sg-icon-s-order"></i>
    </div>
  </sg-anchor-item>
  <sg-anchor-item href="#href4">
    <div class="itemClass">
      <i class="sg-icon-warning-outline"></i>
    </div>
  </sg-anchor-item>
</sg-anchor>
<div id="scroll-content-md" style="height:60vh;overflow-y:scroll;">
  <div id="href1">
    <h1 style="margin-top:0">基础用法</h1>
    <p>·通过sg-anchor来包含sg-anchor-item</p>
    <p>·sg-anchor需要传入需要监听滚动的容器id</p>
    <p>·sg-anchor-item的href属性传入需要连接的容器id</p>
    <div style="height: 200px;background-color: #FAAD14;"></div>
  </div>
  <div id="href2">
    <h1>自定义样式</h1>
    <p>·锚点里可以自定义样式</p>
    <p>·sg-anchor，sg-anchor-item可以自定义html</p>
    <p>·锚点本身没有样式，需要开发时写入自定义样式</p>
    <div style="height: 200px;background-color: #FAAD14;"></div>
  </div>
  <div id="href3">
    <h1>锚点属性</h1>
    <p>·锚点整体样式类为`sg-anchor`</p>
    <p>·锚点整体内单个锚点样式类为`sg-anchor-item`</p>
    <p>·当锚点被选中或者滚动位置重合时，类`sg-anchor-item`会添加上`isActive`的类</p>
    <p>·此时你可以自定义选中样式</p>
    <div style="height: 200px;background-color: #FAAD14;"></div>
  </div>
  <div id="href4">
    <h1>注意事项</h1>
    <p>·锚点是基于滚轮来实现功能的</p>
    <p>·所以监听的容器需要设置为可滚动</p>
    <p>·所指向的目标容器需要在滚动容器内部</p>
    <div style="height: 200px;background-color: #FAAD14;"></div>
  </div>
  <div id="href5" style="height:1000px;">
    <h1>无用内容</h1>
    <p style="color: red;">此处没锚点</p>
  </div>
  <div style="height: 200px;background-color: #FAAD14;"></div>
</div>

<style>
  .sg-anchor {
      display: inline-block;
      position: absolute;
      overflow: hidden;
      right: 80px;
  }

  .sg-anchor .itemClass {
      width: 40px;
      height: 40px;
      text-align: center;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 black;
      display: inline-block;
      margin-bottom: 5px;
  }

  .sg-anchor .itemClass i{
      font-size: 30px;
      margin-top: 6px;
      color: #009999;
  }
  .sg-anchor .sg-anchor-item .itemClass:hover {
      background-color: #18B6A4;
  }

  .sg-anchor .sg-anchor-item.isActive .itemClass{
      background-color: #009999;
  }

  .sg-anchor .sg-anchor-item .itemClass:hover i,
  .sg-anchor .sg-anchor-item.isActive .itemClass i{
      color: #fff;
  }
</style>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| scroll-container-id     | 需要监听的滚动容器的id           | string | — | — |
| href | 该锚点指向的目标容器id | string | - | - |
