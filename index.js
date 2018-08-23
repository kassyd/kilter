Vue.component('k-dialog', k_dialog)
var app = new Vue({
  el: '#app',
  data: {
    isShow: true
  },
  methods: {
    close() {
      this.isShow = false
    },
    open() {
      this.isShow = true
    }
  }
})