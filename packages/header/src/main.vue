<template>
  <header class="sg-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'SgHeader',

    componentName: 'SgHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
