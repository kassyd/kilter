<template>
  <div class="k-select-root">
    <div class="k-select" @click="selectClick">
      <input class="input-inner" type="text" autocomplete="off" readonly="readonly" placeholder="请选择"  @blur="selectNone" v-model="selectedLabel">
      <i class="icon"></i>
    </div>
    <ul class="options" v-if="isOpen">
      <li class="option" v-for="(item, index) in options" :key="item.value" @click.stop="selectOption(index, $event)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'k-selector',
  model: {
    prop: 'selectedVal',
    event: 'select'
  },
  props: {
    selectedVal: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    selectedLabel() {
      if (this.selectedVal === '') return ''
      return this.options.filter(el => el.value === this.selectedVal)[0]['label']
    }
  },
  methods: {
    selectClick(e) {
      e.target.parentElement.children[0].focus()
      this.isOpen = !this.isOpen
    },
    selectOption(i, event) {
      let timer = setTimeout(() => {
        this.isOpen = false
        this.$emit('select', this.options[i].value)
        this.$emit('change', this.options[i].value, i, this.options[i].label)
        clearTimeout(timer)
      },150)
    },
    selectNone() {
      let timer = setTimeout(() => {
        this.isOpen = false
        clearTimeout(timer)
      },150)
    }
  }
}
</script>

<style lang="scss">
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.k-select-root {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 25px;
  padding: 0;
  font-size: 12px;
  .k-select {
    position: relative;
    padding: 0;
    .input-inner {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      width: 160px;
      height: 25px;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      outline: none;
      padding: 0 28px 0 8px;
      box-sizing: border-box;
    }
    .icon {
      position: absolute;
      background: url("../img/down.png") center center;
      background-size: 100% 100%;
      width: 18px;
      height: 18px;
      top: 3px;
      right: 5px;
    }
  }
  .options {
    position: absolute;
    width: 160px;
    max-height: 250px;
    overflow: scroll;
    top: 28px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #eee;
    z-index: 1000;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .option {
      padding: 5px 10px;
      border-bottom: 1px solid #eee;
    }
    .option:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
