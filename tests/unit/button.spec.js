import { shallowMount } from '@vue/test-utils'
import button from '@/zh-button'

describe('button', () => {
  it('renders button component passed', async () => {
    const wrapper = shallowMount(button)

    await wrapper.setData({ text: 'hhhhhh' })
    expect(wrapper.find('.zh-button').text()).toEqual('hhhhhh')
  })
})
