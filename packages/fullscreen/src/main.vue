<template>
  <fullscreen
    class="sg-fullscreen"
    v-bind="$attrs"
    v-on="$listeners"
    :background="background"
    :page-only="pageOnly"
    ref="fullscreen"
    v-hotkey="{
      esc: exit
    }"
  >
    <slot></slot>
  </fullscreen>
</template>

<script>
import VueFullscreen from 'vue-fullscreen';
import Vue from 'vue';
Vue.use(VueFullscreen);

export default {
  name: 'SgFullscreen',
  props: {
    background: {
      type: String,
      default: 'white'
    },
    pageOnly: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    const instance = this.$refs.fullscreen;
    for (const key in instance) {
      if (Object.prototype.hasOwnProperty.call(instance, key)) {
        this[key] = instance[key];
      }
    }
  },
  methods: {}
};
</script>
