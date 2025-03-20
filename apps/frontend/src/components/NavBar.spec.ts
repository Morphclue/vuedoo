import { mount } from '@vue/test-utils';
import NavBar from './NavBar.vue';

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar, {});
    expect(wrapper.text()).toContain('Welcome to NavBar');
  });
});
