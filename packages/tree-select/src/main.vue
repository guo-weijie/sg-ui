<template>
  <div
    :class="{
      'sg-tree-select': true,
      [`sg-tree-select--${inputSize}`]: inputSize
    }"
  >
    <TreeSelect
      :value="value"
      v-on="{
        ...$listeners,
        input: (val) => $emit('input', val)
      }"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" :slot="name">
        <slot :name="name"></slot>
      </template>
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="scoped">
        <slot :name="name" v-bind="scoped"></slot>
      </template>
    </TreeSelect>
  </div>
</template>

<script>
import TreeSelect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  name: 'SgTreeSelect',
  components: { TreeSelect },
  props: {
    size: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Object, Array],
      default: null
    }
  },
  inject: {
    sgFormItem: {
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    _sgFormItemSize() {
      return (this.sgFormItem || {}).sgFormItemSize;
    },
    inputSize() {
      return this.size || this._sgFormItemSize || (this.$ELEMENT || {}).size;
    }
  }
};
</script>
