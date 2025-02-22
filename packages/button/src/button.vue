<template>
  <button class="sg-button" @click="handleClick" :disabled="buttonDisabled || loading" :autofocus="autofocus"
    :type="nativeType" :class="[
      type ? 'sg-button--' + type : '',
      buttonSize ? 'sg-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <i class="sg-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'SgButton',

  inject: {
    sgForm: {
      default: ''
    },
    sgFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _sgFormItemSize() {
      return (this.sgFormItem || {}).sgFormItemSize;
    },
    buttonSize() {
      return this.size || this._sgFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.sgForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
