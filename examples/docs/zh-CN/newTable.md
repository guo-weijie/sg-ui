## NewTable 增强表格

基于 sg-table 开发的增强版表格组件，继承了 sg-table 的所有属性和方法，并新增了**列宽自适应**功能。

### 基础用法

:::demo

```html
<template>
  <new-table
    :column="columns"
    :data="tableData"
  />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      tableData: [
        {
          date: '2024-01-01',
          name: '张三',
          address: '北京市朝阳区xxx街道'
        },
        {
          date: '2024-01-02',
          name: '李四',
          address: '上海市浦东新区yyy路'
        }
      ]
    };
  }
};
</script>
```

:::

### 列宽自适应功能

NewTable 的核心特性是**自动计算列宽**，根据表头文字和数据内容的实际宽度动态调整列宽，避免内容溢出或空间浪费。

#### 控制属性

`autoWidth`：是否启用自动列宽计算，默认为 `true`。

:::demo

```html
<template>
  <div>
    <p>启用自动列宽：</p>
    <new-table
      :column="columns"
      :data="tableData"
      :autoWidth="true"
    />
    
    <p style="margin-top: 20px;">禁用自动列宽：</p>
    <new-table
      :column="columns1"
      :data="tableData"
      :autoWidth="false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '详细地址信息' }
      ],
      columns1: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '详细地址信息' }
      ],
      tableData: [
        { date: '2024-01-01',name: '张三', address: '北京市朝阳区xxx街道xxx号' },
        { date: '2024-01-01',name: '李四', address: '上海市浦东新区' }
      ]
    };
  }
};
</script>
```

:::

`autoWidthType`：设置自动宽度类型：
- `'min-width'`（默认）：使用最小宽度，列可以扩展
- `'width'`：使用固定宽度，列宽不可变

:::demo

```html
<template>
  <div>
    <p>使用 min-width（默认，列可扩展）：</p>
    <new-table
      :column="columns"
      :data="tableData"
      auto-width-type="min-width"
      border
    />
    
    <p style="margin-top: 20px;">使用 width（固定宽度）：</p>
    <new-table
      :column="columns1"
      :data="tableData"
      auto-width-type="width"
      border
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      columns1: [
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      tableData: [
        { name: '张三', address: '北京市朝阳区' },
        { name: '李四', address: '上海市浦东新区xxx路xxx号xxx室' }
      ]
    };
  }
};
</script>
```

:::

`autoWidthColumns`：指定需要应用自动宽度的列，为空时对所有列生效。

:::demo

```html
<template>
  <new-table
    :column="columns"
    :data="tableData"
    :auto-width-columns="['name', 'address']"
    border
  />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { type: 'selection' },
        { prop: 'index', label: '序号', type: 'index' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
        { prop: 'action', label: '操作', slot: 'action' }
      ],
      tableData: [
        { name: '张三', address: '北京市朝阳区' },
        { name: '李四', address: '上海市浦东新区' }
      ]
    };
  }
};
</script>
```

:::

### 示例：完整用法

:::demo

```html
<template>
  <new-table
    :column="columns"
    :data="tableData"
    :auto-width="true"
    :auto-width-type="'min-width'"
    :auto-width-columns="['name', 'address', 'phone']"
    border
    stripe
    highlight-current-row
    @row-click="handleRowClick"
  >
    <template slot="action" slot-scope="{ row }">
      <sg-button size="mini" type="primary" @click.stop="handleEdit(row)">编辑</sg-button>
      <sg-button size="mini" type="danger" @click.stop="handleDelete(row)">删除</sg-button>
    </template>
  </new-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { type: 'selection', width: 55 },
        { type: 'index', label: '序号', width: 60 },
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'phone', label: '联系电话' },
        { prop: 'address', label: '详细地址' },
        { prop: 'action', label: '操作', slot: 'action', width: 180 }
      ],
      tableData: [
        {
          name: '张三',
          age: 25,
          phone: '13800138000',
          address: '北京市朝阳区xxx街道xxx号'
        },
        {
          name: '李四',
          age: 30,
          phone: '13900139000',
          address: '上海市浦东新区yyy路yyy号'
        },
        {
          name: '王五',
          age: 28,
          phone: '13700137000',
          address: '广州市天河区zzz路zzz号'
        }
      ]
    };
  },
  methods: {
    handleRowClick(row) {
      console.log('点击行:', row);
    },
    handleEdit(row) {
      console.log('编辑:', row);
    },
    handleDelete(row) {
      console.log('删除:', row);
    }
  }
};
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| autoWidth | 是否启用自动列宽计算 | boolean | true/false | true |
| autoWidthType | 自动宽度的类型 | string | width / min-width | min-width |
| autoWidthColumns | 需要应用自动宽度的列名数组，为空时对所有列生效 | array | — | [] |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| scrollTop | 滚动到表格顶部 | — |
| scrollLeft | 滚动到表格左侧 | — |


### 注意事项

1. 如果列配置中已设置 `width` 或 `minWidth`，则不会应用自动计算
  
2. 特殊列不自动计算：以下类型的列不会自动计算宽度：
   - 有 `render` 函数的列
   - 有 `slot` 插槽的列
   - `type` 为 `index` 的索引列
   - `type` 为 `selection` 的选择列

3. 当 `data` 为空数组时，不会自动计算宽度
