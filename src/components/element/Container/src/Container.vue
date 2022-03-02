<template>
  <section
    :class="[
      'el-container',
      {
        'is-vertical': isVertical,
      },
    ]"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      }
      // 子元素中有 el-header 或 el-footer 时为 vertical
      // 判断是否有子元素或者子组件，子元素与子组件都会在$slots.default中储存
      // 当断是否为有组件 子组件有属性componentOptions，子元素的componentOptions属性为unfinished
      // 判断子组件的tag是否为el-header 或者el-footer
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((ele) => {
          const tag = ele.componentOptions && ele.componentOptions.tag;
          return tag === 'el-header' || tag === 'el-footer';
        })
        : false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
