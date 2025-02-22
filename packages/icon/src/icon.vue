<template>
  <i :class="'sg-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'SgIcon',

    props: {
      name: String
    }
  };
</script>
