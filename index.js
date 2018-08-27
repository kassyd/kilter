import Vue from 'vue'
import k_datepicker from './components/datepicker.vue'
// Vue.component('k-dialog', k_dialog)
Vue.component('k-datepicker', k_datepicker)
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