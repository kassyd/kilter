(function() {
  var k_selector = {
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
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },

  computed: {
    selectedLabel: function selectedLabel() {
      var _this = this;

      if (this.selectedVal === '') return '';
      return this.options.filter(function (el) {
        return el.value === _this.selectedVal;
      })[0]['label'];
    }
  },
  methods: {
    selectClick: function selectClick(e) {
      e.target.parentElement.children[0].focus();
      this.isOpen = !this.isOpen;
    },
    selectOption: function selectOption(i, event) {
      var _this2 = this;

      var timer = setTimeout(function () {
        _this2.isOpen = false;
        _this2.$emit('select', _this2.options[i].value);
        _this2.$emit('change', _this2.options[i].value, i, _this2.options[i].label);
        clearTimeout(timer);
      }, 150);
    },
    selectNone: function selectNone() {
      var _this3 = this;

      var timer = setTimeout(function () {
        _this3.isOpen = false;
        clearTimeout(timer);
      }, 150);
    }
  }
};
        var $479e2c = k_selector || module.exports;
      
      if (typeof $479e2c === 'function') {
        $479e2c = $479e2c.options;
      }
    
        /* template */
        Object.assign($479e2c, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "k-select-root" }, [
    _c("div", { staticClass: "k-select", on: { click: _vm.selectClick } }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.selectedLabel,
            expression: "selectedLabel"
          }
        ],
        staticClass: "input-inner",
        attrs: {
          type: "text",
          autocomplete: "off",
          readonly: "readonly",
          placeholder: "请选择"
        },
        domProps: { value: _vm.selectedLabel },
        on: {
          blur: _vm.selectNone,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.selectedLabel = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("i", { staticClass: "icon" })
    ]),
    _vm._v(" "),
    _vm.isOpen
      ? _c(
          "ul",
          { staticClass: "options" },
          _vm._l(_vm.options, function(item, index) {
            return _c(
              "li",
              {
                key: item.value,
                staticClass: "option",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.selectOption(index, $event)
                  }
                }
              },
              [_vm._v(_vm._s(item.label))]
            )
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
  window.k_selector = k_selector;
        })());
})();