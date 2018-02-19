import Vue from 'vue';
import MainHeader from '@/components/MainHeader'

describe('MainHeader.vue', () => {
  it('should render the correct title', () => {
    const Constructor = Vue.extend(MainHeader)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main-header h1').textContent).toEqual('Pats Unsolicited Opinions About...')
  })
})