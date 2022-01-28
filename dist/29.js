((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ProcessService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/ProcessService.js */ "./src/services/ProcessService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProcessList",
  data: function data() {
    return {
      breadcrumbs: [{
        title: "Home",
        url: "/"
      }, {
        title: "Process List",
        url: "/pages/process",
        active: true
      }],
      popupActive: false,
      editActive: false,
      edit: null,
      editProp: {},
      checkBox1: false,
      processes: [],
      process_id: -1,
      selected_process_index: -1,
      selected_process: {},
      process: {}
    };
  },
  components: {},
  methods: {
    onClickClinicEdit: function onClickClinicEdit(id) {
      this.$router.push({
        path: "/pages/client/".concat(id)
      });
    },
    save_process: function save_process(e) {
      e.preventDefault();

      var _that = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _that.$vs.loading();

          if (_that.process_id === -1) {
            _services_ProcessService_js__WEBPACK_IMPORTED_MODULE_0__["default"].create_master_process(_that.process).then(function (response) {
              var data = response.data;
              console.log(response, "process");

              if (data && data !== undefined) {
                if (data.success) {
                  _that.processes.push(data.data);

                  _that.popupActive = false;

                  _that.$vs.loading.close();

                  _that.$vs.notify({
                    position: "top-right",
                    title: "Create department",
                    text: "Saved successfully",
                    color: "success",
                    timing: 4000
                  });
                } else {
                  _that.$vs.loading.close();

                  _that.$vs.notify({
                    title: "Create Process",
                    text: "Invalid data",
                    color: "warning",
                    timing: 4000
                  });
                }
              }

              _that.$vs.loading.close();
            }).catch(function (err) {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Create Process",
                text: "Failed.Invalid data",
                color: "warning",
                timing: 4000
              });
            });
          } else if (_that.process_id > 0) {
            // console.log(_that.process, "process");
            _services_ProcessService_js__WEBPACK_IMPORTED_MODULE_0__["default"].update_master_process(_that.process_id, _that.process).then(function (response) {
              var data = response.data;

              if (data && data !== undefined) {
                if (data.success) {
                  // console.log(data.data, "edit data");
                  if (_that.processes[_that.selected_process_index]) {
                    _that.processes.splice(_that.selected_process_index, 1, data.data);
                  }

                  _that.popupActive = false;

                  _that.$vs.notify({
                    position: "top-right",
                    title: "Update department",
                    text: "Saved successfully",
                    color: "success",
                    timing: 4000
                  });
                } else {
                  _that.$vs.notify({
                    title: "Update Process",
                    text: "Invalid data",
                    color: "warning",
                    timing: 4000
                  });
                }
              }

              _that.$vs.loading.close();
            }).catch(function (err) {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Update Process",
                text: "Failed.Invalid data",
                color: "warning",
                timing: 4000
              });
            });
          }
        } else {
          console.log("form validation error");
        }
      });
    },
    reset_process: function reset_process() {
      this.process = Object.assign({}, this.selected_process);
      this.$validator.reset();
    },
    create_process: function create_process() {
      this.$validator.reset();
      this.process = Object.assign({}, _services_ProcessService_js__WEBPACK_IMPORTED_MODULE_0__["default"].process);
      this.selected_process_index = -1;
      this.process_id = -1;
      this.selected_process = Object.assign({}, this.process);
      this.popupActive = true; //this.resetInput();
    },
    update_process: function update_process(process, process_index) {
      this.$validator.reset();
      this.process_id = process.id || -1;
      this.selected_process_index = process_index;
      this.process = process;
      this.selected_process = Object.assign({}, process);
      this.popupActive = true;
    },
    get_processes: function get_processes() {
      var _that = this;

      this.processes = [];
      this.$vs.loading();
      _services_ProcessService_js__WEBPACK_IMPORTED_MODULE_0__["default"].get_all_processes().then(function (response) {
        var data = response.data;

        if (data && data !== undefined) {
          if (data.success) {
            _that.processes = data.data || {};
          } else {
            _that.$vs.notify({
              title: "Get client processes.",
              text: "No data returned.",
              color: "warning",
              timing: 4000
            });
          }
        }

        _that.$vs.loading.close();
      }).catch(function (err) {
        _that.$vs.loading.close();

        _that.$vs.notify({
          title: "Get client processes.",
          text: "No data returned.",
          color: "warning",
          timing: 4000
        });
      });
    }
  },
  created: function created() {
    this.get_processes();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vx-row" },
    [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vs-breadcrumb", {
            staticClass: "ml-4",
            attrs: { items: _vm.breadcrumbs }
          }),
          _c(
            "vx-card",
            { attrs: { title: "Process Master List" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.create_process }
                    },
                    [_vm._v("Create Process")]
                  )
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: "mx-2",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c(
                    "vs-table",
                    {
                      staticClass:
                        "table-dark-inverted table-auto vs-con-loading__container",
                      attrs: {
                        search: "",
                        "max-items": "10",
                        pagination: "",
                        data: _vm.processes,
                        stripe: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var data = ref.data
                            return _vm._l(data, function(tr, indextr) {
                              return _c(
                                "vs-tr",
                                {
                                  key: indextr,
                                  staticClass: "cursor-pointer",
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.update_process(tr, indextr)
                                    }
                                  }
                                },
                                [
                                  _c("vs-td", { attrs: { data: tr.name } }, [
                                    _vm._v(_vm._s(tr.name))
                                  ]),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.description } },
                                    [_vm._v(_vm._s(tr.description))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.status } },
                                    [
                                      tr.status === 0 || tr.status === false
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "warning"
                                              }
                                            },
                                            [_vm._v("disabled")]
                                          )
                                        : _vm._e(),
                                      tr.status === 1 || tr.status === true
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("enabled")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _c(
                                    "vs-td",
                                    [
                                      _c(
                                        "vx-tooltip",
                                        {
                                          attrs: {
                                            text: "Edit",
                                            position: "left"
                                          }
                                        },
                                        [
                                          _c("vs-button", {
                                            attrs: {
                                              radius: "",
                                              color: "primary",
                                              type: "border",
                                              "icon-pack": "feather",
                                              icon: "icon-edit"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.update_process(
                                                  tr,
                                                  indextr
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          }
                        }
                      ])
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("Name")]),
                          _c("vs-th", [_vm._v("Description")]),
                          _c("vs-th", [_vm._v("Status")]),
                          _c("vs-th", [_vm._v("Action")])
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _c(
        "vs-popup",
        {
          staticClass: "vs-con-loading__container clinic-create-popup",
          attrs: {
            title: "Create Process",
            active: _vm.popupActive,
            "buttons-hidden": true
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "form",
            { attrs: { id: "process_form" } },
            [
              _c("vx-card", { attrs: { "no-shadow": "" } }, [
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("small", { staticClass: "label" }, [_vm._v("Name")]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:2",
                            expression: "'required|min:2'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { placeholder: "Process Name", name: "name" },
                        model: {
                          value: _vm.process.name,
                          callback: function($$v) {
                            _vm.$set(_vm.process, "name", $$v)
                          },
                          expression: "process.name"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("name"),
                              expression: "errors.has('name')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name")))]
                      )
                    ],
                    1
                  )
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Description")
                      ]),
                      _c("vs-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: { name: "description", height: "100px" },
                        model: {
                          value: _vm.process.description,
                          callback: function($$v) {
                            _vm.$set(_vm.process, "description", $$v)
                          },
                          expression: "process.description"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("description"),
                              expression: "errors.has('description')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("description")))]
                      )
                    ],
                    1
                  )
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          attrs: { "false-value": "0", "true-value": "1" },
                          model: {
                            value: _vm.process.status,
                            callback: function($$v) {
                              _vm.$set(_vm.process, "status", $$v)
                            },
                            expression: "process.status"
                          }
                        },
                        [_vm._v("Status")]
                      )
                    ],
                    1
                  )
                ]),
                _c(
                  "div",
                  {
                    staticClass: "flex flex-wrap items-center justify-end mt-8"
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "ml-auto mt-2",
                        on: {
                          click: function($event) {
                            return _vm.save_process($event)
                          }
                        }
                      },
                      [_vm._v("Save Changes")]
                    ),
                    _c(
                      "vs-button",
                      {
                        staticClass: "ml-4 mt-2",
                        attrs: { type: "border", color: "warning" },
                        on: { click: _vm.reset_process }
                      },
                      [_vm._v("Reset")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clinic-create-popup[data-v-4def2378] .vs-popup {\n  min-height: 80% !important;\n  min-width: 50% !important;\n}\n@media (min-width: 768px) and (max-width: 1319px) {\n.clinic-create-popup[data-v-4def2378] .vs-popup {\n    min-height: 80% !important;\n    min-width: 65% !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1d341eb7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/services/ProcessService.js":
/*!****************************************!*\
  !*** ./src/services/ProcessService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/axios */ "./src/axios.js");







var ProcessService = /*#__PURE__*/function () {
  function ProcessService() {
    var _defineProperty2;

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProcessService);

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "process", (_defineProperty2 = {
      id: -1,
      description: "",
      inputs: "",
      outputs: ""
    }, Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_defineProperty2, "description", ""), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_defineProperty2, "status", 1), _defineProperty2));
  }

  Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProcessService, [{
    key: "get_all_processes",
    value: function get_all_processes() {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/processes/all");
    }
  }, {
    key: "get_processes",
    value: function get_processes() {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/processes");
    }
  }, {
    key: "create_process",
    value: function create_process(client_id, item, doc_file) {
      try {
        var formData = new FormData();

        if (doc_file && doc_file !== undefined) {
          formData.append("document_link", doc_file);
          console.log("document file found!");
        }

        formData.append("name", item.name);
        formData.append("description", item.description);
        formData.append("frequency_id", item.frequency_id);
        formData.append("unit_measure_id", item.unit_measure_id);
        formData.append("average_volume", item.average_volume);
        formData.append("parent_process_id", item.parent_process_id);
        formData.append("process_inputs", item.process_inputs);
        formData.append("process_outputs", item.process_outputs);
        formData.append("department_ids", item.department_ids);
        return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client-process-tree/".concat(client_id), formData);
      } catch (e) {
        return false;
      } //return axios.post(`/client-process-tree/${client_id}`, item);

    }
  }, {
    key: "create_master_process",
    value: function create_master_process(process) {
      console.log(process);
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/process", process);
    }
  }, {
    key: "import_client_processes",
    value: function import_client_processes(client_id, doc_file) {
      try {
        var formData = new FormData();

        if (doc_file && doc_file !== undefined) {
          formData.append("csv_file", doc_file);
          console.log("document file found!");
        }

        return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client/".concat(client_id, "/processes/upload"), formData);
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "update_master_process",
    value: function update_master_process(process_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/process/".concat(process_id), item);
    }
  }, {
    key: "update_client_process",
    value: function update_client_process(client_process_id, client_update_process, doc_file) {
      try {
        var formData = new FormData();

        if (doc_file && doc_file !== undefined) {
          formData.append("document_link", doc_file);
          console.log("document file found!");
        }

        formData.append("name", client_update_process.name);
        formData.append("description", client_update_process.description);
        formData.append("frequency_id", client_update_process.frequency_id);
        formData.append("unit_measure_id", client_update_process.unit_measure_id);
        formData.append("average_volume", client_update_process.average_volume);
        formData.append("parent_process_id", client_update_process.parent_process_id);
        formData.append("process_inputs", client_update_process.process_inputs);
        formData.append("process_outputs", client_update_process.process_outputs);
        formData.append("department_ids", client_update_process.department_ids);
        return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client-process/".concat(client_process_id), formData);
      } catch (e) {
        return false;
      } //return axios.post(`/client-process/${client_process_id}`, client_update_process);

    }
  }, {
    key: "add_process_segmentation",
    value: function add_process_segmentation(process_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/process/".concat(process_id, "/segmentation"), item);
    }
  }, {
    key: "get_processes_list",
    value: function get_processes_list() {
      processes = [];
      processes[-1] = "N/A";
      processes[1] = "Source to contract";
      processes[2] = "Procure to invoice";
      processes[3] = "Invoice to pay";
      processes[4] = "Spend-category strategy";
      processes[5] = "Vendor selection and negotiation";
      processes[6] = "Vendor management";
      processes[7] = "Analyze & plan needs";
      processes[8] = "Analyze supply market";
      processes[9] = "Execute tender and select supplier";
      processes[10] = "Manage contract and relationship";
      processes[11] = "Master data management";
      processes[12] = "Manage demand for purchases";
      processes[13] = "Analyze & plan needs";
      processes[14] = "Analyze supply market";
      processes[15] = "Execute tender and select supplier";
      processes[16] = "Award contract";
      processes[17] = "Manage contract and relationship";
      processes[18] = "Category wise need identification";
      processes[19] = "Market research";
      processes[20] = "Request for quote";
      processes[21] = "Request for proposal";
      processes[22] = "Supplier assessment";
      processes[23] = "E-auction";
      return process;
    }
  }, {
    key: "find_tree_item",
    value: function find_tree_item(id) {
      var _this = this;

      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!items) {
        items = this.items;
      }

      return items.reduce(function (acc, item) {
        if (acc) {
          return acc;
        }

        if (item.id === id) {
          return item;
        }

        if (item.children) {
          return _this.find_tree_item(id, item.children);
        }

        return acc;
      }, null);
    }
  }, {
    key: "update_tree_level",
    value: function update_tree_level() {
      var _this2 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var level_id = arguments.length > 1 ? arguments[1] : undefined;

      if (!item) {
        item = item;
      }

      item.level = level_id;
      var next_level = 1 + parseInt(level_id);

      if (item.children) {
        item.children.forEach(function (i) {
          return _this2.update_tree_level(i, next_level);
        });
      }

      return item;
    }
  }]);

  return ProcessService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ProcessService());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/views/pages/process/ProcessList.vue":
/*!*************************************************!*\
  !*** ./src/views/pages/process/ProcessList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessList.vue?vue&type=template&id=4def2378&scoped=true& */ "./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&");
/* harmony import */ var _ProcessList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessList.vue?vue&type=script&lang=js& */ "./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& */ "./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProcessList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4def2378",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4def2378')) {
      api.createRecord('4def2378', component.options)
    } else {
      api.reload('4def2378', component.options)
    }
    module.hot.accept(/*! ./ProcessList.vue?vue&type=template&id=4def2378&scoped=true& */ "./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessList.vue?vue&type=template&id=4def2378&scoped=true& */ "./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&");
(function () {
      api.rerender('4def2378', {
        render: _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/process/ProcessList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=style&index=0&id=4def2378&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_style_index_0_id_4def2378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProcessList.vue?vue&type=template&id=4def2378&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/process/ProcessList.vue?vue&type=template&id=4def2378&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessList_vue_vue_type_template_id_4def2378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=29.js.map