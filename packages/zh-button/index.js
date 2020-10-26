import button from './src/index.vue'
button.install = function (Vue) {
  Vue.component(button.name, button)
}
export default button
