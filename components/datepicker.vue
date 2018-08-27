<template>
  <div class="k-datepicker-root">
    <div class="k-mask" v-if="show" @click="close"></div>
    <div class="k-datepicker" v-if="show">
      <div class="button-group">
        <div class="cancel">取消</div>
        <div class="confirm">确定</div>
      </div>
      <div class="k-container">
        <div class="selectedArea"></div>
        <ul class="year">
          <li v-for="y in 12" :key="y">{{y}}</li>
        </ul>
        <ul class="month">
          <li v-for="m in 12" :key="m">{{m}}</li>
        </ul>
        <ul class="day">
          <li v-for="d in 31" :key="d">{{d}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kilter-datepicker",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.k-datepicker {
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  z-index: 1001;
  .button-group {
    height: 44px;
    line-height: 44px;
    box-shadow: inset 0px -1px 1px -1px #000;
    padding: 0 8px;
    text-align: center;
    .cancel {
      width: 60px;
      float: left;
      color:  rgb(130, 130, 130);
      cursor: pointer;
    }
    .confirm {
      width: 60px;
      float: right;
      color: rgb(255, 153, 0);
      cursor: pointer;
    }
  }
  .k-container {
    height: 255px;
    display: flex;
    position: relative;
    .selectedArea {
      position: absolute;
      width: 100%;
      height: 34px;
      top: 50%;
      transform: translateY(-50%);
      border-top: 1px solid #a8a8a8;
      box-shadow: inset 0px -1px 1px -1px #000;
    }
    .year,.month,.day {
      height: 100%;
      overflow: hidden;
      flex: 1;
      > li {
        width: 100%;
        height: 37px;
        line-height: 36px;
        text-align: center;
      }
    }
  }
}
.k-mask {
  width: 100vw;
  height: 100vh;
  opacity: .65;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
