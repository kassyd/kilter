// import Vue from 'vue'
// import k_selector from './components/selector.vue'
// import k_datepicker from './components/datepicker.vue'
// import k_datepicker from './components/datepickerDemo.vue'
// import demo from './components/demo.vue'
// Vue.component('k-dialog', k_dialog)
// Vue.component('k-datepicker', k_datepicker)
Vue.component('k-selector', k_selector)
var app = new Vue({
  el: '#app',
  data: {
    isShow: false,
    datepickerShow: false,
    haha1: "",
    haha2: "",
    options: [
      {
        label: '北京1',
        value: '1dsadsa'
      },
      {
        label: '北京2',
        value: '2'
      },
      {
        label: '北京3',
        value: '3'
      },
      {
        label: '北京1',
        value: '4'
      },
      {
        label: '北京2',
        value: '5'
      },
      {
        label: '北京3',
        value: '6'
      },
      {
        label: '北京1',
        value: '7'
      },
      {
        label: '北京2',
        value: '8'
      },
      {
        label: '北京3',
        value: '9'
      },
      {
        label: '北京1',
        value: '10'
      },
      {
        label: '北京2',
        value: '11'
      },
      {
        label: '北京3',
        value: '12'
      }
    ]
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
    },
    change1(val) {
      console.log(this.haha1, val)
    },
    change2(val, i ,label) {
      console.log(this.haha2, val, i, label)
    }
  }
})