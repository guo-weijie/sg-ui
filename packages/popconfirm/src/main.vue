<template>
  <sg-popover v-bind="$attrs" v-model="visible" trigger="click">
    <div class="sg-popconfirm">
      <p class="sg-popconfirm__main">
        <i v-if="!hideIcon" :class="icon" class="sg-popconfirm__icon" :style="{ color: iconColor }"></i>
        {{ title }}
      </p>
      <div class="sg-popconfirm__action">
        <sg-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ displayCancelButtonText }}
        </sg-button>
        <sg-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ displayConfirmButtonText }}
        </sg-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </sg-popover>
</template>

<script>
import SgPopover from 'sg-ui/packages/popover';
import SgButton from 'sg-ui/packages/button';
import { t } from 'sg-ui/src/locale';

export default {
  name: 'SgPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'sg-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SgPopover,
    SgButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
