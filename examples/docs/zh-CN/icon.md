## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `sg-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="sg-icon-edit"></i>
<i class="sg-icon-share"></i>
<i class="sg-icon-delete"></i>
<sg-button type="primary" icon="sg-icon-search">搜索</sg-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sg-icon-' + name"></i>
      <span class="icon-name">{{'sg-icon-' + name}}</span>
    </span>
  </li>
</ul>

### 补充图标集合

<ul class="icon-list">
  <li v-for="name in $iconfont" :key="name">
    <span>
      <i :class="'iconfont-' + name"></i>
      <span class="icon-name">{{'iconfont-' + name}}</span>
    </span>
  </li>
</ul>