import Aside from './src/Aside.vue'; // 导出的是一个对象

/**
 * Vue 使用Vue.use安装插件时, 当为一个对象时会调用该对象的install方法，
 * install 方法调用时，会将 Vue 作为参数传入。
 * @param {*} Vue
 */
Aside.install = (Vue) => {
  Vue.component(Aside.name, Aside);
};

export default Aside;
