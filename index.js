import Vue from 'vue'
import Dialog from './components/dialog'
Vue.component('k-dialog', Dialog)
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