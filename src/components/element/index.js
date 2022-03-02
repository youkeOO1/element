import Row from './Row';
import Col from './Col';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import Footer from './Footer/inex';
import Aside from './Aside';
import Icon from './icon';
import Button from './Button';
import ButtonGroup from './Button-group';
import Link from './Link';

const componentsArr = [
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
];
const install = (Vue) => {
  componentsArr.forEach((ele) => {
    Vue.component(ele.name, ele);
  });
};
export default {
  install,
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
};

export {
  install,
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
  ButtonGroup,
  Link,
};
