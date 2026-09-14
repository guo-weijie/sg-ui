## HierarchicalSelector

HierarchicalSelector is a multi-level cascading selector. It drills down level by level, supporting per-level `single` / `multiple` / `none` selection, parent-child cascade selection, local and remote search, and async child loading via events. 

### Usage

#### Basic (multiple + click-to-load + local search)

Pass `initial-nodes` as the first level (the province node). Clicking a node label loads its children via the `@load-children` callback (`getAreaChildren` returns children on demand). With `filterable` enabled, local search by name is available.

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
        // Jiangsu province (top-level node, from jiangsuAreaData.js's jiangsuProvinceNodes)
        initialNodes: this.$jiangsuArea.jiangsuProvinceNodes,
        // Province / City / District labels, overriding the built-in grid default
        nodeTypeLabels: [
          { key: 1, level: 1, label: 'Province' },
          { key: 2, level: 2, label: 'City' },
          { key: 3, level: 3, label: 'District' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('selection:', result);
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

#### Per-level selection mode

`selection-mode` accepts an object keyed by node `noteType` to set each level to `single` / `multiple` / `none`. `none` means the level is loadable but not checkable.

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
          { key: 1, level: 1, label: 'Province' },
          { key: 2, level: 2, label: 'City' },
          { key: 3, level: 3, label: 'District' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('selection:', result);
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

#### Cascade selection

`cascade-select` controls parent-child cascade (default `true`): checking a parent auto-checks all children, and a partially checked parent shows an indeterminate state. Set `false` for independent selection.

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
          { key: 1, level: 1, label: 'Province' },
          { key: 2, level: 2, label: 'City' },
          { key: 3, level: 3, label: 'District' }
        ]
      };
    },
    methods: {
      handleChange(result) {
        console.log('selection:', result);
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

| Attribute | Description | Type | Accepted values | Default |
| ---- | ---- | ---- | ---- | ---- |
| initial-nodes | First-level node data | array | — | `[]` |
| node-type-labels | Node type label mapping `{ key, level, label }[]`, `key` maps to node `noteType` | array | — | built-in default (grid semantics, override for non-grid) |
| selection-mode | Selection mode, string for global or object keyed by `noteType` | string / object | `single` / `multiple` / `none` | `single` |
| cascade-select | Parent-child cascade selection, boolean for global or object per level | boolean / object | `true` / `false` | `true` |
| filterable | Whether to show the local search box | boolean | `true` / `false` | `false` |
| remote-search | Whether to enable remote search (fires `@remote-search` on enter) | boolean | `true` / `false` | `false` |
| auto-select-first | Whether to pre-select the first top-level node | boolean | `true` / `false` | `false` |


### Events

| Event | Description | Parameters |
| ---- | ---- | ---- |
| change | Triggered when selection changes | `changeData`: `selectedNodes` (full path), `clickedNode`, `checkedNodes` (current level checked nodes, for multiple) |
| load-children | Triggered when a node needs its children | `{ node, levelIndex, callback }`: call `callback(children, noteType)` |
| remote-search | Triggered on enter when remote search is enabled | `(keyword, callback)`: `callback(treeData)` on success / `callback(null, error)` on failure |

### Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| refreshNodeChildren | Force-refresh a node's children (overrides cache) | `nodeId: string` |
| clearChildrenCache | Clear children cache (all if `nodeId` omitted) | `nodeId?: string` |
