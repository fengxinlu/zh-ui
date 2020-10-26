import { shallowMount } from '@vue/test-utils'
import text from '@/zh-text'

describe('text', () => {
  it('renders text component passed', async () => {
    const wrapper = shallowMount(text)

    await wrapper.setData({ text: 'aaaaaaaaaaa' })
    expect(wrapper.find('.zh-text').text()).toEqual('aaaaaaaaaaa')
  })
})
