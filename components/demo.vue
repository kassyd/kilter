<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>....</li>
      <li>.....</li>
      <li>......</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>......</li>
      <li>...</li>
      <li>......</li>
      <li>...</li>
      <li>...</li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    }
  }
</script>
<style>
.wrapper {
  height: 50px;
  background-color: red;
  overflow: scroll;
}
</style>
