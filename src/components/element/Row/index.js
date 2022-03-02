import Row from './src/Row'; // 导入是个对象

Row.install = (Vue) => {
  Vue.component(Row.name, Row);
};

export default Row;
