(function() {  
  var k_datepicker = {
      data: function data() {
          return {
              canClick: true,
              dateData: [],
              i: 0,
              pickerDom: [],
              hierarchy: []
          };
      },
  
      props: {
          sureBtnText: {
              type: String,
              default: '确认'
          },
          cancelBtnText: {
              type: String,
              default: '取消'
          },
          defaultDate: {
              type: String,
              default: function _default() {
                  var dd = new Date();
                  return dd.getFullYear() + '/' + (dd.getMonth() + 1) + '/' + dd.getDate();
              }
          },
          startDate: {
              type: String,
              default: function _default() {
                  var sd = new Date();
                  return sd.getFullYear() - 5 + '/' + (sd.getMonth() + 1) + '/' + sd.getDate();
              }
          },
          endDate: {
              type: String,
              default: function _default() {
                  var ed = new Date();
                  return ed.getFullYear() + 5 + '/' + (ed.getMonth() + 1) + '/' + ed.getDate();
              }
          },
          hasYear: {
              type: Boolean,
              default: true
          },
          hasDate: {
              type: Boolean,
              default: true
          },
          hasMonth: {
              type: Boolean,
              default: true
          },
          type: {
              type: String,
              default: 'date'
          }
      },
      mounted: function mounted() {
          this.init();
      },
  
      methods: {
          init: function init() {
              var _this = this;
  
              this.checkParam();
              setTimeout(function () {
                  _this.pickerDom = _this.$refs.picker;
                  var sum = _this.pickerDom.length;
  
                  var _loop = function _loop(m) {
                      _this['datePicker' + m] = new BScroll(_this.pickerDom[m], {
                          wheel: {
                              selectedIndex: _this.hierarchy[m] || 0,
                              rotate: 33,
                              adjustTime: 50,
                              wheelWrapperClass: 'wheel-scroll',
                              wheelItemClass: 'wheel-item'
                          }
                      });
                      _this['datePicker' + m].on('scrollStart', function (pos) {
                          _this.canClick = false;
                      });
                      _this['datePicker' + m].on('scrollEnd', function (pos) {
                          _this.updateData(pos, m);
                      });
                  };
  
                  for (var m = 0; m < sum; m++) {
                      _loop(m);
                  }
              }, 20);
          },
          checkParam: function checkParam() {
              var d = new Date();
              if (new Date(this.startDate) === 'Invalid Date') {
                  this.startDate = d.getFullYear() - 5 + '/' + (d.getMonth() + 1) + '/' + d.getDate();
              }
              if (new Date(this.endDate) === 'Invalid Date') {
                  this.endDate = d.getFullYear() + 5 + '/' + (d.getMonth() + 1) + '/' + d.getDate();
              }
              if (new Date(this.defaultDate) === 'Invalid Date') {
                  this.defaultDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
              }
              if (this.defaultDate > this.endDate) this.defaultDate = this.endDate;
              if (this.defaultDate < this.startDate) this.defaultDate = this.startDate;
  
              var ss = this.startDate.split('/');
              var es = this.endDate.split('/');
              var ds = this.defaultDate.split('/');
              this.dateData.push(this.setData(ss[0] - 0, es[0] - 0));
              this.hierarchy.push(ds[0] - ss[0]);
              var temp = 0;
              if (ds[1] - 0 < 11) {
                  temp = new Date(new Date(ds[0] + '/' + (ds[1] - 0 + 1) + '/01').getTime() - 24 * 60 * 60 * 1000).getDate();
              } else {
                  temp = 31;
              }
              if (ds[0] > ss[0] && ds[0] < es[0]) {
                  this.hierarchy.push(ds[1] - 1);
                  this.hierarchy.push(ds[2] - 1);
                  this.dateData.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
                  this.dateData.push(this.setData(1, temp));
              } else if (ds[0] === ss[0]) {
                  this.hierarchy.push(ds[1] - ss[1]);
                  this.dateData.push(this.setData(ss[1] - 0, 12));
                  if (ds[1] === ss[1]) {
                      this.hierarchy.push(ds[2] - ss[2]);
                      this.dateData.push(this.setData(ss[2] - 0, temp));
                  } else {
                      this.hierarchy.push(ds[2] - 1);
                      this.dateData.push(this.setData(1, temp));
                  }
              } else if (ds[0] === es[0]) {
                  this.hierarchy.push(ds[1] - 1);
                  this.dateData.push(this.setData(1, es[1]));
                  if (ds[1] === es[1]) {
                      this.hierarchy.push(ds[2] - 1);
                      this.dateData.push(this.setData(1, es[2] - 0));
                  } else {
                      this.hierarchy.push(ds[2] - 1);
                      this.dateData.push(this.setData(1, temp));
                  }
              }
          },
          setData: function setData(start, end) {
              var d = [];
              for (var i = start; i < end + 1; i++) {
                  d.push(i);
              }
              return d;
          },
          sureClick: function sureClick() {
              if (!this.canClick) return;
              var texts = [];
              for (var m = 0; m < this.hierarchy.length; m++) {
                  texts.push(this.dateData[m][this.hierarchy[m]]);
              }
              if (!!!texts[texts.length - 1]) {
                  texts[texts.length - 1] = this.dateData[this.dateData.length - 1][this.dateData[this.dateData.length - 1].length - 1];
              }
              this.$emit('sure-click', this.hierarchy, texts);
          },
          cancelClick: function cancelClick() {
              this.$emit('cancel-click');
          },
          updateData: function updateData(pos, m) {
              var _this2 = this;
  
              var ss = this.startDate.split('/');
              var es = this.endDate.split('/');
              var delayer = 0;
              this.hierarchy[m] = Math.abs(pos.y / 30);
              if (m === 0 || m === 1) {
                  if (m === 0) {
                      delayer += 20;
                      if (pos.y - 0 === 0) {
                          this.$set(this.dateData, 1, this.setData(ss[1] - 0, 12));
                      } else if (Math.abs(pos.y / 30) === es[0] - ss[0]) {
                          this.$set(this.dateData, 1, this.setData(1, es[1] - 0));
                      } else {
                          this.$set(this.dateData, 1, this.setData(1, 12));
                      }
                  }
                  this.timer1 = setTimeout(function () {
                      var temp = 0;
                      if (_this2.dateData[1][_this2.hierarchy[1]] < 12) {
                          temp = new Date(new Date(_this2.dateData[0][_this2.hierarchy[0]] + '/' + (_this2.dateData[1][_this2.hierarchy[1]] + 1) + '/01').getTime() - 24 * 60 * 60 * 1000).getDate();
                      } else {
                          temp = 31;
                      }
                      if (_this2.hierarchy[0] === 0 && _this2.dateData[1][_this2.hierarchy[1]] === ss[1] - 0) {
                          _this2.$set(_this2.dateData, 2, _this2.setData(ss[2] - 0, temp));
                      } else if (_this2.hierarchy[0] === es[0] - ss[0] && _this2.dateData[1][_this2.hierarchy[1]] === es[1] - 0) {
                          _this2.$set(_this2.dateData, 2, _this2.setData(1, es[2] - 0));
                      } else {
                          _this2.$set(_this2.dateData, 2, _this2.setData(1, temp));
                      }
                      clearTimeout(_this2.timer1);
                      _this2.timer2 = setTimeout(function () {
                          _this2.canClick = true;
                          clearTimeout(_this2.timer2);
                      }, 20);
                  }, delayer);
              } else {
                  this.canClick = true;
              }
          }
      }
  };
          var $a8c3ae = k_datepicker || module.exports;
        
        if (typeof $a8c3ae === 'function') {
          $a8c3ae = $a8c3ae.options;
        }
      
          /* template */
          Object.assign($a8c3ae, (function () {
            var render = function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "picker wheel-scroll" }, [
      _c("div", { staticClass: "bg" }),
      _vm._v(" "),
      _c("div", { staticClass: "piciker-cont" }, [
        _c("div", { staticClass: "btns" }, [
          _c("div", { staticClass: "cancel", on: { click: _vm.cancelClick } }, [
            _vm._v(_vm._s(_vm.cancelBtnText))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sure", on: { click: _vm.sureClick } }, [
            _vm._v(_vm._s(_vm.sureBtnText))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "picker-contain" },
          _vm._l(_vm.dateData, function(k, i) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      i === 0
                        ? _vm.hasYear
                        : i === 1
                          ? _vm.hasMonth
                          : i === 2
                            ? _vm.hasDate
                            : false,
                    expression:
                      "i === 0 ? hasYear : (i === 1 ? hasMonth : (i === 2) ? hasDate : false)"
                  }
                ],
                key: i,
                ref: "picker",
                refInFor: true,
                staticClass: "wheel-cont wheel-scroll"
              },
              [
                _c(
                  "ul",
                  { staticClass: "wheel-item items" },
                  _vm._l(k, function(key, index) {
                    return _c("li", { key: index, staticClass: "item" }, [
                      _vm._v(_vm._s(key))
                    ])
                  })
                )
              ]
            )
          })
        )
      ])
    ])
  }
  var staticRenderFns = []
  render._withStripped = true
  
            return {
              render: render,
              staticRenderFns: staticRenderFns,
              _compiled: true,
              _scopeId: "data-v-a8c3ae",
              functional: undefined
            };
          })());
  window.k_datepicker = k_datepicker;
})();