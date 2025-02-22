<template>
  <div style="margin: 20px;">
    <sg-input v-model="input" placeholder="请输入内容"></sg-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
