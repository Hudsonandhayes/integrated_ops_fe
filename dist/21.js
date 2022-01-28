((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AllUsersList",
  data: function data() {
    return {
      popupActive: false,
      editActive: false,
      edit: null,
      editProp: {},
      checkBox1: false,
      new_user: {
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        gender: "",
        dob: "",
        houseNumber: "",
        address: "",
        city: "",
        postcode: "",
        regNo: "",
        status: false,
        id_file_image: null,
        address_file_image: null,
        qualification_file_image: null,
        insurance_file_image: null
      },
      users: [{
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@hnh.com",
        clinic: "Bret",
        profession: "hildegard.org",
        verified: true,
        role: "Doctor",
        role_status: "Active"
      }, {
        id: 2,
        name: "Hync Yraham",
        email: "jane@hnh.com",
        clinic: "Affatc",
        profession: "yarn.org",
        verified: true,
        role: "Nurse",
        role_status: "Deactive"
      }, {
        id: 3,
        name: "Leanne Graham",
        email: "Sincere@hnh.com",
        clinic: "Bret",
        profession: "hildegard.org",
        verified: false,
        role: "Doctor",
        role_status: "Deactive"
      }, {
        id: 4,
        name: "Leanne Graham",
        email: "singer@hnh.com",
        clinic: "Dentist",
        profession: "kalin.org",
        verified: false,
        role: "Doctor",
        role_status: "Active"
      }]
    };
  },
  components: {},
  methods: {
    onClickUserEdit: function onClickUserEdit(id) {
      this.$router.push({
        path: "/pages/users/".concat(id)
      });
    },
    validate_id: function validate_id(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.id_file_image = files[0];
    },
    validate_address: function validate_address(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.address_file_image = files[0];
    },
    validate_qualification: function validate_qualification(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.qualification_file_image = files[0];
    },
    validate_insurance: function validate_insurance(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.insurance_file_image = files[0];
    },
    save_user: function save_user() {
      try {
        this.$validator.validateAll().then(function (result) {
          if (result) {}

          console.log("no error");
        });
      } catch (error) {
        console.log("error during form submission");
      }
    },
    create_user: function create_user() {
      this.popupActive = true;
      this.resetInput();
    },
    resetInput: function resetInput() {
      this.new_user.name = "";
      this.new_user.lastName = "";
      this.new_user.email = "";
      this.new_user.profession = "";
      this.new_user.gender = "";
      this.new_user.dob = "";
      this.new_user.houseNumber = "";
      this.new_user.address = "";
      this.new_user.city = "";
      this.new_user.postcode = "";
      this.new_user.regNo = "";
      this.new_user.status = 0;
      this.new_user.id_file_image = "";
      this.new_user.address_file_image = "";
      this.new_user.qualification_file_image = "";
      this.new_user.insurance_file_image = "";
      this.$validator.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PendingUsersList",
  data: function data() {
    return {
      popupActive: false,
      editActive: false,
      edit: null,
      editProp: {},
      checkBox1: false,
      new_user: {
        firstName: "",
        lastName: ""
      },
      users: [{
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@hnh.com",
        registration_status: "Active",
        invite_status: "Accept",
        status: "Active"
      }, {
        id: 2,
        name: "Hync Yraham",
        email: "tim@hnh.com",
        registration_status: "Active",
        invite_status: "N/A",
        status: "Active"
      }, {
        id: 3,
        name: "Leanne Graham",
        email: "Sincere@hnh.com",
        registration_status: "Active",
        invite_status: "Accept",
        status: "Active"
      }, {
        id: 4,
        name: "Leanne Graham",
        email: "singer@hnh.com",
        registration_status: "Active",
        invite_status: "N/A",
        status: "Active"
      }]
    };
  },
  components: {},
  methods: {
    onClickUserEdit: function onClickUserEdit(id) {
      this.$router.push({
        path: "/pages/users/".concat(id)
      });
    },
    create_user: function create_user() {
      this.popupActive = true;
      this.resetInput();
    },
    resetInput: function resetInput() {
      this.new_user.name = "";
      this.new_user.lastName = "";
      this.$validator.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllUsersList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllUsersList.vue */ "./src/views/pages/users/AllUsersList.vue");
/* harmony import */ var _PendingUsersList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingUsersList.vue */ "./src/views/pages/users/PendingUsersList.vue");
//
//
//
//
//
//
//
//
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
  components: {
    AllUsersList: _AllUsersList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PendingUsersList: _PendingUsersList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "vx-card",
            { attrs: { title: "USERS" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.create_user }
                    },
                    [_vm._v("Create User")]
                  )
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: "mt-4",
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
                        "max-items": "10",
                        pagination: "",
                        data: _vm.users,
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
                                { key: indextr },
                                [
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].name } },
                                    [_vm._v(_vm._s(data[indextr].name))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].email } },
                                    [_vm._v(_vm._s(data[indextr].email))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].clinic } },
                                    [_vm._v(_vm._s(data[indextr].clinic))]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: data[indextr].profession }
                                    },
                                    [_vm._v(_vm._s(data[indextr].profession))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].verified } },
                                    [
                                      data[indextr].verified
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("verified")]
                                          )
                                        : _vm._e(),
                                      !data[indextr].verified
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "danger"
                                              }
                                            },
                                            [_vm._v("not verified")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].role } },
                                    [_vm._v(_vm._s(data[indextr].role))]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: data[indextr].role_status }
                                    },
                                    [
                                      data[indextr].role_status === "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("active")]
                                          )
                                        : _vm._e(),
                                      data[indextr].role_status !== "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "danger"
                                              }
                                            },
                                            [_vm._v("deactive")]
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
                                                return _vm.onClickUserEdit(
                                                  data[indextr].id
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
                      _vm._v("\n\t\t\t\t\t>\n\t\t\t\t\t"),
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("NAME")]),
                          _c("vs-th", [_vm._v("EMAIL")]),
                          _c("vs-th", [_vm._v("CLINIC")]),
                          _c("vs-th", [_vm._v("PROFESSION")]),
                          _c("vs-th", { staticClass: "float-left" }, [
                            _vm._v("VERIFIED")
                          ]),
                          _c("vs-th", [_vm._v("ROLE")]),
                          _c("vs-th", [_vm._v("ROLE STATUS")]),
                          _c("vs-th", [_vm._v("ACTION")])
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
          staticClass: "vs-con-loading__container user-edit-popup",
          attrs: {
            title: "CREATE USER",
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
            "vx-card",
            { attrs: { "no-shadow": "" } },
            [
              _c("div", { staticClass: "vx-row mb-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2" },
                  [
                    _c("small", { staticClass: "label" }, [
                      _vm._v("First Name")
                    ]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full required",
                      attrs: { name: "name", label: "" },
                      model: {
                        value: _vm.new_user.name,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "name", $$v)
                        },
                        expression: "new_user.name"
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
                ),
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2" },
                  [
                    _c("small", { staticClass: "label" }, [
                      _vm._v("Last Name")
                    ]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full required",
                      attrs: { name: "lastName", label: "" },
                      model: {
                        value: _vm.new_user.lastName,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "lastName", $$v)
                        },
                        expression: "new_user.lastName"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("lastName"),
                            expression: "errors.has('lastName')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("lastName")))]
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
                    _c("small", { staticClass: "label" }, [_vm._v("Email")]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "email", type: "text", label: "" },
                      model: {
                        value: _vm.new_user.email,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "email", $$v)
                        },
                        expression: "new_user.email"
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
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("email")) +
                            "\n\t\t\t\t\t"
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
                      _vm._v("Profession")
                    ]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "profession", type: "text", label: "" },
                      model: {
                        value: _vm.new_user.profession,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "profession", $$v)
                        },
                        expression: "new_user.profession"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("profession"),
                            expression: "errors.has('profession')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("profession")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }, [_vm._v("Gender")]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "gender", type: "text", label: "" },
                      model: {
                        value: _vm.new_user.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "gender", $$v)
                        },
                        expression: "new_user.gender"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("gender"),
                            expression: "errors.has('gender')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("gender")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }, [_vm._v("DOB")]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "dob", type: "date", label: "" },
                      model: {
                        value: _vm.new_user.dob,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "dob", $$v)
                        },
                        expression: "new_user.dob"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("dob"),
                            expression: "errors.has('dob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("dob")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }, [
                      _vm._v("House Number")
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
                      staticClass: "w-full",
                      attrs: { name: "houseNumber", type: "text" },
                      model: {
                        value: _vm.new_user.houseNumber,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "houseNumber", $$v)
                        },
                        expression: "new_user.houseNumber"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("houseNumber"),
                            expression: "errors.has('houseNumber')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("houseNumber")) +
                            "\n\t\t\t\t\t"
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
                      _vm._v("Address Line 2")
                    ]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "address", type: "text" },
                      model: {
                        value: _vm.new_user.address,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "address", $$v)
                        },
                        expression: "new_user.address"
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
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("address")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }, [_vm._v("City")]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "city", type: "text" },
                      model: {
                        value: _vm.new_user.city,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "city", $$v)
                        },
                        expression: "new_user.city"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("city"),
                            expression: "errors.has('city')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("city")) +
                            "\n\t\t\t\t\t"
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
                      _vm._v("Postal Code")
                    ]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "postcode", type: "text" },
                      model: {
                        value: _vm.new_user.postcode,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "postcode", $$v)
                        },
                        expression: "new_user.postcode"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("postcode"),
                            expression: "errors.has('postcode')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("postcode")) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _c("div", { staticClass: "vx-row mb-5" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2" },
                  [
                    _c("small", { staticClass: "label" }, [_vm._v("Reg No")]),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "registration number", type: "text" },
                      model: {
                        value: _vm.new_user.regNo,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "regNo", $$v)
                        },
                        expression: "new_user.regNo"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("registration number"),
                            expression: "errors.has('registration number')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("registration number")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }),
                    _c(
                      "vs-checkbox",
                      {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: { name: "status" },
                        model: {
                          value: _vm.new_user.status,
                          callback: function($$v) {
                            _vm.$set(_vm.new_user, "status", $$v)
                          },
                          expression: "new_user.status"
                        }
                      },
                      [_vm._v("Status?")]
                    ),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("status"),
                            expression: "errors.has('status')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("status")) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _c("vs-divider", { staticClass: "mt-8 mb-12" }),
              _c("div", { staticClass: "vx-row mb-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2" },
                  [
                    _c("small", { staticClass: "label" }, [
                      _vm._v(
                        "ID Document (copy of passport or driving\n\t\t\t\t\t\tlicence)"
                      )
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
                      staticClass: "w-full",
                      attrs: {
                        name: "id_file_image",
                        type: "file",
                        accept: "image/png, image/jpeg, image/webp"
                      },
                      on: { change: _vm.validate_id },
                      model: {
                        value: _vm.new_user.id_file_image,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "id_file_image", $$v)
                        },
                        expression: "new_user.id_file_image"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("id_file_image"),
                            expression: "errors.has('id_file_image')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("id_file_image")) +
                            "\n\t\t\t\t\t"
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
                      _vm._v(
                        "Upload proof of address (copy of utility\n\t\t\t\t\t\tbill)"
                      )
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
                      staticClass: "w-full",
                      attrs: {
                        name: "address_file_image",
                        type: "file",
                        accept: "image/png, image/jpeg, image/webp"
                      },
                      on: { change: _vm.validate_address },
                      model: {
                        value: _vm.new_user.address_file_image,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "address_file_image", $$v)
                        },
                        expression: "new_user.address_file_image"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("address_file_image"),
                            expression: "errors.has('address_file_image')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("address_file_image")) +
                            "\n\t\t\t\t\t"
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
                    _c("small", { staticClass: "label" }, [
                      _vm._v(
                        "Upload qualification certificate (copy of\n\t\t\t\t\t\tqualification certificate)"
                      )
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
                      staticClass: "w-full",
                      attrs: { name: "qualification_file_image", type: "file" },
                      on: { change: _vm.validate_qualification },
                      model: {
                        value: _vm.new_user.qualification_file_image,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.new_user,
                            "qualification_file_image",
                            $$v
                          )
                        },
                        expression: "new_user.qualification_file_image"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("qualification_file_image"),
                            expression: "errors.has('qualification_file_image')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.errors.first("qualification_file_image")
                            ) +
                            "\n\t\t\t\t\t"
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
                      _vm._v(
                        "Upload insurance certificate (copy of insurance\n\t\t\t\t\t\tcertificate)"
                      )
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
                      staticClass: "w-full",
                      attrs: { name: "insurance_file_image", type: "file" },
                      on: { change: _vm.validate_insurance },
                      model: {
                        value: _vm.new_user.insurance_file_image,
                        callback: function($$v) {
                          _vm.$set(_vm.new_user, "insurance_file_image", $$v)
                        },
                        expression: "new_user.insurance_file_image"
                      }
                    }),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("insurance_file_image"),
                            expression: "errors.has('insurance_file_image')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.errors.first("insurance_file_image")) +
                            "\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center justify-end mt-8" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mt-2",
                      on: { click: _vm.save_user }
                    },
                    [_vm._v("Save Changes")]
                  ),
                  _c("vs-button", { staticClass: "ml-4 mt-2" }, [
                    _vm._v("Resend Verification Email")
                  ]),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-4 mt-2",
                      attrs: { type: "border", color: "warning" }
                    },
                    [_vm._v("Reset")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "vx-card",
            { attrs: { title: "USERS" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.create_user }
                    },
                    [_vm._v("Create User")]
                  )
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: "mt-4",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c(
                    "vs-table",
                    {
                      staticClass:
                        "table-dark-inverted table-auto vs-con-loading__container",
                      attrs: { data: _vm.users, stripe: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var data = ref.data
                            return _vm._l(data, function(tr, indextr) {
                              return _c(
                                "vs-tr",
                                { key: indextr },
                                [
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].name } },
                                    [_vm._v(_vm._s(data[indextr].name))]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].email } },
                                    [_vm._v(_vm._s(data[indextr].email))]
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data: data[indextr].registration_status
                                      }
                                    },
                                    [
                                      data[indextr].registration_status ===
                                      "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("active")]
                                          )
                                        : _vm._e(),
                                      data[indextr].registration_status !==
                                      "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "danger"
                                              }
                                            },
                                            [_vm._v("deactive")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data: data[indextr].invite_status
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(data[indextr].invite_status)
                                      )
                                    ]
                                  ),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].status } },
                                    [
                                      data[indextr].status === "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("active")]
                                          )
                                        : _vm._e(),
                                      data[indextr].status !== "Active"
                                        ? _c(
                                            "vs-chip",
                                            {
                                              attrs: {
                                                transparent: "",
                                                color: "danger"
                                              }
                                            },
                                            [_vm._v("deactive")]
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
                                            text: "Resend Invite",
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
                                              icon: "icon-send"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.onClickUserEdit(
                                                  data[indextr].id
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
                      _vm._v("\n\t\t\t\t\t>\n\t\t\t\t\t"),
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("NAME")]),
                          _c("vs-th", [_vm._v("EMAIL")]),
                          _c("vs-th", [_vm._v("REGISTRATION STATUS")]),
                          _c("vs-th", [_vm._v("INVITE STATUS")]),
                          _c("vs-th", { staticClass: "float-left" }, [
                            _vm._v("STATUS")
                          ]),
                          _c("vs-th", [_vm._v("ACTION")])
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
          staticClass: "vs-con-loading__container user-edit-popup",
          attrs: {
            title: "INVITE A NEW PRESCRIBER",
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
          _c("vx-card", { attrs: { "no-shadow": "" } }, [
            _c("div", { staticClass: "vx-row mb-3" }, [
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("small", { staticClass: "label" }, [_vm._v("First Name")]),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full required",
                    attrs: { name: "name", label: "" },
                    model: {
                      value: _vm.new_user.name,
                      callback: function($$v) {
                        _vm.$set(_vm.new_user, "name", $$v)
                      },
                      expression: "new_user.name"
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
              ),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("small", { staticClass: "label" }, [_vm._v("Last Name")]),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full required",
                    attrs: { name: "lastName", label: "" },
                    model: {
                      value: _vm.new_user.lastName,
                      callback: function($$v) {
                        _vm.$set(_vm.new_user, "lastName", $$v)
                      },
                      expression: "new_user.lastName"
                    }
                  }),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("lastName"),
                          expression: "errors.has('lastName')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("lastName")))]
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
                  _c("vs-textarea", { attrs: { height: "200px" } })
                ],
                1
              )
            ]),
            _c(
              "div",
              { staticClass: "flex flex-wrap items-center justify-end mt-8" },
              [
                _c("vs-button", { staticClass: "ml-auto mt-2" }, [
                  _vm._v("Save Changes")
                ]),
                _c(
                  "vs-button",
                  {
                    staticClass: "ml-4 mt-2",
                    attrs: { type: "border", color: "warning" }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/Users.vue?vue&type=template&id=54866fac& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "vs-tabs",
    {
      key: _vm.isSmallerScreen,
      staticClass: "tabs-shadow-none",
      attrs: {
        position: _vm.isSmallerScreen ? "top" : "left",
        id: "profile-tabs"
      }
    },
    [
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-user",
            label: !_vm.isSmallerScreen ? "Users" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-general md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("all-users-list")],
            1
          )
        ]
      ),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-lock",
            label: !_vm.isSmallerScreen ? "Invitations" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("pending-users-list")],
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-edit-popup[data-v-f4308c9e] .vs-popup {\n  min-height: 80% !important;\n  min-width: 50% !important;\n}\n@media (min-width: 768px) and (max-width: 1319px) {\n.user-edit-popup[data-v-f4308c9e] .vs-popup {\n    min-height: 80% !important;\n    min-width: 65% !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-edit-popup[data-v-244fef7b] .vs-popup {\n  min-height: 50% !important;\n  min-width: 50% !important;\n}\n@media (min-width: 768px) and (max-width: 1319px) {\n.user-edit-popup[data-v-244fef7b] .vs-popup {\n    min-height: 50% !important;\n    min-width: 65% !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d276d3ba", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7779ea39", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("26ae7dab", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/pages/users/AllUsersList.vue":
/*!************************************************!*\
  !*** ./src/views/pages/users/AllUsersList.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& */ "./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&");
/* harmony import */ var _AllUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllUsersList.vue?vue&type=script&lang=js& */ "./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& */ "./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AllUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f4308c9e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f4308c9e')) {
      api.createRecord('f4308c9e', component.options)
    } else {
      api.reload('f4308c9e', component.options)
    }
    module.hot.accept(/*! ./AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& */ "./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& */ "./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&");
(function () {
      api.rerender('f4308c9e', {
        render: _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/users/AllUsersList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=style&index=0&id=f4308c9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_style_index_0_id_f4308c9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/AllUsersList.vue?vue&type=template&id=f4308c9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsersList_vue_vue_type_template_id_f4308c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pages/users/PendingUsersList.vue":
/*!****************************************************!*\
  !*** ./src/views/pages/users/PendingUsersList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& */ "./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&");
/* harmony import */ var _PendingUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingUsersList.vue?vue&type=script&lang=js& */ "./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& */ "./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PendingUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "244fef7b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('244fef7b')) {
      api.createRecord('244fef7b', component.options)
    } else {
      api.reload('244fef7b', component.options)
    }
    module.hot.accept(/*! ./PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& */ "./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& */ "./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&");
(function () {
      api.rerender('244fef7b', {
        render: _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/users/PendingUsersList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=style&index=0&id=244fef7b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_style_index_0_id_244fef7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/PendingUsersList.vue?vue&type=template&id=244fef7b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingUsersList_vue_vue_type_template_id_244fef7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pages/users/Users.vue":
/*!*****************************************!*\
  !*** ./src/views/pages/users/Users.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=54866fac& */ "./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./src/views/pages/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('54866fac')) {
      api.createRecord('54866fac', component.options)
    } else {
      api.reload('54866fac', component.options)
    }
    module.hot.accept(/*! ./Users.vue?vue&type=template&id=54866fac& */ "./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=54866fac& */ "./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&");
(function () {
      api.rerender('54866fac', {
        render: _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/users/Users.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/pages/users/Users.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&":
/*!************************************************************************!*\
  !*** ./src/views/pages/users/Users.vue?vue&type=template&id=54866fac& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=54866fac& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/users/Users.vue?vue&type=template&id=54866fac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_54866fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=21.js.map