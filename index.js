import Vue from 'vue'
// import k_datepicker from './components/datepicker.vue'
import k_datepicker from './components/datepickerDemo.vue'
// import demo from './components/demo.vue'
// Vue.component('k-dialog', k_dialog)
Vue.component('k-datepicker', k_datepicker)
// Vue.component('demo', demo)
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
    },
    haha(hierarchy, texts) {
      console.log(1)
      console.log(hierarchy, texts)
    }
  }
})