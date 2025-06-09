## SelectTree 树形下拉框

基于`sg-select`和`sg-tree`封装的树形下拉框组件`

### 用法

#### 单选

:::  demo
```html
<template>
  <sg-select-tree
    v-model="selectedNode"
    :tree-data="treeData"
    :default-props="defaultProps"
    @node-click="handleNodeClick"
  />
</template>

<script>
  export default {
    data() {
      return {
        selectedNode: undefined,
        defaultProps: {
          children: "children",
          label: "label",
        },
        treeData: [
          {
            id: 1,
            label: "一级 1",
            children: [
              {
                id: 11,
                label: "二级 1-1",
                children: [
                  {
                    id: 111,
                    label: "三级 1-1-1",
                  },
                  {
                    id: 112,
                    label: "三级 1-1-2",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 21,
                label: "二级 2-1",
              },
              {
                id: 22,
                label: "二级 2-2",
              },
            ],
          },
          {
            id: 3,
            label: "一级 3",
            children: [
              {
                id: 31,
                label: "二级 3-1",
              },
              {
                id: 32,
                label: "二级 3-2",
              },
            ],
          },
        ],
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log("选中的节点数据:", data);
      },
    }
  }
</script>
```
:::

####  多选

:::  demo
```html
<template>
  <sg-select-tree
    v-model="selectedNode"
    :tree-data="treeData"
    :default-props="defaultProps"
    @node-click="handleNodeClick"
    multiple
  />
</template>

<script>
  export default {
    data() {
      return {
        selectedNode: [],
        defaultProps: {
          children: "children",
          label: "label",
        },
        treeData: [
          {
            id: 1,
            label: "一级 1",
            children: [
              {
                id: 11,
                label: "二级 1-1",
                children: [
                  {
                    id: 111,
                    label: "三级 1-1-1",
                  },
                  {
                    id: 112,
                    label: "三级 1-1-2",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 21,
                label: "二级 2-1",
              },
              {
                id: 22,
                label: "二级 2-2",
              },
            ],
          },
          {
            id: 3,
            label: "一级 3",
            children: [
              {
                id: 31,
                label: "二级 3-1",
              },
              {
                id: 32,
                label: "二级 3-2",
              },
            ],
          },
        ],
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log("选中的节点数据:", data);
      },
    }
  }
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model     | 组件绑定值           | string, number, array | — | - |
| multiple | 是否多选 | boolean | true / false | false |
| filterable | 是否启用过滤功能 | boolean | true / false | true |
| treeData | 树节点数据 | array | — | — |
| defaultProps | 配置选项，具体看下表 | object | — | - |

### props
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| label    | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | —    | —    |
| children | 指定子树为节点对象的某个属性值 | string | —    | —    |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 选择值改变时触发 | 当前值 |
| node-click | 单选模式时点击树节点触发 | 点击树节点的数据对象 |
