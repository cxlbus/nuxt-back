import nuxtback from './nuxt-back.vue' // 导入组件
nuxtback.install = function (Vue) {
  Vue.component('nuxtback',nuxtback)
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(nuxtback);
  }
}
export default nuxtback
