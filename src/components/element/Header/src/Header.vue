<template>
  <header class="el-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },

};
</script>

<style>

</style>
