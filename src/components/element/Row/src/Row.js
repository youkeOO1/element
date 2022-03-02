export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (value) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(value),
    },
    align: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'middle', 'bottom'].includes(value),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        // 子组件设置栅格间隔后是左右设置padding，第一个会与开始地方有间隙
        // 父组件通过margin消除间隙
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
  render(h) {
    // 元素名 attribute 子级虚拟节点
    return h(
      this.tag, // 元素名
      {
        // attribute
        class: [
          'el-row',
          { 'el-row--flex': this.type === 'flex' },
          this.justify !== 'start' && `is-justify-${this.justify}`,
          this.align !== 'top' && `is-align-${this.align}`,
        ],
        style: this.style,
      },
      // 子级虚拟节点
      this.$slots.default,
    );
  },
};
