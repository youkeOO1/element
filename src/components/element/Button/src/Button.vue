<template>
  <button
  @click="e => $emit('click', e)"
  :type="nativeType"
  class="el-button"
  :autofocus="autofocus"
  :class="[
    type ? `el-button--${type}` : '',
    size ? `el-button--${size}` : '',
    {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }]"
  :disabled="disabled">
    <i v-if="!loading && icon" :class="icon"></i>
    <i v-if="loading" class="el-icon-loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: 'ElButton',
  props: {
    size: {
      type: String,
      validator: (value) => ['medium', 'small', 'mini'].includes(value.trim()),
    },
    type: {
      type: String,
      validator: (value) => ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(value.trim()),
    },
    nativeType: {
      type: String,
      validator: (value) => ['button', 'submit', 'reset'].includes(value.trim()),
    },
    plain: Boolean,
    round: Boolean,
    circle: {
      type: Boolean,
      default: false,
    },
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    autofocus: Boolean,
  },
};
</script>
