import Vue from 'vue'
import k_select from './components/select.vue'
// import k_datepicker from './components/datepicker.vue'
// import k_datepicker from './components/datepickerDemo.vue'
// import demo from './components/demo.vue'
// Vue.component('k-dialog', k_dialog)
// Vue.component('k-datepicker', k_datepicker)
Vue.component('k-select', k_select)
var app = new Vue({
  el: '#app',
  data: {
    isShow: true,
    datepickerShow: false
  },
  methods: {
    close() {
      this.isShow = false
      this.datepickerShow = false
    },
    open() {
      this.isShow = true
      this.datepickerShow = true
    },
    sureClick(hierarchy, texts) {
      console.log(1)
      console.log(hierarchy, texts)
      this.datepickerShow = false
    }
  }
})