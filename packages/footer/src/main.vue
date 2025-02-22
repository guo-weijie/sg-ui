<template>
  <footer class="sg-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'SgFooter',

    componentName: 'SgFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
