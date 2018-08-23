(function(){
  var k_dialog = {
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
    close: function close() {
      this.$emit('close');
    }
  }
};
// exports.default
        var $6f77fe = k_dialog || module.exports;
      
      if (typeof $6f77fe === 'function') {
        $6f77fe = $6f77fe.options;
      }
    
        /* template */
Object.assign($6f77fe, (function () {
  var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "k-dialog-root" }, [
    _vm.show ? _c("div", { staticClass: "k-mask" }) : _vm._e(),
    _vm._v(" "),
    _vm.show
      ? _c("div", { staticClass: "k-dialog" }, [
          _c("div", { staticClass: "header" }, [
            _c(
              "div",
              { staticClass: "title", style: { textAlign: _vm.titlePosition } },
              [_vm._v(_vm._s(_vm.title))]
            ),
            _vm._v(" "),
            _c("img", {
              staticClass: "close",
              attrs: { src: "./img/close.png", alt: "" },
              on: { click: _vm.close }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
        ])
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
        })());
  window.k_dialog = k_dialog;
})();
