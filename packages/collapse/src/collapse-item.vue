<template>
  <div class="sg-collapse-item" :class="{ 'is-active': isActive, 'is-disabled': disabled }">
    <div role="tab" :aria-expanded="isActive" :aria-controls="`sg-collapse-content-${id}`"
      :aria-describedby="`sg-collapse-content-${id}`">
      <div class="sg-collapse-item__header" @click="handleHeaderClick" role="button" :id="`sg-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0" @keyup.space.enter.stop="handleEnterClick" :class="{
          'focusing': focusing,
          'is-active': isActive
        }" @focus="handleFocus" @blur="focusing = false">
        <slot name="title">{{ title }}</slot>
        <i class="sg-collapse-item__arrow sg-icon-arrow-right" :class="{ 'is-active': isActive }">
        </i>
      </div>
    </div>
    <sg-collapse-transition>
      <div class="sg-collapse-item__wrap" v-show="isActive" role="tabpanel" :aria-hidden="!isActive"
        :aria-labelledby="`sg-collapse-head-${id}`" :id="`sg-collapse-content-${id}`">
        <div class="sg-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </sg-collapse-transition>
  </div>
</template>
<script>
import SgCollapseTransition from 'sg-ui/src/transitions/collapse-transition';
import Emitter from 'sg-ui/src/mixins/emitter';
import { generateId } from 'sg-ui/src/utils/util';

export default {
  name: 'SgCollapseItem',

  componentName: 'SgCollapseItem',

  mixins: [Emitter],

  components: { SgCollapseTransition },

  data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId()
    };
  },

  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    disabled: Boolean
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },

  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch('SgCollapse', 'item-click', this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch('SgCollapse', 'item-click', this);
    }
  }
};
</script>
