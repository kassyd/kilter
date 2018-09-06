<template>
  <div class="k-select-root">
    <input class="input-inner" type="text" autocomplete="off" readonly="readonly" placeholder="请选择">
  </div>
</template>

<script>
export default {
  name: 'k-select',
  props: {

  }
}
</script>

<style lang="scss">
.k-select-root {
  border: 1px solid #eee;
  .is-focus {
    border-color: #409eff;
  }
  .input-inner {
    display: inline-block;
    height: 100%;
    cursor: pointer;
    outline: none;
    border: 0;
    padding: 0;
  }
}
</style>
