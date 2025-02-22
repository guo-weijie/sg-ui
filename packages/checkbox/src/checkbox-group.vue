<script>
import Emitter from 'sg-ui/src/mixins/emitter';

export default {
  name: 'SgCheckboxGroup',

  componentName: 'SgCheckboxGroup',

  mixins: [Emitter],

  inject: {
    sgFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _sgFormItemSize() {
      return (this.sgFormItem || {}).sgFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._sgFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch('SgFormItem', 'el.form.change', [value]);
    }
  }
};
</script>

<template>
  <div class="sg-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
