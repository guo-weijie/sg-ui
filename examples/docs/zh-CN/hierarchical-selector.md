## HierarchicalSelector 多级联动选择器

多级联动选择器（HierarchicalSelector）用于按层级逐级下钻选择节点，支持单选 / 多选 / 不可勾选按层级分别配置、父子勾选联动、本地搜索与远程搜索，以及通过事件异步加载子节点。

### 用法

#### 基础用法（多选 + 点击加载 + 本地搜索）

传入初始层级数据 `initial-nodes`（省级节点），点击节点文字加载下一层子节点（`@load-children` 回调通过 `getAreaChildren` 按需返回 children）。开启 `filterable` 后支持按名称本地检索。

`nodeTypeLabels`中的`key`对应节点数据的节点类型，`level`用于排序

::: demo
```html
<template>
  <sg-hierarchical-selector
    :initial-nodes="initialNodes"
    :node-type-labels="nodeTypeLabels"
    :filterable="true"
    selection-mode="multiple"
    @change="handleChange"
    @load-children="handleLoadChildren"
  />
</template>

<script>
  export default {
    data() {
      return {
        // 江苏省（省级节点，来自 jiangsuAreaData.js 的 jiangsuProvinceNodes）
        initialNodes: this.$jiangsuArea.jiangsuProvinceNodes,
        // 省 / 市 / 区·县 三级标签，覆盖组件内置的电网默认标签
        nodeTypeLabels: [
          { key: 1, level: 1, label: '省' },
          { key: 2, level: 2, label: '市' },
          { key: 3, level: 3, label: '区/县' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('选择结果:', result);
      },
      handleLoadChildren({ node, callback }) {
        // 从 jiangsuAreaData.js 按需加载下级节点
        const children = this.$jiangsuArea.getAreaChildren(node.id);
        callback(children, children.length ? children[0].noteType : null);
      }
    }
  };
</script>
```
:::

#### 按层级配置选择模式

`selection-mode` 支持对象形式，按节点 `noteType` 分别指定每层为 `single` / `multiple` / `none`：省级、市级单选，区/县级多选，而 `none` 表示该层仅可加载不可勾选。

::: demo
```html
<template>
  <sg-hierarchical-selector
    :initial-nodes="initialNodes"
    :node-type-labels="nodeTypeLabels"
    :selection-mode="{ 1: 'single', 2: 'single', 3: 'multiple' }"
    @change="handleChange"
    @load-children="handleLoadChildren"
  />
</template>

<script>
  export default {
    data() {
      return {
        initialNodes: this.$jiangsuArea.jiangsuProvinceNodes,
        nodeTypeLabels: [
          { key: 1, level: 1, label: '省' },
          { key: 2, level: 2, label: '市' },
          { key: 3, level: 3, label: '区/县' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('选择结果:', result);
      },
      handleLoadChildren({ node, callback }) {
        const children = this.$jiangsuArea.getAreaChildren(node.id);
        callback(children, children.length ? children[0].noteType : null);
      }
    }
  };
</script>
```

:::

#### 全选联动

`cascade-select` 控制父子勾选联动（默认 `true`）：选中父节点自动选中全部子节点，部分子节点选中时父节点显示半选状态；设为 `false` 则各节点独立选择。

::: demo
```html
<template>
  <sg-hierarchical-selector
    :initial-nodes="initialNodes"
    :node-type-labels="nodeTypeLabels"
    selection-mode="multiple"
    :cascade-select="true"
    @change="handleChange"
    @load-children="handleLoadChildren"
  />
</template>

<script>
  export default {
    data() {
      return {
        initialNodes: this.$jiangsuArea.jiangsuProvinceNodes,
        nodeTypeLabels: [
          { key: 1, level: 1, label: '省' },
          { key: 2, level: 2, label: '市' },
          { key: 3, level: 3, label: '区/县' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('选择结果:', result);
      },
      handleLoadChildren({ node, callback }) {
        const children = this.$jiangsuArea.getAreaChildren(node.id);
        callback(children, children.length ? children[0].noteType : null);
      }
    }
  };
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| initial-nodes | 初始层级数据（第一层节点数组） | array | — | `[]` |
| node-type-labels | 节点类型标签映射 `{ key, level, label }[]`，`key` 对应节点 `noteType` | array | — | 内置默认映射（电网语义，非电网业务需覆盖） |
| selection-mode | 选择模式，字符串全局配置或按 `noteType` 配置的对象 | string / object | `single` / `multiple` / `none` | `single` |
| cascade-select | 父子勾选联动，布尔全局配置或按层级配置的对象 | boolean / object | `true` / `false` | `true` |
| filterable | 是否显示本地搜索框 | boolean | `true` / `false` | `false` |
| remote-search | 是否启用远程搜索（回车触发 `@remote-search` 事件） | boolean | `true` / `false` | `false` |
| auto-select-first | 是否默认选中顶级节点的第一项 | boolean | `true` / `false` | `false` |


### Events

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 选择值变化时触发 | `changeData`：包含 `selectedNodes`（完整路径节点）、`clickedNode`、`checkedNodes`（当前层已勾选节点，多选用） |
| load-children | 点击节点需要加载子节点时触发 | `{ node, levelIndex, callback }`：`callback(children, noteType)` 回传子节点与节点类型 |
| remote-search | 启用远程搜索且回车触发时调用 | `(keyword, callback)`：`callback(treeData)` 成功 / `callback(null, error)` 失败 |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| refreshNodeChildren | 强制刷新指定节点的子节点（覆盖缓存） | `nodeId: string` |
| clearChildrenCache | 清空子节点缓存（不传则清空全部） | `nodeId?: string` |
