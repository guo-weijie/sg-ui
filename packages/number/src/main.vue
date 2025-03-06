<template>
  <span class="sg-number">
    <count-to v-bind="$attrs" v-on="$listeners" />
  </span>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'SgNumber',
  components: { countTo }
};
</script>
