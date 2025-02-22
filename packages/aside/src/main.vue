<template>
  <aside class="sg-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'SgAside',

    componentName: 'SgAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
