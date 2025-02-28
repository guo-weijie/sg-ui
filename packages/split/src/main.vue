<template>
  <div class="sg-split">
    <split-pane
      :min-percent="minPercent"
      :default-percent="defaultPercent"
      :split="split"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template slot="paneL">
        <slot name="paneL"></slot>
      </template>
      <template slot="paneR">
        <slot name="paneR"></slot>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane';

export default {
  name: 'SgSplit',
  components: { splitPane },
  props: {
    minPercent: {
      type: Number,
      default: 16
    },
    defaultPercent: {
      type: Number,
      default: 16
    },
    split: {
      validator(value) {
        return ['vertical', 'horizontal'].indexOf(value) >= 0;
      },
      default: 'vertical',
      required: true
    }
  }
};
</script>
