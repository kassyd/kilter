<template>
  <div class="k-dialog-root">
    <div class="k-mask" v-if="show"></div>
    <div class="k-dialog" v-if="show">
      <div class="header">
        <div class="title" :style="{textAlign: titlePosition}">{{title}}</div>
        <img class="close" @click="close" src="../img/close.png" alt="">
      </div>
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kilter-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'title'
    },
    titlePosition: {
      type: String,
      default: 'left'
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
.k-dialog {
  width: 82%;
  min-height: 40px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 4px;
  padding: 0 14px;
  z-index: 1001;
  .header {
    padding: 14px 0;
    .title {
      font-size: 16px;
      text-align: center;
    }
    .close {
      position: absolute;
      width: 12px;
      right: 14px;
      top: 25px;
      transform: translateY(-50%);
    }
  }
  .content {
    padding: 10px 0;
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
