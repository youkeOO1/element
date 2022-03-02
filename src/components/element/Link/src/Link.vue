<template>
  <a class="el-link" :class="[
  type? `el-link--${type}`: 'el-link--default',
  {
    'is-underline': underline,
    'is-disabled': disabled,
  }
  ]">
  <i v-if="icon" :class="icon"></i>
  <span v-if="$slots.default" class="el-link--inner">
    <slot></slot>
  </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',
  props: {
    type: {
      type: String,
      validator: (value) => ['primary', 'success', 'warning', 'danger', 'info'].includes(value),
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    icon: String,
  },
};
</script>
