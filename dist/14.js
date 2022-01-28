((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ClientService.js */ "./src/services/ClientService.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

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
 // For custom error message


var dict = {
  custom: {
    // name: {
    //   required: 'This is a required field',
    //   alpha: "Your name may only contain alphabetic characters"
    // },
    phone1: {
      required: "Phone field is  required "
    },
    standard_weekly_hours: {
      required: "Weekly field is required"
    },
    standard_monthly_hours: {
      required: "Monthly field is required"
    },
    standard_quarterly_hours: {
      required: "Quarterly field is required"
    },
    standard_yearly_hours: {
      required: "Yearly field is required"
    },
    utilisation_rate: {
      required: "Utilisation Rate field is required"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AllUsersList",
  data: function data() {
    var _ref;

    return _ref = {
      breadcrumbs: [{
        title: "Home",
        url: "/"
      }, {
        title: "Clients List",
        url: "/pages/clients",
        active: true
      }],
      client_id: -1,
      popupActive: false,
      editActive: false,
      edit: null,
      editProp: {},
      checkBox1: false
    }, Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "client_id", -1), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "selected_client_index", -1), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "client", {}), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "old_clients", {}), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "clients", []), _ref;
  },
  components: {},
  methods: {
    view_client: function view_client(id) {
      this.$router.push({
        path: "/pages/client/".concat(id)
      });
    },
    save_client: function save_client(e) {
      var _this = this;

      e.preventDefault();

      try {
        var _that2 = this;

        this.$validator.validateAll().then(function (result) {
          if (result) {
            _that2.$vs.loading();

            if (_that2.client_id === -1) {
              _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__["default"].create_client(_this.client).then(function (response) {
                var data = response.data;
                console.log(response, "client return");

                if (data && data !== undefined) {
                  if (data.success) {
                    _that2.clients.push(data.data);

                    _that2.popupActive = false;

                    _that2.$vs.notify({
                      title: "Save successful",
                      text: "Client has been created!",
                      color: "success",
                      time: 3000,
                      position: "top-right"
                    });
                  } else {
                    _that2.$vs.notify({
                      title: "Error creating new Client.",
                      text: data.error,
                      color: "warning",
                      timing: 3000
                    });
                  }
                }

                _that2.$vs.loading.close();
              }).catch(function (err) {
                _that2.$vs.loading.close();

                _that2.$vs.notify({
                  title: "Error creating new Client",
                  text: "API Error.",
                  color: "warning",
                  timing: 4000
                });
              });
            } else if (_that2.client_id > 0) {
              _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__["default"].update_client(_that2.client_id, _that2.client).then(function (response) {
                var data = response.data;

                if (data && data !== undefined) {
                  if (data.success) {
                    if (_that2.clients[_that2.selected_client_index]) {
                      _that2.clients.splice(_that2.selected_client_index, 1, data.data);
                    }

                    _that2.popupActive = false;

                    _that2.$vs.notify({
                      title: "Save successful",
                      text: "Client details have been updated!",
                      color: "success",
                      time: 3000,
                      position: "top-right"
                    });
                  } else {
                    _that2.$vs.notify({
                      title: "Error updating new Client.",
                      text: data.error,
                      color: "warning",
                      timing: 3000
                    });
                  }
                }

                _that2.$vs.loading.close();
              }).catch(function (err) {
                _that2.$vs.loading.close();

                _that2.$vs.notify({
                  title: "Error updating Client",
                  text: "API Error.",
                  color: "warning",
                  timing: 4000
                });
              });
            }
          }
        });
      } catch (error) {
        _that.$vs.loading();

        console.log("error during form submission");
      }
    },
    create_client: function create_client() {
      console.log("creating client");
      this.selected_client_index = -1;
      this.client_id = -1;
      this.reset_client();
      this.client; // this.popupActive = true;

      this.client = Object.assign({}, _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__["default"].client);
      this.old_clients = Object.assign({}, this.client);
      this.popupActive = true;
    },
    update_client: function update_client(client, index) {
      this.client_id = client.id || -1;
      this.selected_client_index = index;
      this.client = client;
      this.old_clients = Object.assign({}, client);
      this.popupActive = true;
    },
    reset_client: function reset_client() {
      this.client = Object.assign({}, this.old_clients);
      this.$validator.reset();
    },
    get_clients: function get_clients() {
      this.clients = [];

      var _that = this;

      this.$vs.loading();
      _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__["default"].get_clients().then(function (response) {
        var data = response.data; //console.log(data, "clients");

        if (data && data !== undefined) {
          if (data.success) {
            _that.clients = data.data || {};
          } else {
            _that.$vs.notify({
              title: "Get clients",
              text: data.error,
              color: "warning",
              timing: 4000
            });
          }
        }

        _that.$vs.loading.close();
      }).catch(function (err) {
        _that.$vs.loading.close();

        _that.$vs.notify({
          title: "Get clients",
          text: "No data returned.",
          color: "warning",
          timing: 4000
        });
      });
    }
  },
  created: function created() {
    this.get_clients();
    this.client = _services_ClientService_js__WEBPACK_IMPORTED_MODULE_1__["default"].client;
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& ***!
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
            { attrs: { title: "Clients" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.create_client }
                    },
                    [_vm._v("Create Client")]
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
                        data: _vm.clients,
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
                                { key: indextr, staticClass: "cursor-pointer" },
                                [
                                  _c("vs-td", { attrs: { data: tr.name } }, [
                                    _vm._v(_vm._s(tr.name))
                                  ]),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.industry } },
                                    [_vm._v(_vm._s(tr.industry))]
                                  ),
                                  _c("vs-td", { attrs: { data: tr.address } }, [
                                    _vm._v(_vm._s(tr.address))
                                  ]),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: tr.standard_weekly_hours }
                                    },
                                    [_vm._v(_vm._s(tr.standard_weekly_hours))]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: tr.standard_monthly_hours }
                                    },
                                    [_vm._v(_vm._s(tr.standard_monthly_hours))]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data: tr.standard_quarterly_hours
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(tr.standard_quarterly_hours)
                                      )
                                    ]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: tr.standard_yearly_hours }
                                    },
                                    [_vm._v(_vm._s(tr.standard_yearly_hours))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.utilisation_rate } },
                                    [_vm._v(_vm._s(tr.utilisation_rate))]
                                  ),
                                  _c("vs-td", { attrs: { data: tr.email } }, [
                                    _vm._v(_vm._s(tr.email))
                                  ]),
                                  _c("vs-td", { attrs: { data: tr.phone1 } }, [
                                    _vm._v(_vm._s(tr.phone1))
                                  ]),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.status } },
                                    [
                                      tr.status === false || tr.status === 0
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "warning"
                                              }
                                            },
                                            [_vm._v("pending")]
                                          )
                                        : _vm._e(),
                                      tr.status === true || tr.status === 1
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
                                  _c("vs-td", [
                                    _c(
                                      "div",
                                      { staticClass: "vx-row justify-evenly" },
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
                                              nativeOn: {
                                                click: function($event) {
                                                  return _vm.update_client(
                                                    tr,
                                                    indextr
                                                  )
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _c(
                                          "vx-tooltip",
                                          {
                                            attrs: {
                                              text: "View",
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
                                                icon: "icon-eye"
                                              },
                                              nativeOn: {
                                                click: function($event) {
                                                  return _vm.view_client(tr.id)
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              )
                            })
                          }
                        }
                      ])
                    },
                    [
                      _vm._v("\n\t\t\t\t\t>\n\t\t\t\t\t"),
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("Name")]),
                          _c("vs-th", [_vm._v("Industry")]),
                          _c("vs-th", [_vm._v("Address")]),
                          _c("vs-th", [_vm._v("FTE Weekly (hrs)")]),
                          _c("vs-th", [_vm._v("FTE Monthly (hrs)")]),
                          _c("vs-th", [_vm._v("FTE Quarterly (hrs)")]),
                          _c("vs-th", [_vm._v("FTE Yearly (hrs)")]),
                          _c("vs-th", [_vm._v("Utilisation Rate")]),
                          _c("vs-th", [_vm._v("Email")]),
                          _c("vs-th", [_vm._v("Phone")]),
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
            title: "Create Client",
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
            [
              _c("small", [_vm._v("* indicates required fields")]),
              _c("vx-card", { attrs: { "no-shadow": "" } }, [
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2" },
                    [
                      _c("small", { staticClass: "label" }, [_vm._v("Name*")]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|alpha_spaces",
                            expression: "'required|alpha_spaces'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "name" },
                        model: {
                          value: _vm.client.name,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "name", $$v)
                          },
                          expression: "client.name"
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
                        [
                          _vm._v(
                            _vm._s(_vm.errors.first("name")) + "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Industry")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces",
                            expression: "'alpha_spaces'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: { name: "industry" },
                        model: {
                          value: _vm.client.industry,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "industry", $$v)
                          },
                          expression: "client.industry"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("industry"),
                              expression: "errors.has('industry')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.errors.first("industry")) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2" },
                    [
                      _c("small", { staticClass: "label" }, [_vm._v("Phone*")]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "phone1", label: "" },
                        model: {
                          value: _vm.client.phone1,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "phone1", $$v)
                          },
                          expression: "client.phone1"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("phone1"),
                              expression: "errors.has('phone1')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(_vm.errors.first("phone1")) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2" },
                    [
                      _c("small", { staticClass: "label" }, [_vm._v("Email*")]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "email", label: "" },
                        model: {
                          value: _vm.client.email,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "email", $$v)
                          },
                          expression: "client.email"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(_vm.errors.first("email")) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
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
                        _vm._v("Address*")
                      ]),
                      _c("vs-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:2",
                            expression: "'required|min:2'"
                          }
                        ],
                        attrs: { height: "100px", name: "address" },
                        model: {
                          value: _vm.client.address,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "address", $$v)
                          },
                          expression: "client.address"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("address"),
                              expression: "errors.has('address')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(_vm.errors.first("address")) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c("span", [_vm._v("Std FTE (hrs)")]),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/6" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Weekly*")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "standard_weekly_hours", label: "" },
                        model: {
                          value: _vm.client.standard_weekly_hours,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "standard_weekly_hours", $$v)
                          },
                          expression: "client.standard_weekly_hours"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("standard_weekly_hours"),
                              expression: "errors.has('standard_weekly_hours')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.errors.first("standard_weekly_hours")
                              ) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/6" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Monthly*")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "standard_monthly_hours", label: "" },
                        model: {
                          value: _vm.client.standard_monthly_hours,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "standard_monthly_hours", $$v)
                          },
                          expression: "client.standard_monthly_hours"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("standard_monthly_hours"),
                              expression: "errors.has('standard_monthly_hours')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.errors.first("standard_monthly_hours")
                              ) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/6" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Quarterly*")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "standard_quarterly_hours", label: "" },
                        model: {
                          value: _vm.client.standard_quarterly_hours,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.client,
                              "standard_quarterly_hours",
                              $$v
                            )
                          },
                          expression: "client.standard_quarterly_hours"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("standard_quarterly_hours"),
                              expression:
                                "errors.has('standard_quarterly_hours')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.errors.first("standard_quarterly_hours")
                              ) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/6" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Yearly*")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "standard_yearly_hours", label: "" },
                        model: {
                          value: _vm.client.standard_yearly_hours,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "standard_yearly_hours", $$v)
                          },
                          expression: "client.standard_yearly_hours"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("standard_yearly_hours"),
                              expression: "errors.has('standard_yearly_hours')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.errors.first("standard_yearly_hours")
                              ) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/6" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Utilisation Rate*")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "utilisation_rate", label: "" },
                        model: {
                          value: _vm.client.utilisation_rate,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "utilisation_rate", $$v)
                          },
                          expression: "client.utilisation_rate"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("utilisation_rate"),
                              expression: "errors.has('utilisation_rate')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(_vm.errors.first("utilisation_rate")) +
                              "\n\t\t\t\t\t\t"
                          )
                        ]
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
                      _c("small", { staticClass: "label" }, [_vm._v("Notes")]),
                      _c("vs-textarea", {
                        attrs: { height: "100px", name: "notes" },
                        model: {
                          value: _vm.client.notes,
                          callback: function($$v) {
                            _vm.$set(_vm.client, "notes", $$v)
                          },
                          expression: "client.notes"
                        }
                      })
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
                            value: _vm.client.status,
                            callback: function($$v) {
                              _vm.$set(_vm.client, "status", $$v)
                            },
                            expression: "client.status"
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
                            return _vm.save_client($event)
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
                        on: { click: _vm.reset_client }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clinic-create-popup[data-v-9a5a10ac] .vs-popup {\n  min-height: 80% !important;\n  min-width: 50% !important;\n}\n@media (min-width: 768px) and (max-width: 1319px) {\n.clinic-create-popup[data-v-9a5a10ac] .vs-popup {\n    min-height: 80% !important;\n    min-width: 65% !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f927fbdc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/pages/clients/ClientsList.vue":
/*!*************************************************!*\
  !*** ./src/views/pages/clients/ClientsList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& */ "./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&");
/* harmony import */ var _ClientsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsList.vue?vue&type=script&lang=js& */ "./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& */ "./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClientsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a5a10ac",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9a5a10ac')) {
      api.createRecord('9a5a10ac', component.options)
    } else {
      api.reload('9a5a10ac', component.options)
    }
    module.hot.accept(/*! ./ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& */ "./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& */ "./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&");
(function () {
      api.rerender('9a5a10ac', {
        render: _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/clients/ClientsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=style&index=0&id=9a5a10ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_style_index_0_id_9a5a10ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/ClientsList.vue?vue&type=template&id=9a5a10ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsList_vue_vue_type_template_id_9a5a10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map