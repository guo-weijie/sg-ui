## TreeSelect 树形下拉框

基于`vue-treeselect`的树形下拉框 [查看官方文档](https://vue-treeselect.js.org/)

### 基本特征

:::demo
```html
<template>
  <sg-tree-select :multiple="true" :options="options" placeholder="Select your favourite(s)..." v-model="value" class="marginBtm"  />
  选中值：{{value}}
</template>
<script>
  export default {
    data: () => ({
      value: [],
      options: [
        {
          id: 'fruits',
          label: 'Fruits',
          children: [
            {
              id: 'apple',
              label: 'Apple 🍎',
              isNew: true
            },
            {
              id: 'grapes',
              label: 'Grapes 🍇'
            },
            {
              id: 'pear',
              label: 'Pear 🍐'
            },
            {
              id: 'strawberry',
              label: 'Strawberry 🍓'
            },
            {
              id: 'watermelon',
              label: 'Watermelon 🍉'
            }
          ]
        },
        {
          id: 'vegetables',
          label: 'Vegetables',
          children: [
            {
              id: 'corn',
              label: 'Corn 🌽'
            },
            {
              id: 'carrot',
              label: 'Carrot 🥕'
            },
            {
              id: 'eggplant',
              label: 'Eggplant 🍆'
            },
            {
              id: 'tomato',
              label: 'Tomato 🍅'
            }
          ]
        }
      ]
    })
  };
</script>
```
:::

### 尺寸

:::demo
```html
<template>
  <sg-tree-select :multiple="true" :options="options" placeholder="Select your favourite(s)..." v-model="value" class="marginBtm" />

  <sg-tree-select
    :multiple="true"
    :options="options"
    placeholder="Select your favourite(s)..."
    v-model="value"
    size="medium"
    class="marginBtm"
  />
  <sg-tree-select
    :multiple="true"
    :options="options"
    placeholder="Select your favourite(s)..."
    v-model="value"
    size="small"
    class="marginBtm"
  />

  <sg-tree-select
    :multiple="true"
    :options="options"
    placeholder="Select your favourite(s)..."
    v-model="value"
    size="mini"
  />
</template>
<script>
  export default {
    data: () => ({
      value: null,
      options: [
        {
          id: 'fruits',
          label: 'Fruits',
          children: [
            {
              id: 'apple',
              label: 'Apple 🍎',
              isNew: true
            },
            {
              id: 'grapes',
              label: 'Grapes 🍇'
            },
            {
              id: 'pear',
              label: 'Pear 🍐'
            },
            {
              id: 'strawberry',
              label: 'Strawberry 🍓'
            },
            {
              id: 'watermelon',
              label: 'Watermelon 🍉'
            }
          ]
        },
        {
          id: 'vegetables',
          label: 'Vegetables',
          children: [
            {
              id: 'corn',
              label: 'Corn 🌽'
            },
            {
              id: 'carrot',
              label: 'Carrot 🥕'
            },
            {
              id: 'eggplant',
              label: 'Eggplant 🍆'
            },
            {
              id: 'tomato',
              label: 'Tomato 🍅'
            }
          ]
        }
      ]
    })
  };
</script>
```
:::

### 更多功能

:::demo
```html
<template>
  <div class="marginBtm">
    <sg-tree-select
      :multiple="multiple"
      :clearable="clearable"
      :searchable="searchable"
      :disabled="disabled"
      :open-on-click="openOnClick"
      :open-on-focus="openOnFocus"
      :clear-on-select="clearOnSelect"
      :close-on-select="closeOnSelect"
      :always-open="alwaysOpen"
      :append-to-body="appendToBody"
      :limit="3"
      :max-height="200"
      :options="options"
      v-model="value"
      placeholder="Select your favourite(s)..."
    />
  </div>
   选中值：{{value}}

  <p>
    <label><sg-checkbox type="checkbox" v-model="multiple">多选</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="clearable">清空</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="searchable">可检索</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="disabled">禁用</sg-checkbox></label>
  </p>
  <p>
    <label><sg-checkbox type="checkbox" v-model="openOnClick">点击打开</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="openOnFocus">聚焦打开</sg-checkbox></label>
  </p>
  <p>
    <label><sg-checkbox type="checkbox" v-model="clearOnSelect">清空检索条件</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="closeOnSelect">选择后关闭</sg-checkbox></label>
  </p>
  <p>
    <label><sg-checkbox type="checkbox" v-model="alwaysOpen">始终显示</sg-checkbox></label>
    <label><sg-checkbox type="checkbox" v-model="appendToBody">添加到 body 标签</sg-checkbox></label>
  </p>
</template>
<script>
    export default {
        data: () => ({
            value: null,
            multiple: false,
            clearable: false,
            searchable: false,
            disabled: false,
            openOnClick: false,
            openOnFocus: false,
            clearOnSelect: false,
            closeOnSelect: false,
            alwaysOpen: false,
            appendToBody: false,
            options: [ {
                id: 'fruits',
                label: 'Fruits',
                children: [ {
                    id: 'apple',
                    label: 'Apple 🍎',
                    isNew: true,
                }, {
                    id: 'grapes',
                    label: 'Grapes 🍇',
                }, {
                    id: 'pear',
                    label: 'Pear 🍐',
                }, {
                    id: 'strawberry',
                    label: 'Strawberry 🍓',
                }, {
                    id: 'watermelon',
                    label: 'Watermelon 🍉',
                } ],
            }, {
                id: 'vegetables',
                label: 'Vegetables',
                children: [ {
                    id: 'corn',
                    label: 'Corn 🌽',
                }, {
                    id: 'carrot',
                    label: 'Carrot 🥕',
                }, {
                    id: 'eggplant',
                    label: 'Eggplant 🍆',
                }, {
                    id: 'tomato',
                    label: 'Tomato 🍅',
                } ],
            } ],
        })
    }
</script>
```
:::

### 延时加载

如果您有大量深度嵌套的选项，则可能只希望在初始加载时加载最顶层的选项，而仅在需要时加载其余选项。您可以通过执行以下步骤来实现：

通过设置声明一个卸载的分支节点 `children: null`

添加 `loadOptions` 方法
每当卸载的分支节点被扩展时， `loadOptions({ action, parentNode, callback, instanceId })` 都会被调用，然后您就可以执行从远程服务器请求数据的作业
:::demo

```html
<template>
  <sg-tree-select :multiple="true" :options="options" :load-options="loadOptions" placeholder="Try expanding any folder option..." v-model="value" />
</template>
<script>
  export default {
    data: () => ({
      value: [],
      options: [{
        id: 'success',
        label: 'With children',
        // Declare an unloaded branch node.
        children: null,
      }, {
        id: 'no-children',
        label: 'With no children',
        children: null,
      }, {
        id: 'failure',
        label: 'Demonstrates error handling',
        children: null,
      }],
    }),
    methods: {
      simulateAsyncOperation(fn) {
        setTimeout(fn, 2000)
      },
      loadOptions({
        action,
        parentNode,
        callback
      }) {
        // Typically, do the AJAX stuff here.
        // Once the server has responded,
        // assign children options to the parent node & call the callback.
        if (action === 'LOAD_CHILDREN_OPTIONS') {
          switch (parentNode.id) {

            case 'success': {
              this.simulateAsyncOperation(() => {
                parentNode.children = [{
                  id: 'child',
                  label: 'Child option',
                }]
                callback()
              })
              break;
            }
            case 'no-children': {
              this.simulateAsyncOperation(() => {
                parentNode.children = []
                callback()
              })
              break;
            }
            case 'failure': {
              this.simulateAsyncOperation(() => {
                callback(new Error('Failed to load options: network error.'))
              })
              break;
            }
            default:
              /* empty */
          }
        }
      }
    }
  }
</script>
```

:::
还可以延迟延迟加载根级别选项。如果最初没有注册任何选项 `（options: null）` ，则sg-tree-select将 `loadOptions({ action, callback, instanceId })` 在组件安装后通过调用来尝试加载根选项。

### 异步搜索

支持根据用户类型动态加载和更改整个选项列表。默认情况下，sg-tree-select将缓存每个AJAX请求的结果，因此用户可以减少等待时间。
:::demo

```html
<template>
  <sg-tree-select :multiple="true" :async="true" :load-options="loadOptions" />
</template>
<script>
  export default {
    data: () => ({
      value: [],
      options: [{
        id: 'success',
        label: 'With children',
        // Declare an unloaded branch node.
        children: null,
      }, {
        id: 'no-children',
        label: 'With no children',
        children: null,
      }, {
        id: 'failure',
        label: 'Demonstrates error handling',
        children: null,
      }],
    }),
    methods: {
      simulateAsyncOperation(fn) {
        setTimeout(fn, 2000)
      },
      loadOptions({
        action,
        searchQuery,
        callback
      }) {
        if (action === 'ASYNC_SEARCH') {
          this.simulateAsyncOperation(() => {
            const options = [1, 2, 3, 4, 5].map(i => ({
              id: `${searchQuery}-${i}`,
              label: `${searchQuery}-${i}`,
            }))
            callback(null, options)
          })
        }
      }
    }
  }
</script>
```

:::

### 平面模式和排序值

在前面的所有示例中，我们使用了默认的非平坦模式`sg-tree-select`，这意味着：

每当分支节点被检查时，其所有子节点也将被检查
每当分支节点检查所有子节点时，分支节点本身也将被检查
有时我们不需要那种机制，并且希望分支节点和叶子节点不会相互影响。在这种情况下，应使用平面模式，如下所示。

如果要控制所选选项的显示顺序，请使用`sortValueBy`道具。该道具有三个选择：

`ORDER_SELECTED` （默认）-选择订单
`LEVEL` - 选择级别: C 🡒 BB 🡒 AAA
`INDEX` - 选项索引: AAA 🡒 BB 🡒 C
:::demo

```html
<template>
  <sg-tree-select :multiple="true" :options="options" :flat="true" :sort-value-by="sortValueBy" :default-expand-level="1" placeholder="Try selecting some options." v-model="value" class="marginBtm" />
  选中值：{{value}}
  <p><strong>Sort value by:</strong></p>
  <p class="options">
    <sg-radio label="ORDER_SELECTED" v-model="sortValueBy">Order selected</sg-radio>
    <sg-radio label="LEVEL" v-model="sortValueBy">Level</sg-radio>
    <sg-radio label="INDEX" v-model="sortValueBy">Index</sg-radio>
  </p>
</template>
<script>
  export default {
    data: () => ({
      sortValueBy: 'ORDER_SELECTED',
      value: [],
      options: [{
          id: 'A',
          label: 'A',
          // Declare an unloaded branch node.
          children: [{
            id: 'AA',
            label: 'AA',
            // Declare an unloaded branch node.
            children: [{
              id: 'AAA',
              label: 'AAA'
            }]
          }]
        },
        {
          id: 'B',
          label: 'B',
          children: [{
            id: 'BB',
            label: 'BB',
            children: [{
              id: 'BBB',
              label: 'BBB'
            }]
          }]
        },
        {
          id: 'C',
          label: 'C',
          children: [{
            id: 'CC',
            label: 'CC',
            children: [{
              id: 'CCC',
              label: 'CCC'
            }]
          }]
        }
      ]
    })
  }
</script>
```

:::

### 阻止值合并

对于非固定和多选模式，如果选中了分支节点及其所有后代，则`sg-tree-select`会将它们组合到值数组中的单个项目中，如以下示例所示。通过使用`valueConsistsOf`道具，您可以更改该行为。该道具有四个选项：

`ALL` - 选中的所有节点都将包含在 value 数组中

`BRANCH_PRIORITY` （默认）-如果选中了分支节点，则其所有后代将被排除在value 数组之外

`LEAF_PRIORITY` - 如果选中了分支节点，则此节点本身及其分支后代将从value阵列中排除，但其叶后代将包括在内

`ALL_WITH_INDETERMINATE` -选中的任何节点将包括在value 数组中，另外还有不确定的节点
:::demo

```html
<template>
  <sg-tree-select :multiple="true" :options="options" :value-consists-of="valueConsistsOf" v-model="value" class="marginBtm" />
  选中值：{{value}}
  <p><strong>Value consists of:</strong></p>
  <p class="options">
    <sg-radio label="ALL" v-model="valueConsistsOf">All</sg-radio>
    <sg-radio label="BRANCH_PRIORITY" v-model="valueConsistsOf">Branch priority</sg-radio>
    <sg-radio label="LEAF_PRIORITY" v-model="valueConsistsOf">Leaf priority</sg-radio>
    <sg-radio label="ALL_WITH_INDETERMINATE" v-model="valueConsistsOf">All with indeterminate</sg-radio>
  </p>
</template>
<script>
  export default {
    data: () => ({
      value: ['team-i'],
      valueConsistsOf: 'BRANCH_PRIORITY',
      options: [{
        id: 'company',
        label: 'Company 🏢',
        children: [{
          id: 'team-i',
          label: 'Team I 👥',
          children: [{
            id: 'person-a',
            label: 'Person A 👱',
          }, {
            id: 'person-b',
            label: 'Person B 🧔',
          }],
        }, {
          id: 'team-ii',
          label: 'Team II 👥',
          children: [{
            id: 'person-c',
            label: 'Person C 👳',
          }, {
            id: 'person-d',
            label: 'Person D 👧',
          }],
        }, {
          id: 'person-e',
          label: 'Person E 👩',
        }]
      }]
    })
  }
</script>
```

:::

### 禁用分支节点

设置 `disableBranchNodes: true` 使分支节点不可选，并将其仅视为可折叠文件夹。通过设置，可在每个分支节点的标签旁边显示一个计数 `showCount: true`

:::demo

```html
<template>
  <sg-tree-select :options="options" :disable-branch-nodes="true" :show-count="true" placeholder="Who are you?" />
</template>
<script>
  export default {
    data: () => ({
      value: '',
      options: [{
        id: 'company',
        label: 'Company 🏢',
        children: [{
          id: 'team-i',
          label: 'Team I 👥',
          children: [{
            id: 'person-a',
            label: 'Person A 👱',
          }, {
            id: 'person-b',
            label: 'Person B 🧔',
          }],
        }, {
          id: 'team-ii',
          label: 'Team II 👥',
          children: [{
            id: 'person-c',
            label: 'Person C 👳',
          }, {
            id: 'person-d',
            label: 'Person D 👧',
          }],
        }, {
          id: 'person-e',
          label: 'Person E 👩',
        }]
      }]
    })
  }
</script>
```

:::

### 平铺搜索结果

是否在搜索时平铺匹配到的选项。将此选项设置为`true`时，将平铺显示所有匹配的节点。将此设置为 `false （默认）` 后，树状显示，即使其祖先未单独包括在结果中，也将显示其祖先
:::demo

```html
<template>
  <sg-tree-select :options="options" :multiple="true" :flatten-search-results="flattenSearchResults" placeholder="Who are you?" class='marginBtm' />
  <p><strong>平铺搜索结果:</strong></p>
  <p class="options">
    <sg-radio :label="true" v-model="flattenSearchResults"></sg-radio>
    <sg-radio :label="false" v-model="flattenSearchResults"></sg-radio>
  </p>
</template>
<script>
  export default {
    data: () => ({
      value: '',
      options: [{
        id: 'company',
        label: 'Company 🏢',
        children: [{
          id: 'team-i',
          label: 'Team I 👥',
          children: [{
            id: 'person-a',
            label: 'Person A 👱',
          }, {
            id: 'person-b',
            label: 'Person B 🧔',
          }],
        }, {
          id: 'team-ii',
          label: 'Team II 👥',
          children: [{
            id: 'person-c',
            label: 'Person C 👳',
          }, {
            id: 'person-d',
            label: 'Person D 👧',
          }],
        }, {
          id: 'person-e',
          label: 'Person E 👩',
        }]
      }],
      flattenSearchResults: true
    })
  }
</script>
```

:::

### 禁用项目选择

您可以通过 `isDisabled: true` 在任何叶节点或分支节点上进行设置来禁用项目选择。对于非扁平模式，在分支节点上设置也会禁用其所有后代。
:::demo

```html
<template>
  <sg-tree-select :options="options" :multiple="true" :value="value" />
</template>
<script>
  export default {
    data: () => ({
      value: [],
      options: [{
        id: 'company',
        label: 'Company 🏢',
        children: [{
          id: 'team-i',
          label: 'Team I 👥',
          isDisabled: true,
          children: [{
            id: 'person-a',
            label: 'Person A 👱',
          }, {
            id: 'person-b',
            label: 'Person B 🧔',
          }],
        }, {
          id: 'team-ii',
          label: 'Team II 👥',
          children: [{
            id: 'person-c',
            label: 'Person C 👳',
          }, {
            id: 'person-d',
            label: 'Person D 👧',
          }],
        }, {
          id: 'person-e',
          label: 'Person E 👩',
        }]
      }]
    })
  }
</script>
```

:::

### 嵌套搜索

有时我们需要在特定分支中搜索选项。例如，您的分支机构是不同的餐馆，叶子是他们点的食物。要搜索“ McDonals”餐厅的沙拉订单，只需搜索“ mc salad”。您也可以尝试搜索 "salad"来感受不同。

具体地说，您的搜索词会按空格拆分。如果在节点路径中找到每个分割的字符串，那么就有一个匹配项。
:::demo

```html
<template>
  <sg-tree-select :multiple="true" :options="options" :disable-branch-nodes="true" v-model="value" search-nested />
</template>
<script>
  export default {
    data: () => ({
      value: [],
      options: [{
        id: 'm',
        label: 'McDonalds',
        children: [{
          id: 'm-fries',
          label: 'French Fries',
        }, {
          id: 'm-cheeseburger',
          label: 'Cheeseburger',
        }, {
          id: 'm-white-cheedar-burger',
          label: 'White Cheddar Burger',
        }, {
          id: 'm-southwest-buttermilk-crispy-chicken-salad',
          label: 'Southwest Buttermilk Crispy Chicken Salad',
        }, {
          id: 'm-cola',
          label: 'Coca-Cola®',
        }, {
          id: 'm-chocolate-shake',
          label: 'Chocolate Shake',
        }],
      }, {
        id: 'kfc',
        label: 'KFC',
        children: [{
          id: 'kfc-fries',
          label: 'French Fries',
        }, {
          id: 'kfc-chicken-litties-sandwiches',
          label: 'Chicken Litties Sandwiches',
        }, {
          id: 'kfc-grilled-chicken',
          label: 'Grilled Chicken',
        }, {
          id: 'kfc-cola',
          label: 'Pepsi® Cola',
        }],
      }, {
        id: 'bk',
        label: 'Burger King',
        children: [{
          id: 'bk-chicken-fries',
          label: 'Chicken Fries',
        }, {
          id: 'bk-chicken-nuggets',
          label: 'Chicken Nuggets',
        }, {
          id: 'bk-garden-side-salad',
          label: 'Garden Side Salad',
        }, {
          id: 'bk-cheeseburger',
          label: 'Cheeseburger',
        }, {
          id: 'bk-bacon-king-jr-sandwich',
          label: 'BACON KING™ Jr. Sandwich',
        }, {
          id: 'bk-cola',
          label: 'Coca-Cola®',
        }, {
          id: 'bk-oreo-chocolate-shake',
          label: 'OREO® Chocolate Shake',
        }],
      }],
    }),
  }
</script>
```

:::

### 自定义键名

如果通过`AJAX`加载的选项数据与`sg-tree-select`要求的数据结构不同，例如，您的数据具有 `name` 属性，但`sg-tree-select`需要 `label` ，则可能需要自定义键名。在这种情况下，您可以通过`prop`提供一个`normalizer`函数，在数据初始化期间它将传递给树中的每个节点。使用此函数创建并返回转换后的对象。
:::demo

```html
<template>
  <sg-tree-select :options="options" :value="value" :normalizer="normalizer" />
</template>
<script>
  export default {
    data: () => ({
      value: null,
      options: [{
        key: 'a',
        name: 'a',
        subOptions: [{
          key: 'aa',
          name: 'aa',
        }],
      }],
      normalizer(node) {
        return {
          id: node.key,
          label: node.name,
          children: node.subOptions,
        }
      },
    }),
  }
</script>
```
:::

### 自定义选项标签

利用插槽，可以自定义每个选项的标签，插槽提供了以下参数：

- node 标准化的节点对象（请注意，这与从 `normalizer` 返回的内容不同）
- count & shouldShowCount 计数数字和控制是否显示计数
- labelClassName & countClassName 标签和计数的类名

:::demo
```html
<template>
  <sg-tree-select
    :options="options"
    v-model="value"
    :searchable="false"
    :show-count="true"
    :default-expand-level="1"
    >
    <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
      {{ node.isBranch ? 'Branch' : 'Leaf' }}: {{ node.label }}
      <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
    </label>
  </sg-tree-select>
</template>
<script>
  export default {
  data: () => ({
    value: null,
    options: [{
        key: 'a',
        name: 'a',
        id: '1',
        subOptions: [{
          key: 'aa',
          name: 'aa',
          id: '1-1'
        }],
      }],
  }),
}
</script>
```
:::


### 自定义值的标签

:::demo
```html
<template>
  <div>
    <sg-tree-select :options="options" v-model="value" :multiple="multiple">
      <div slot="value-label" slot-scope="{ node }">{{ node.raw.customLabel }}</div>
    </sg-tree-select>
  <p>
    <label><input type="checkbox" v-model="multiple">Multi-select</label>
  </p>
</div>
</template>
<script>
  export default {
  data: () => ({
    multiple: true,
    value: null,
    options: [ 1, 2, 3 ].map(i => ({
      id: i,
      label: `Label ${i}`,
      customLabel: `Custom Label ${i}`,
    })),
  }),
}
</script>
```
:::


### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 尺寸 | String | 默认 / medium / small / mini | 默认 |
| allow-clearing-disabled | 是否允许重置值，即使有禁用的选定节点 | boolean | — | false |
| allow-selecting-disabled-descendants | 选择/取消选择祖先节点时，是否应该选择/取消选择其禁用的后代。您可能希望将其与 `allowClearingDisabled` 结合使用。 | boolean | — | false |
| always-open | 菜单是否应始终打开 | boolean | — | false |
| append-to-body | 将菜单追加到 `<body />` | boolean | — | false |
| async | 是否启用 异步搜索模式 | boolean | — | false |
| auto-focus | 自动将组件聚焦在安装座上 | boolean | — | false |
| auto-load-root-options | 在装入时自动加载root选项。设置 `false` , 为时，打开菜单时将加载根选项 | boolean | — | true |
| auto-deselect-ancestors | 当用户取消选择节点时，将自动取消选择其祖先。仅适用于平面模式 | boolean | — | false |
| auto-deselect-descendants | 当用户取消选择节点时，将自动取消选择其后代。仅适用于平面模式 | boolean | — | false |
| auto-select-ancestors | 当用户选择节点时，将自动选择其祖先。仅适用于平面模式 | boolean | — | false |
| auto-select-descendants | 当用户选择一个节点时，将自动选择其后代。仅适用于平面模式 | boolean | — | false |
| backspace-removes | `Backspace` 如果没有文本输入，是否删除最后一项 | boolean | — | true |
| before-clear-all | 在清除所有输入字段之前处理的功能。返回 `false` 到要清除的停止值 | `Fn() 🡒 (Boolean | Promise<Boolean>)` | — | `() => true` |
| branch-nodes-first | 在叶节点之前显示分支节点 | boolean | — | false |
| cache-options | 是否为 异步搜索模式缓存每个搜索请求的结果 | boolean | — | true |
| clearable | 是否显示重置值的“×”按钮 | boolean | — | true |
| clear-all-text | 时“×”按钮的标题 `:multiple="true"` | string | — | "Clear all" |
| clear-on-select | 选择选项后是否清除搜索输入。仅在时使用 `:multiple="true"` 。对于单选模式，无论prop值如何，它始终在选择后清除输入 | boolean | — | Defaults to `false` when `:multiple="true"` ; always `true` otherwise. |
| clear-value-text | “×”按钮的标题 | string | — | "Clear value" |
| close-on-select | 选择选项后是否关闭菜单。仅在时使用 `:multiple="true"` . | boolean | — | true |
| default-expand-level | 加载时应自动扩展多少级分支节点。设置 `Infinity` 为默认使所有分支节点扩展 | number | — | 0 |
| default-options | 在用户开始搜索之前显示的默认选项集。用于 异步搜索模式。设置true为时，将自动加载搜索查询的结果为空字符串 | Boolean / node[] | — | false |
| delete-removes | `Delete` 如果没有文本输入，是否删除最后一项 | boolean | — | true |
| delimiter | 用于连接隐藏字段值的多个值的定界符 | string | — | ", " |
| flatten-search-results | 搜索时是否展平树（仅同步搜索模式） | boolean | — | false |
| disable-branch-nodes | 是否阻止选择分支节点 | boolean | — | false |
| disabled | 是否禁用控件 | boolean | — | false |
| disable-fuzzy-matching | 设置为 `true` 禁用默认情况下启用的模糊匹配功能 | boolean | — | false |
| flat | 是否启用平面模式 | boolean | — | false |
| instance-id | 将所有事件作为最后一个参数传递。对于识别事件来源很有用 |  string / number | — | `<auto-incrementing number>$$` |
| join-values | 使用 `delimiter` （旧版模式）将多个值连接到单个表单字段中 | boolean | — | false |
| limit | 限制所选选项的显示。其余的将隐藏在 `limitText` 字符串中 | number | — | Infinity |
| limit-text | 当所选元素超过定义的限制时处理显示的消息的功能 | `Fn(count) 🡒 String` | — | 'count => `and ${count} more` ' |
| loading-text | 加载选项时显示的文本 | string | — | "Loading..." |
| load-options | 用于动态加载选项。可能的值action: "LOAD_ROOT_OPTIONS", "LOAD_CHILDREN_OPTIONS" or "ASYNC_SEARCH".\n callback - 接受可选 error 参数的函数 \n parentNode - 仅在加载子选项时显示 \n searchQuery - 仅在搜索异步选项时显示 \n instanceId - instanceId 等于传递给sg-tree-select 的prop 的值 | `Fn({action, callback, parentNode?, instanceId}) 🡒 (void | Promise)` | — | — |
| match-keys | `node` 要过滤对象的哪些键 | string[] | — | `[ "label" ]` |
| max-height | 设置 `maxHeight` 菜单的样式值 | number | — | 300 |
| multiple | 设置 `true` 为允许选择多个选项（又名多重选择模式） | boolean | — | false |
| name | `<input />` 使用此字段名称为html表单生成一个隐藏标签 | string | — | — |
| no-children-text | 当分支节点没有子节点时显示的文本 | string | — | "No sub-options." |
| no-options-text | 没有可用选项时显示的文本 | string | — | "No options available." |
| no-results-text | 没有匹配的搜索结果时显示的文本 | string | — | "No results found..." |
| normalizer | 用于规范化源数据 | ` Fn(node, instanceId) 🡒 node` | — | `node => node` |
| open-direction | 默认情况下（"auto"），菜单将在控件下方打开。如果没有足够的空间，sg-tree-select将自动翻转菜单。您可以使用其他四个选项之一来强制菜单始终按指定的方向打开。 | string | "auto", "below", "bottom", "above" 或 "top" | "auto" |
| open-on-click | 单击控件时是否自动打开菜单 | boolean | — | true |
| open-on-focus | 控件集中时是否自动打开菜单 | boolean | — | false |
| options | 可用选项的数组 | node[] | — | — |
| placeholder | 字段占位符，无值时显示 | string | — | "Select..." |
| required | required在需要时应用HTML5 属性 | boolean | — | false |
| retry-text | 显示的文本询问用户是否重试加载子项选项 | string | — | "Retry?" |
| retry-title | 重试按钮的标题 | string | — | "Click to retry" |
| searchable | 是否启用搜索功能 | boolean | — | true |
| search-nested | 设置 `true` 搜索查询是否也应在所有祖先节点中搜索 | boolean | — | false |
| search-prompt-text | 提示您进行异步搜索的文字提示 | string | — | "Type to search..." |
| show-count | 是否显示子项计数在每个分支节点的标签旁边 | boolean | — | false |
| show-count-of | 与一起使用 showCount 以指定应显示的计数类型。 | string | "ALL_CHILDREN", "ALL_DESCENDANTS", "LEAF_CHILDREN" or "LEAF_DESCENDANTS" | "ALL_CHILDREN" |
| show-count-on-search | 搜索时是否显示孩子数。后退到 `showCount` 未指定时的值 | boolean | — | — |
| sort-value-by | 所选选项应按触发顺序显示并按 value 数组排序。仅在时使用:multiple="true". | string | "ORDER_SELECTED", "LEVEL" or "INDEX" | "ORDER_SELECTED" |
| tab-index | 控件的Tab索引 | number | — | 0 |
| value/v-model | 控件的值。`:multiple="false"`时应为id或节点对象，`:multiple="true"`时应为id数组或节点对象数组。其格式取决于valueFormat属性。在大多数情况下，只需使用v-model即可。 | id / node / id[] / node[] | — | — |
| value-consists-of | alue 在多选模式下，数组中应包括哪种节点 | string | "ALL", "BRANCH_PRIORITY", "LEAF_PRIORITY" or "ALL_WITH_INDETERMINATE" | "BRANCH_PRIORITY" |
| value-format | value 道具格式 请注意，设置为时"object"，中的每个对象只需要 id & label 属性 | string | "id" or "object" | "id" |
| zIndex | `z-index` 菜单中的 | number / string | — | 999 |

### 节点属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| id（必须） | 用于识别树中的选项。在所有选项中，其值必须唯一 | number / string | — | — |
| label（必须） | 用于显示选项 | string | — | — |
| children | 声明一个分支节点。您可以：1) 设置为由a组成的子选项数组。叶节点，b。分支节点，或c。这两种的混合物。或2) 设置为无子项的空数组选项。或or3) 设置为null 声明要延迟加载 的卸载分支节点。您可以稍后再分配一个数组（无论它是否为空）以注册这些子选项，并将此分支节点标记为load。如果要声明叶节点，请设置或简单地忽略此属性。loadOptions(). children: undefined | node[] / null | — | — |
| isDisabled | 用于禁用项目选择 | boolean | — | — |
| isNew | 用于为新节点赋予不同的颜色 | boolean | — | — |
| isDefaultExpanded | 默认情况下是否应扩展此文件夹选项 | boolean | — | — |

***label, children 或 isDisabled 任何时候都可重新分配。***

***可以添加比列出属性更多的属性。您甚至可以通过访问node.raw.xxx在自定义模板中使用这些额外的属性。***

### 插槽

| name | 说明 | Props |
|------|--------|--------|
| option-label | 自定义选项标签模板的插槽 | `{node, shouldShowCount, count, labelClassName, countClassName}` |
| value-label | 自定义值标签模板的插槽 | `{node}` |
| before-list | 插槽显示在菜单列表之前 |  |
| after-list | 描述 |  |

### 事件

| 方法名      | 说明          | 参数 |
|----------- |-------------- | -- |
| open | 菜单打开时发出 | `(instanceId)` |
| close      | 菜单关闭时发出    | `(value, instanceId)` |
| input     | 值更改后发出 | `(value, instanceId)` |     
| select     | 选择一个选项后发出 | `(node, instanceId)` |
| deselect     | 取消选择一个选项后发出 | `(node, instanceId)` |     
| search-change	     | 搜索查询更改后发出 | `(searchQuery, instanceId)` |     
