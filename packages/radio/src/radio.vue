<template>
  <label class="sg-radio" :class="[
    border && radioSize ? 'sg-radio--' + radioSize : '',
    { 'is-disabled': isDisabled },
    { 'is-focus': focus },
    { 'is-bordered': border },
    { 'is-checked': model === label }
  ]" role="radio" :aria-checked="model === label" :aria-disabled="isDisabled" :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label">
    <span class="sg-radio__input" :class="{
      'is-disabled': isDisabled,
      'is-checked': model === label
    }">
      <span class="sg-radio__inner"></span>
      <input ref="radio" class="sg-radio__original" :value="label" type="radio" aria-hidden="true" v-model="model"
        @focus="focus = true" @blur="focus = false" @change="handleChange" :name="name" :disabled="isDisabled"
        tabindex="-1" autocomplete="off">
    </span>
    <span class="sg-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from 'sg-ui/src/mixins/emitter';

export default {
  name: 'SgRadio',

  mixins: [Emitter],

  inject: {
    sgForm: {
      default: ''
    },

    sgFormItem: {
      default: ''
    }
  },

  componentName: 'SgRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'SgRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('SgRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _sgFormItemSize() {
      return (this.sgFormItem || {}).sgFormItemSize;
    },
    radioSize() {
      const temRadioSize = this.size || this._sgFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.sgForm || {}).disabled
        : this.disabled || (this.sgForm || {}).disabled;
    },
    tabIndex() {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.dispatch('SgRadioGroup', 'handleChange', this.model);
      });
    }
  }
};
</script>
