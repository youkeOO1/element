import Row from '@element/row';
import { mount, shallowMount } from '@vue/test-utils';

describe('Row.vue', () => {
  let wrapper;
  let rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(rowEle.classList).toContain('el-row')
  });
  it('gutter', async() => {
    wrapper.setProps({ gutter: 20 });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el.style.marginLeft).toBe('-10px');
    expect(wrapper.vm.$el.style.marginRight).toBe('-10px');
  });
  it('tag', async() => {
    wrapper.setProps({
      tag: 'p'
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.tag).toBe("p");
  });
  it('flex', async() => {
    wrapper.setProps({
      type: 'flex',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el.classList).toContain('el-row--flex');
  });
});
