import Button from '@element/Button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let btnEle;
  beforeEach(() => {
    wrapper = shallowMount(Button);
    btnEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(btnEle.classList).toContain('el-button');
  });
  it('type',  async() => {
    wrapper.setProps({
      type: 'primary',
      round: true,
      icon: 'el-icon-edit',
      size: 'medium',
    });
    await wrapper.vm.$nextTick();
    btnEle = wrapper.vm.$el;
    expect(btnEle.classList).toContain('el-button--primary');
    expect(btnEle.classList).toContain('is-round');
    expect(btnEle.classList).toContain('el-button--medium');
    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });
  it('plan', async() => {
    wrapper.setProps({
      plain: true,
      circle: true,
      icon: 'el-icon-edit',
      'native-type': 'submit',
    });
    await wrapper.vm.$nextTick();
    btnEle = wrapper.vm.$el;
    expect(btnEle.classList).toContain('is-plain');
    expect(btnEle.classList).toContain('is-circle');
    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
    expect(wrapper.attributes('type')).toEqual('submit');
  })
  it('click', async() => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  })
});