<template>
  <footer class="el-footer" :style="{
    height: height,
  }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'ElFooter',
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
