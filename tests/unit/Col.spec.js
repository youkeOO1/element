import Row from '@element/row';
import Col from '@element/col';
import { shallowMount } from '@vue/test-utils';

describe('Col.vue', () => {
  let warpper;
  let colEle;
  beforeEach(() => {
    warpper = shallowMount(Col, {
      parentComponent: Row,
    });
    colEle = warpper.vm.$el;
  });
  it('create', () => {
    expect(colEle.classList).toContain('el-col');
  });
});
