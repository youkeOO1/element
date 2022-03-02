<template>
  <aside class="el-aside" :style="{
    width: width,
  }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>

<style>

</style>
