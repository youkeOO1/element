export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      // 获取父级组件
      let parent = this.$parent;
      // 通过在el-row 定义的名字来查看el-col的父级组件是否为el-row,
      // 或者祖先元素是el-row
      if (parent && parent.$options.name !== 'ElRow') {
        // 如果不是继续往上找
        parent = parent.$parent;
      }
      // 返回栅格间隔值
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      // 获取栅格间隔值
      const gutterValue = this.gutter;
      if (gutterValue) {
        style.paddingLeft = `${gutterValue / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'pull', 'push'].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`);
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((ele) => {
        // 当传递的参数为是string
        if (typeof this[ele] === 'number') {
          classList.push(`el-col-${ele}-${this[ele]}`);
        } else if (typeof this[ele] === 'object') {
          // 当为一个对象
          const props = this[ele];
          Object.keys(props).forEach((curValue) => {
            classList.push(
              curValue === 'span'
                ? `el-col-${ele}-${props[curValue]}`
                : `el-col-${ele}-${curValue}-${props[curValue]}`,
            );
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
