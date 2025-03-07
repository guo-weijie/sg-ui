<template>
  <div
    class="sg-title"
    :class="{
      [`sg-title__border-${borderPosition}`]: borderPosition
    }"
  >
    <div
      class="sg-title__left"
      :class="{
        'sg-title__leftLine': showLine && !iconName,
        'sg-title__leftLine-none': !showLine,
        'sg-title__bold': fontBold,
        [linkClassName]: linkClassName
      }"
    >
      <slot name="left">
        <i v-if="iconName" class="title_icon" :class="iconName"></i>
        <span @click="clickTitle" :class="{ 'sg-title__link': isLink }" v-if="title">{{ title }}</span>
        <sg-tooltip v-if="content || this.$slots.content" :placement="placement" :effect="effect">
          <template slot="content">
            <slot name="content">
              <div v-html="content"></div>
            </slot>
          </template>
          <i class="sg-icon-warning-outline" style="margin-left: 4px"></i>
        </sg-tooltip>
      </slot>
    </div>
    <!-- 如果标题右侧没有内容的话，就不渲染右侧的div -->
    <div v-if="this.$slots.default" class="sg-title__right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import sgTooltip from 'sg-ui/packages/tooltip';
export default {
  name: 'SgTitle',
  props: {
    title: String,
    iconName: String,
    content: String,
    placement: {
      type: String,
      default: 'top-start'
    },
    effect: {
      type: String,
      default: 'dark'
    },
    isLink: {
      type: Boolean,
      default: false
    },
    linkClassName: String,
    showLine: {
      type: Boolean,
      default: true
    },
    borderPosition: {
      type: String,
      default: 'bottom'
    },
    fontBold: {
      type: Boolean,
      default: false
    }
  },
  components: {
    sgTooltip
  },
  methods: {
    clickTitle() {
      if (this.isLink) {
        this.$emit('onTitle');
      }
    }
  }
};
</script>
