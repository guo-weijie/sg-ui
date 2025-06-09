<template>
  <sg-select
    ref="select"
    v-model="selectedValue"
    placeholder="请选择"
    :multiple="multiple"
    :filterable="filterable"
    :filter-method="filterMethod"
    collapse-tags
    @remove-tag="handleRemoveTag"
  >
    <!-- 隐藏默认选项，该选项用来显示树下拉框 -->
    <sg-option value="" style="display: none" />
    <!-- 渲染已选中的选项，但不显示在下拉列表中。用来回显选中的数据 -->
    <sg-option
      v-for="item in selectedList"
      :key="item.id"
      :value="item.id"
      :label="item[defaultProps.label]"
      style="display: none"
    />
    <sg-tree
      ref="tree"
      node-key="id"
      :data="treeData"
      :props="defaultProps"
      :expand-on-click-node="false"
      :highlight-current="!multiple"
      :show-checkbox="multiple"
      :check-strictly="multiple"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      @check="handleCheck"
    />
  </sg-select>
</template>

<script>
export default {
  name: 'SgSelectTree',
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 树形数据源
    treeData: {
      type: Array,
      required: true
    },
    // 树节点属性的配置
    defaultProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label'
      })
    },
    // 是否启用过滤功能
    filterable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 根据是否多选和传入的value初始化selectedValue
      selectedValue: this.multiple ? (Array.isArray(this.value) ? this.value : []) : this.value || '',
      flatNodeMap: new Map()
    };
  },
  computed: {
    selectedList() {
      const map = new Map();
      const traverse = (nodes) => {
        nodes.forEach((node) => {
          if (
            this.selectedValue === node.id ||
            (Array.isArray(this.selectedValue) && this.selectedValue.includes(node.id))
          ) {
            map.set(node.id, node);
          }
          if (node[this.defaultProps.children] && node[this.defaultProps.children].length > 0) {
            traverse(node[this.defaultProps.children]);
          }
        });
      };

      traverse(this.treeData);
      return Array.from(map.values());
    }
  },
  watch: {
    // 监听外部传入的value变化，同步更新内部状态
    value(newVal) {
      this.selectedValue = newVal;
    },
    // 监听内部选中值变化，同步更新外部状态
    selectedValue(newVal) {
      this.$emit('input', newVal);
      this.$emit('change', newVal);
    }
  },
  mounted() {
    this.buildFlatNodeMap(this.treeData);
    this.$nextTick(() => {
      if (this.multiple && Array.isArray(this.selectedValue)) {
        this.selectedValue.forEach((id) => {
          const node = this.findNodeById(this.treeData, id);
          if (node) {
            this.$refs.tree.setChecked(node, true);
          }
        });
      }
    });
  },
  methods: {
    buildFlatNodeMap(nodes) {
      const stack = [...nodes];
      while (stack.length) {
        const node = stack.pop();
        this.flatNodeMap.set(node.id, node);
        if (node[this.defaultProps.children]) {
          stack.push(...node[this.defaultProps.children]);
        }
      }
    },
    // 根据 id 递归查找节点对象
    findNodeById(nodes, id) {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node[this.defaultProps.children]) {
          const result = this.findNodeById(node[this.defaultProps.children], id);
          if (result) return result;
        }
      }
      return null;
    },
    // 树组件的过滤方法
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // select组件的过滤方法，调用树组件的过滤功能
    filterMethod(filterLable) {
      if (!this.filterable) return;
      this.$refs.tree.filter(filterLable);
    },
    // 处理移除标签的操作，更新树组件的选中状态
    handleRemoveTag(tag) {
      this.$refs.tree.setChecked(tag, false);
    },
    // 处理树组件的选中变化，更新选中的列表和值
    handleCheck(node, { checkedNodes }) {
      if (!this.multiple) return;
      this.selectedValue = checkedNodes.map((node) => node.id);
    },
    // 处理树组件的节点点击事件，更新选中的值和列表，并关闭下拉框
    handleNodeClick(data) {
      if (!this.multiple) {
        const newValue = data.id;
        this.selectedValue = newValue;
        this.$emit('node-click', newValue, data);
        // 关闭下拉
        this.$refs.select.blur();
      }
    }
  }
};
</script>
