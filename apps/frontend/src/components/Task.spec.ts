import { mount } from '@vue/test-utils';

import Task from './Task.vue';

describe('Task', () => {
  it('renders properly', () => {
    const wrapper = mount(Task, {});
    expect(wrapper.text()).toContain('Welcome to Task');
  });
});
