import text from './src/index.vue'
text.install = function (Vue) {
  Vue.component(text.name, text)
}
export default text
