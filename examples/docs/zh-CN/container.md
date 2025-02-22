## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<sg-container>`：外层容器。当子元素中包含 `<sg-header>` 或 `<sg-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<sg-header>`：顶栏容器。

`<sg-aside>`：侧边栏容器。

`<sg-main>`：主要区域容器。

`<sg-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<sg-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<sg-container>`。
:::

### 常见页面布局

:::demo
```html
<sg-container>
  <sg-header>Header</sg-header>
  <sg-main>Main</sg-main>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-main>Main</sg-main>
  <sg-footer>Footer</sg-footer>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-main>Main</sg-main>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-container>
    <sg-aside width="200px">Aside</sg-aside>
    <sg-main>Main</sg-main>
  </sg-container>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-container>
    <sg-aside width="200px">Aside</sg-aside>
    <sg-container>
      <sg-main>Main</sg-main>
      <sg-footer>Footer</sg-footer>
    </sg-container>
  </sg-container>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-container>
    <sg-header>Header</sg-header>
    <sg-main>Main</sg-main>
  </sg-container>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-container>
    <sg-header>Header</sg-header>
    <sg-main>Main</sg-main>
    <sg-footer>Footer</sg-footer>
  </sg-container>
</sg-container>

<style>
  .sg-header, .sg-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .sg-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .sg-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .sg-container {
    margin-bottom: 40px;
  }
  
  .sg-container:nth-child(5) .sg-aside,
  .sg-container:nth-child(6) .sg-aside {
    line-height: 260px;
  }
  
  .sg-container:nth-child(7) .sg-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<sg-container style="height: 500px; border: 1px solid #eee">
  <sg-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <sg-menu :default-openeds="['1', '3']">
      <sg-submenu index="1">
        <template slot="title"><i class="sg-icon-message"></i>导航一</template>
        <sg-menu-item-group>
          <template slot="title">分组一</template>
          <sg-menu-item index="1-1">选项1</sg-menu-item>
          <sg-menu-item index="1-2">选项2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="分组2">
          <sg-menu-item index="1-3">选项3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="1-4">
          <template slot="title">选项4</template>
          <sg-menu-item index="1-4-1">选项4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
      <sg-submenu index="2">
        <template slot="title"><i class="sg-icon-menu"></i>导航二</template>
        <sg-menu-item-group>
          <template slot="title">分组一</template>
          <sg-menu-item index="2-1">选项1</sg-menu-item>
          <sg-menu-item index="2-2">选项2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="分组2">
          <sg-menu-item index="2-3">选项3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="2-4">
          <template slot="title">选项4</template>
          <sg-menu-item index="2-4-1">选项4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
      <sg-submenu index="3">
        <template slot="title"><i class="sg-icon-setting"></i>导航三</template>
        <sg-menu-item-group>
          <template slot="title">分组一</template>
          <sg-menu-item index="3-1">选项1</sg-menu-item>
          <sg-menu-item index="3-2">选项2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="分组2">
          <sg-menu-item index="3-3">选项3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="3-4">
          <template slot="title">选项4</template>
          <sg-menu-item index="3-4-1">选项4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
    </sg-menu>
  </sg-aside>
  
  <sg-container>
    <sg-header style="text-align: right; font-size: 12px">
      <sg-dropdown>
        <i class="sg-icon-setting" style="margin-right: 15px"></i>
        <sg-dropdown-menu slot="dropdown">
          <sg-dropdown-item>查看</sg-dropdown-item>
          <sg-dropdown-item>新增</sg-dropdown-item>
          <sg-dropdown-item>删除</sg-dropdown-item>
        </sg-dropdown-menu>
      </sg-dropdown>
      <span>王小虎</span>
    </sg-header>
    
    <sg-main>
      <sg-table :data="tableData">
        <sg-table-column prop="date" label="日期" width="140">
        </sg-table-column>
        <sg-table-column prop="name" label="姓名" width="120">
        </sg-table-column>
        <sg-table-column prop="address" label="地址">
        </sg-table-column>
      </sg-table>
    </sg-main>
  </sg-container>
</sg-container>

<style>
  .sg-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .sg-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `sg-header` 或 `sg-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |