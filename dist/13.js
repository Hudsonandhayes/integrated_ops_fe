((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/SurveyService.js */ "./src/services/SurveyService.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      colorx: "#10163a",
      title: "Timing Survey",
      popupActive1: false,
      thankyouDone: false,
      can_proceed: false,
      survey: {
        assessment: {
          name: "",
          description: ""
        },
        assessment_employee: {
          first_name: "",
          last_name: ""
        },
        response_full: []
      },
      survey_id: -1,
      employee_id: -1,
      token: "",
      image: {},
      rework: {},
      rework_list: [],
      rework_response: {
        cum_waste_time_min: 0,
        cum_waste_time_max: 0,
        cum_waste_time_avg: 0
      },
      total_pct_time: 0,
      total_min_process_time: 0,
      total_max_process_time: 0,
      total_avg_process_time: 0,
      current_response_row: {}
    };
  },
  methods: {
    formSubmitted: function formSubmitted() {
      console.log(this.survey.assessment_employee);
      this.thankyouDone = true;
      console.log("Thank you for submission");
    },
    survey_consent: function survey_consent() {
      console.log(this.survey.assessment_employee);

      var _that = this;

      var employee = this.survey.assessment_employee;

      if (this.can_proceed) {
        this.$vs.loading();
        return new Promise(function (resolve, reject) {
          if (_that.token && _that.token !== undefined) {
            _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].update_assessment_employee_token(_that.employee_id, _that.survey.assessment_employee, _that.token).then(function (response) {
              var data = response.data;

              if (data && data !== undefined) {
                if (data.success) {
                  _that.$vs.loading.close();

                  resolve(true);
                } else {
                  _that.$vs.notify({
                    title: "Error processing request",
                    text: data.error,
                    color: "warning",
                    timing: 4000
                  });
                }

                _that.$vs.loading.close();

                resolve(false);
              }
            }).catch(function (err) {
              console.log("Error " + err.message);
              that.$vs.loading.close();

              _that.$vs.notify({
                title: "Error processing requset",
                text: err.message,
                color: "warning",
                timing: 4000
              });

              resolve(false);
            });
          } else {
            _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].update_assessment_employee(_that.employee_id, _that.survey.assessment_employee).then(function (response) {
              var data = response.data;

              if (data && data !== undefined) {
                if (data.success) {
                  _that.$vs.loading.close();

                  if ((employee.gdpr_consent === 1 || employee.gdpr_consent === true) && (employee.tandc === 1 || employee.tandc === true)) {
                    resolve(true);
                  } else {
                    resolve(true);
                  }
                } else {
                  _that.$vs.notify({
                    title: "Error processing request",
                    text: data.error,
                    color: "warning",
                    timing: 4000
                  });
                }

                _that.$vs.loading.close();

                resolve(false);
              }

              _that.$vs.loading.close();
            }).catch(function (err) {
              console.log("Error " + err.message);
              that.$vs.loading.close();

              _that.$vs.notify({
                title: "Error processing requset",
                text: err.message,
                color: "warning",
                timing: 4000
              });

              resolve(false);
            });
          }
        });
      } else {
        _that.$vs.notify({
          title: "Problem loading survey data",
          text: "Please contact Admin to resovle the issue",
          color: "warning",
          timing: 4000
        });

        resolve(false);
      }
    },
    add_rework_form: function add_rework_form(item) {
      console.log(item);
      this.current_response_row = {}; //reset rework

      this.$validator.reset();
      this.rework = Object.assign({}, _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].rework);
      this.rework.client_assessment_response_id = item.id;
      this.current_response_row = item;
      console.log(this.rework.client_assessment_response_id, "client response id");
      this.popupActive1 = true;
    },
    add_rework: function add_rework() {
      var _this = this;

      var _that = this;

      this.$validator.validateAll("wastage_form").then(function (result) {
        if (result) {
          if (_this.token && _this.token !== undefined) {
            _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].create_rework_token(_that.rework.client_assessment_response_id, _that.rework, _that.token).then(function (response) {
              console.log(_that.rework);
              _that.current_response_row.min_time_waste = parseFloat(_that.current_response_row.min_time_waste) + parseFloat(_that.rework.min_time_waste);
              _that.current_response_row.max_time_waste = parseFloat(_that.current_response_row.max_time_waste) + parseFloat(_that.rework.max_time_waste);
              _that.current_response_row.avg_time_waste = parseFloat(_that.current_response_row.avg_time_waste) + parseFloat(_that.rework.avg_time_waste);

              _that.rework_list.push(_that.rework);

              _that.rework = {
                client_assessment_response_id: _that.rework.client_assessment_response_id
              }; // _that.current_response_row = {};
            });
          } else {
            _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].create_rework(_that.rework.client_assessment_response_id, _that.rework).then(function (response) {
              console.log(_that.rework);
              _that.current_response_row.min_time_waste = parseFloat(_that.current_response_row.min_time_waste) + parseFloat(_that.rework.min_time_waste);
              _that.current_response_row.max_time_waste = parseFloat(_that.current_response_row.max_time_waste) + parseFloat(_that.rework.max_time_waste);
              _that.current_response_row.avg_time_waste = parseFloat(_that.current_response_row.avg_time_waste) + parseFloat(_that.rework.avg_time_waste);

              _that.rework_list.push(_that.rework);

              _that.rework = {
                client_assessment_response_id: _that.rework.client_assessment_response_id
              }; // _that.current_response_row = {};
            });
          }
        }
      });
    },
    calculate_time_totals: function calculate_time_totals() {
      var _this2 = this;

      console.log("calculating time totals");
      this.total_pct_time = 0;
      this.total_min_process_time = 0;
      this.total_max_process_time = 0;
      this.total_avg_process_time = 0;
      console.log(this.survey.response_full, "response");
      this.survey.response_full.forEach(function (item) {
        var new_pct_time = parseInt(_this2.total_pct_time, 10) + parseInt(item.pc_time_spent, 10);
        var new_min_process_time = parseFloat(_this2.total_min_process_time) + parseFloat(item.min_time_spent);

        if (new_pct_time <= 100) {
          _this2.total_pct_time += parseInt(item.pc_time_spent, 10);
        } else {
          _this2.$vs.notify({
            title: "Cannot exceed 100%",
            text: "Please check your percentage time spent.",
            color: "warning",
            timing: 4000
          });

          console.log("Total Percentage time exceeds 100%");
        }

        _this2.total_min_process_time += parseFloat(item.min_time_spent);
        _this2.total_max_process_time += parseFloat(item.max_time_spent);
        _this2.total_avg_process_time += parseFloat(item.avg_time_spent);
      });
    },
    submit_responses: function submit_responses() {
      //const _that=this;
      var _that = this;

      if (this.employee_id > 0) {
        this.$vs.loading();
        _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].submit_timing_survey_responses(this.survey_id, this.employee_id, this.survey.response_full).then(function (response) {
          var data = response.data;

          if (data && data !== undefined) {
            if (data.success) {
              _that.$vs.loading.close();

              return true;
            } else {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Submit response",
                text: "Failed",
                color: "warning",
                timing: 4000
              });
            }

            _that.$vs.loading.close();
          }
        }).catch(function (err) {
          console.log("Error " + err.message);
          that.$vs.loading.close();

          _that.$vs.notify({
            title: "Submit response",
            text: "Failed.",
            color: "warning",
            timing: 4000
          });

          return false;
        });
      } else {
        this.$vs.loading();
        _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].submit_timing_survey_responses_with_token(this.token, this.survey.response_full).then(function (response) {
          var data = response.data;

          if (data && data !== undefined) {
            if (data.success) {
              _that.$vs.loading.close();

              return true;
            } else {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Submit response",
                text: "Failed",
                color: "warning",
                timing: 4000
              });
            }
          }
        }).catch(function (err) {
          condole.log("Error " + err.message);

          _that.$vs.loading.close();

          _that.$vs.notify({
            title: "Submit response",
            text: "Failed",
            color: "warning",
            timing: 4000
          });

          return false;
        });
      }

      return true;
    },
    get_emp_survey_details: function get_emp_survey_details() {
      var _that = this;

      if (this.employee_id > 0) {
        this.$vs.loading();
        _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].get_emp_survey_details(this.survey_id, this.employee_id).then(function (response) {
          console.log(response, "Loading assessment data");
          var output = response.data;

          if (output && output !== undefined) {
            if (output.success) {
              _that.survey.assessment = output.data.assessment;
              _that.survey.assessment_employee = output.data.assessment_employee;
              _that.survey.response_full = output.data.response_full || [];
              console.log(output.data.response_full);

              _that.calculate_time_totals();

              _that.$vs.loading.close();

              if (_that.survey.response_full.length <= 0) {
                _that.can_proceed = false;

                _that.$vs.notify({
                  title: "Get employee survey details",
                  text: "No data returned",
                  color: "warning",
                  timing: 4000
                });
              } else {
                _that.can_proceed = true;
              }
            } else {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Get employee survey details",
                text: "No data returned. Please contact HnH for queries.",
                color: "warning",
                timing: 4000
              });
            }
          }
        }).catch(function (err) {
          _that.$vs.loading.close();

          _that.$vs.notify({
            title: "Get employee survey details",
            text: "No data returned",
            color: "warning",
            timing: 4000
          });
        });
      } else {
        this.$vs.loading();
        _services_SurveyService_js__WEBPACK_IMPORTED_MODULE_3__["default"].get_emp_survey_token_details(this.token).then(function (response) {
          console.log("Assessment form submitted");
          var output = response.data;

          if (output && output !== undefined) {
            if (output.success) {
              _that.survey.assessment = output.data.assessment;
              _that.survey.assessment_employee = output.data.assessment_employee;
              _that.survey.response_full = output.data.response_full || [];

              _that.calculate_time_totals();

              _that.$vs.loading.close();
            } else {
              _that.$vs.loading.close();

              _that.$vs.notify({
                title: "Get employee survey details",
                text: "No data returned",
                color: "warning",
                timing: 4000
              });
            }
          }
        }).catch(function (err) {
          _that.$vs.loading.close();

          _that.$vs.notify({
            title: "Get employee survey details",
            text: "No data returned",
            color: "warning",
            timing: 4000
          });
        });
      }
    }
  },
  computed: {
    total: function total() {
      var calculatedTotal = parseInt(this.rework.waste_time_min) + parseInt(this.rework.waste_time_max);

      if (isNaN(calculatedTotal)) {
        this.rework.waste_time_avg == 0;
      } else {
        this.rework.waste_time_avg = calculatedTotal / 2;
      } // this.rework.waste_time_avg = calculatedTotal / 2;


      return this.rework.waste_time_avg;
    } // recorded_pct_time: funciton(){
    // 	let total_time=0;
    // 	this.survey.response_full.forEach((item) => {
    // 		total_time+=item.pc_time_spent;
    // 	});
    // 	console.log("recorder pct time "+total_time);
    // 	return total_time;
    // }

  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"]
  },
  created: function created() {
    this.survey_id = this.$route.params.survey_id || -1;
    this.employee_id = this.$route.params.emp_id || -1;
    this.token = this.$route.params.token || "";
    console.log(" survey details " + this.token);
    this.get_emp_survey_details();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& ***!
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
    { attrs: { id: "survey-form" } },
    [
      _c("div", { staticClass: "faq-jumbotron" }, [
        _c(
          "div",
          {
            staticClass:
              "faq-jumbotron-content min-h-1/4 flex flex-col rounded-lg mb-base"
          },
          [
            _c("div", { staticClass: "flex mx-10 mt-5" }, [
              _c(
                "h1",
                { staticClass: "card-title text-white text-center flex-grow" },
                [_vm._v(_vm._s(_vm.title))]
              ),
              _c("img", {
                staticClass: "self-start",
                attrs: {
                  width: "150px",
                  alt: "Hudson & Hayes logo",
                  src: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./src/assets/images/logo/logo.png")
                }
              })
            ]),
            _c(
              "div",
              { staticClass: "text-white lg:p-32 md:p-24 sm:p-16 p-8" },
              [
                _c("h2", { staticClass: "text-white" }, [
                  _vm._v(
                    "Hello " +
                      _vm._s(_vm.survey.assessment_employee.first_name) +
                      _vm._s(_vm.survey.assessment_employee.last_name) +
                      ","
                  )
                ]),
                _c("br"),
                _c("h3", { staticClass: "text-white" }, [
                  _vm._v(
                    "Thanking you for taking part in this " +
                      _vm._s(_vm.survey.assessment.name) +
                      "."
                  )
                ]),
                _c("br"),
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(_vm._s(_vm.survey.assessment.description) + " ")
                ])
              ]
            )
          ]
        )
      ]),
      _c(
        "vx-card",
        { staticClass: "mb-base h-full py-5 px-16" },
        [
          _c(
            "form-wizard",
            {
              staticClass: "mt-10",
              attrs: {
                color: "rgba(var(--vs-primary), 1)",
                title: "Employee Activity Data Assessment",
                subtitle: null,
                finishButtonText: "Done"
              },
              on: { "on-complete": _vm.formSubmitted }
            },
            [
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: {
                    title: "Terms and Conditions",
                    icon: "feather icon-image",
                    "before-change": _vm.survey_consent
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "vx-row w-full align-middle mt-12" },
                    [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          '\t\t\t\t\t\t\n\t\t\t\t\t\t Please accept the following "Terms and Conditions" before taking the survey.\n\t\t\t\t\t'
                        )
                      ])
                    ]
                  ),
                  _c("div", { staticClass: "vx-row mb-3" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "false-value": "0", "true-value": "1" },
                            model: {
                              value:
                                _vm.survey.assessment_employee.gdpr_consent,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.survey.assessment_employee,
                                  "gdpr_consent",
                                  $$v
                                )
                              },
                              expression:
                                "survey.assessment_employee.gdpr_consent"
                            }
                          },
                          [_vm._v("GDPR Consent\n\t\t\t\t\t\t\t")]
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
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "false-value": "0", "true-value": "1" },
                            model: {
                              value: _vm.survey.assessment_employee.tandc,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.survey.assessment_employee,
                                  "tandc",
                                  $$v
                                )
                              },
                              expression: "survey.assessment_employee.tandc"
                            }
                          },
                          [_vm._v("I Agree")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5 h-2/3",
                  attrs: {
                    title: "Personal Details",
                    icon: "feather icon-home"
                  }
                },
                [
                  _c("vx-card", { staticClass: "mb-base" }, [
                    _c("div", { staticClass: "vs-row flex" }, [
                      _c("div", { staticClass: "vx-col w-1/2 mb-5" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label text-base font-semibold text-grey-700"
                          },
                          [_vm._v("Name : ")]
                        ),
                        _c(
                          "span",
                          { staticClass: "label text-base text-grey-700" },
                          [
                            _vm._v(
                              " \n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.survey.assessment_employee.first_name
                                ) +
                                " " +
                                _vm._s(
                                  _vm.survey.assessment_employee.last_name
                                ) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ]),
                      _c("div", { staticClass: "vx-col w-1/2 mb-5" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label text-base font-semibold text-grey-700"
                          },
                          [_vm._v("Email : ")]
                        ),
                        _c(
                          "span",
                          { staticClass: "label text-base text-grey-700" },
                          [
                            _vm._v(
                              " \n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.survey.assessment_employee.email) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ]),
                    _c("div", { staticClass: "vs-row flex" }, [
                      _c("div", { staticClass: "vx-col w-1/2 mb-5" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label text-base font-semibold text-grey-700"
                          },
                          [_vm._v("Profession : ")]
                        ),
                        _c(
                          "span",
                          { staticClass: "label text-base text-grey-700" },
                          [
                            _vm._v(
                              " \n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.survey.assessment_employee.job_title
                                ) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ]),
                      _c("div", { staticClass: "vx-col w-1/2 mb-5" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label text-base font-semibold text-grey-700"
                          },
                          [_vm._v("Department : ")]
                        ),
                        _c(
                          "span",
                          { staticClass: "label text-base text-grey-700" },
                          [
                            _vm._v(
                              " \n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.survey.assessment_employee.function
                                ) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ]),
                    _c("div", { staticClass: "vs-row flex" }, [
                      _c("div", { staticClass: "vx-col w-1/2 mb-5" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "label text-base font-semibold text-grey-700"
                          },
                          [_vm._v("Department : ")]
                        ),
                        _c(
                          "span",
                          { staticClass: "label text-base text-grey-700" },
                          [
                            _vm._v(
                              " \n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm.survey.assessment_employee.sub_function
                                ) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: {
                    title: "Activity Breakdown",
                    icon: "feather icon-briefcase",
                    "before-change": _vm.submit_responses
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "vx-row w-full align-middle" },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v("Activity")
                          ])
                        ]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c(
                            "vx-tooltip",
                            {
                              attrs: {
                                text:
                                  "What % of your overall working time is spent working on this process "
                              }
                            },
                            [
                              _c("h3", { staticClass: "mt-4" }, [
                                _vm._v("Percentage of time spent")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c(
                            "vx-tooltip",
                            {
                              attrs: {
                                text:
                                  "How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the minimum time here.  "
                              }
                            },
                            [
                              _c("h3", { staticClass: "mt-4" }, [
                                _vm._v("Process Time (min)")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c(
                            "vx-tooltip",
                            {
                              attrs: {
                                text:
                                  "How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the average time here. "
                              }
                            },
                            [
                              _c("h3", { staticClass: "mt-4" }, [
                                _vm._v("Process Time (max)")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c(
                            "vx-tooltip",
                            {
                              attrs: {
                                text:
                                  "How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the maximun time here.  "
                              }
                            },
                            [
                              _c("h3", { staticClass: "mt-4" }, [
                                _vm._v("Process Time (avg)")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v("Rework values")
                          ])
                        ]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.2" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v("Add Rework")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-row w-full align-middle" },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [_c("h3", { staticClass: "mt-4" }, [_vm._v("Total")])]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v(_vm._s(_vm.total_pct_time))
                          ])
                        ]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v(_vm._s(_vm.total_min_process_time))
                          ])
                        ]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v(_vm._s(_vm.total_max_process_time))
                          ])
                        ]
                      ),
                      _c(
                        "vs-col",
                        {
                          staticClass: "bg-highlight",
                          attrs: { "vs-w": "1.8" }
                        },
                        [
                          _c("h3", { staticClass: "mt-4" }, [
                            _vm._v(_vm._s(_vm.total_avg_process_time))
                          ])
                        ]
                      ),
                      _c("vs-col", {
                        staticClass: "bg-highlight",
                        attrs: { "vs-w": "1.8" }
                      }),
                      _c("vs-col", {
                        staticClass: "bg-highlight",
                        attrs: { "vs-w": "1.2" }
                      })
                    ],
                    1
                  ),
                  _vm._l(_vm.survey.response_full, function(item) {
                    return _c(
                      "div",
                      {
                        key: item.id,
                        staticClass: "vx-row w-full align-middle mt-12"
                      },
                      [
                        _c("vs-col", { attrs: { "vs-w": "1.8" } }, [
                          _c("strong", [_vm._v(_vm._s(item.name) + " ")])
                        ]),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "1.8" } },
                          [
                            _c(
                              "vs-tooltip",
                              {
                                attrs: {
                                  text:
                                    "Frequency " +
                                    item.frequency +
                                    ", in " +
                                    item.unit_measure
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "mt-4 w-3/4",
                                  attrs: { "label-placeholder": "% of time" },
                                  on: { change: _vm.calculate_time_totals },
                                  model: {
                                    value: item.pc_time_spent,
                                    callback: function($$v) {
                                      _vm.$set(item, "pc_time_spent", $$v)
                                    },
                                    expression: "item.pc_time_spent"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "1.8" } },
                          [
                            _c("vs-input", {
                              staticClass: "mt-4 w-3/4",
                              attrs: {
                                "label-placeholder": "In " + item.unit_measure
                              },
                              on: { change: _vm.calculate_time_totals },
                              model: {
                                value: item.min_time_spent,
                                callback: function($$v) {
                                  _vm.$set(item, "min_time_spent", $$v)
                                },
                                expression: "item.min_time_spent"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "1.8" } },
                          [
                            _c("vs-input", {
                              staticClass: "mt-4 w-3/4",
                              attrs: {
                                "label-placeholder": "In " + item.unit_measure
                              },
                              on: { change: _vm.calculate_time_totals },
                              model: {
                                value: item.max_time_spent,
                                callback: function($$v) {
                                  _vm.$set(item, "max_time_spent", $$v)
                                },
                                expression: "item.max_time_spent"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "1.8" } },
                          [
                            _c("vs-input", {
                              staticClass: "mt-4 w-3/4",
                              attrs: {
                                "label-placeholder": "In " + item.unit_measure
                              },
                              on: { change: _vm.calculate_time_totals },
                              model: {
                                value: item.avg_time_spent,
                                callback: function($$v) {
                                  _vm.$set(item, "avg_time_spent", $$v)
                                },
                                expression: "item.avg_time_spent"
                              }
                            })
                          ],
                          1
                        ),
                        _c("vs-col", { attrs: { "vs-w": "1.8" } }, [
                          _c("ul", [
                            _c("li", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tRework time(min):\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(item.min_time_waste) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _c("li", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tRework time(max):\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(item.max_time_waste) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _c("li", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tRework time(avg):\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(item.avg_time_waste) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ])
                        ]),
                        _c(
                          "vs-col",
                          {
                            staticClass: "rework_btn",
                            attrs: { "vs-w": "1.2" }
                          },
                          [
                            _c(
                              "vx-tooltip",
                              {
                                attrs: {
                                  text: "Add/View Rework",
                                  position: "left"
                                }
                              },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    color: "primary",
                                    type: "filled",
                                    radius: "",
                                    icon: "add"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.add_rework_form(item)
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
                ],
                2
              ),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: { title: "Thank You!", icon: "feather icon-image" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-row w-full flex flex-col align-middle mt-12"
                    },
                    [
                      _c("h3", [
                        _vm._v("Thank you for submitting the assessment")
                      ]),
                      _c("p", { staticClass: "mt-3" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\tWe may get in touch to further discuss the\n\t\t\t\t\t\tinformation provided as part of this assessment.\n\t\t\t\t\t\t"
                        ),
                        _c("br"),
                        _vm._v(
                          "If you have any questions regarding the\n\t\t\t\t\t\tassessment, please email us at\n\t\t\t\t\t\t"
                        ),
                        _c("span", { staticClass: "email-link" }, [
                          _vm._v("info@hudsonandhayes.co.uk")
                        ])
                      ])
                    ]
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "vs-popup",
        {
          staticClass: "vs-con-loading__container ",
          attrs: {
            title: "Thank You!",
            active: _vm.thankyouDone,
            "buttons-hidden": true
          },
          on: {
            "update:active": function($event) {
              _vm.thankyouDone = $event
            }
          }
        },
        [
          _c("vx-card", { attrs: { "no-shadow": "" } }, [
            _c("div", { staticClass: "vx-row w-full align-middle" }, [
              _c("div", { staticClass: "vx-col w-full " }, [
                _c(
                  "h2",
                  { staticClass: "mb-3 text-base font-semibold text-grey-700" },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tYou may close the page to exit the survey.\n\t\t\t\t\t\t"
                    )
                  ]
                )
              ])
            ])
          ])
        ],
        1
      ),
      _c(
        "vs-popup",
        {
          staticClass:
            "vs-con-loading__container employee_survey-popup rework_form",
          attrs: {
            title: "Add Rework",
            active: _vm.popupActive1,
            "buttons-hidden": true
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive1 = $event
            }
          }
        },
        [
          _c(
            "form",
            { attrs: { "data-vv-scope": "wastage_form", id: "wastage_form" } },
            [
              _c("vx-card", { attrs: { "no-shadow": "" } }, [
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/3" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Rework or waste time(min)")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric|min_value:1",
                            expression: "'required|numeric|min_value:1'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "rework_min_time" },
                        model: {
                          value: _vm.rework.min_time_waste,
                          callback: function($$v) {
                            _vm.$set(_vm.rework, "min_time_waste", $$v)
                          },
                          expression: "rework.min_time_waste"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has(
                                "wastage_form.rework_min_time"
                              ),
                              expression:
                                "errors.has('wastage_form.rework_min_time')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.errors.first("wastage_form.rework_min_time")
                            ) + "\n\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/3" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Rework or waste time(max)")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric|min_value:1",
                            expression: "'required|numeric|min_value:1'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "rework_max_time" },
                        model: {
                          value: _vm.rework.max_time_waste,
                          callback: function($$v) {
                            _vm.$set(_vm.rework, "max_time_waste", $$v)
                          },
                          expression: "rework.max_time_waste"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has(
                                "wastage_form.rework_max_time"
                              ),
                              expression:
                                "errors.has('wastage_form.rework_max_time')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.errors.first("wastage_form.rework_max_time")
                            ) + "\n\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/3" },
                    [
                      _c("small", { staticClass: "label" }, [
                        _vm._v("Rework or waste time(avg)")
                      ]),
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric|min_value:1",
                            expression: "'required|numeric|min_value:1'"
                          }
                        ],
                        staticClass: "w-full required",
                        attrs: { name: "rework_avg_time", value: _vm.total },
                        model: {
                          value: _vm.rework.avg_time_waste,
                          callback: function($$v) {
                            _vm.$set(_vm.rework, "avg_time_waste", $$v)
                          },
                          expression: "rework.avg_time_waste"
                        }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has(
                                "wastage_form.rework_avg_time"
                              ),
                              expression:
                                "errors.has('wastage_form.rework_avg_time')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.errors.first("wastage_form.rework_avg_time")
                            ) + "\n\t\t\t\t\t\t\t"
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
                        _vm._v("Reason for rework")
                      ]),
                      _c("vs-textarea", {
                        attrs: { name: "reason", height: "100px" },
                        model: {
                          value: _vm.rework.waste_reason,
                          callback: function($$v) {
                            _vm.$set(_vm.rework, "waste_reason", $$v)
                          },
                          expression: "rework.waste_reason"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c("div", { staticClass: "vx-col w-full" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex flex-wrap items-center justify-end mt-8"
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-auto mt-2",
                            on: {
                              click: function($event) {
                                return _vm.add_rework()
                              }
                            }
                          },
                          [_vm._v("Add")]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _c("div", { staticClass: "vx-row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c(
                        "vs-table",
                        {
                          staticClass: "table-dark-inverted add_process_table",
                          attrs: {
                            "max-items": "7",
                            stripe: "",
                            data: _vm.rework_list
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var data = ref.data
                                return _vm._l(data, function(tr, indextr) {
                                  return _c(
                                    "vs-tr",
                                    { key: indextr, attrs: { data: tr } },
                                    [
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].waste_reason
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(tr.waste_reason) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].min_time_waste
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(tr.min_time_waste) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].max_time_waste
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(tr.max_time_waste) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].avg_time_waste
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(tr.avg_time_waste) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
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
                              _c("vs-th", [_vm._v("Reason for rework")]),
                              _c("vs-th", [
                                _vm._v("Rework or waste time(min)")
                              ]),
                              _c("vs-th", [
                                _vm._v("Rework or waste time(max)")
                              ]),
                              _c("vs-th", [_vm._v("Rework or waste time(avg)")])
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                ])
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-breadcrumb--ol a .vs-breadcrumb--ol a[data-v-3d617999]:focus,\n.vs-breadcrumb--ol a[data-v-3d617999]:hover,\n.vs-breadcrumb--ol .active[data-v-3d617999] {\n  color: #10163a !important;\n}\n[dir] .faq-jumbotron-content[data-v-3d617999] {\n  background-image: url(" + escape(__webpack_require__(/*! @/assets/images/pages/faq.jpg */ "./src/assets/images/pages/faq.jpg")) + ");\n  background-size: cover;\n}\n[dir] .faq-bg[data-v-3d617999] {\n  background-color: #fff;\n}\n.vx-card__body[data-v-3d617999] {\n  height: 100vh;\n}\n.card-title[data-v-3d617999] {\n  font-weight: 500;\n}\n.showcase-img[data-v-3d617999] {\n  height: 40vh;\n}\n[dir] .showcase-img[data-v-3d617999] {\n  background-size: cover;\n  background-position: center;\n}\n.showcase-img p[data-v-3d617999] {\n  width: 50%;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 500;\n  position: relative;\n  top: 30%;\n  line-height: 1.5rem;\n}\n[dir] .showcase-img p[data-v-3d617999] {\n  background: rgba(0, 0, 0, 0.2);\n  padding: 2rem;\n}\n[dir=ltr] .showcase-img p[data-v-3d617999] {\n  border-radius: 0 25px 25px 0;\n}\n[dir=rtl] .showcase-img p[data-v-3d617999] {\n  border-radius: 25px 0 0 25px;\n}\nh4[data-v-3d617999] {\n  font-size: 2rem;\n}\n.profile-img[data-v-3d617999] {\n  height: 70%;\n  width: 70%;\n}\n.profile-img img[data-v-3d617999] {\n  height: 100%;\n}\n[dir] .bg-highlight[data-v-3d617999] {\n  background: #f4f4f4;\n  padding: 1rem;\n}\n[dir=ltr] .bg-highlight[data-v-3d617999] {\n  border-right: 1px solid #d7dae3;\n}\n[dir=rtl] .bg-highlight[data-v-3d617999] {\n  border-left: 1px solid #d7dae3;\n}\n.bg-highlight h3[data-v-3d617999] {\n  font-size: 1.2rem;\n}\n.submission-card[data-v-3d617999] {\n  line-height: 170%;\n}\n.submission-card .email-link[data-v-3d617999] {\n  color: #6556d7;\n}\n[dir] .vue-form-wizard button.wizard-btn[data-v-3d617999] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem;\n}\n.rework_btn[data-v-3d617999] {\n  display: grid;\n  justify-items: center;\n}\n[dir] .rework_btn[data-v-3d617999] {\n  margin-top: 1vw;\n}\n.rework_form.con-vs-popup .vs-popup[data-v-3d617999] {\n  width: 60% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0cec7552", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/images/logo/logo.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo/logo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.1660bf3d.png";

/***/ }),

/***/ "./src/assets/images/pages/faq.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/pages/faq.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/faq.8e0b3142.jpg";

/***/ }),

/***/ "./src/views/pages/surveys/SurveyForm.vue":
/*!************************************************!*\
  !*** ./src/views/pages/surveys/SurveyForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& */ "./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&");
/* harmony import */ var _SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=script&lang=js& */ "./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& */ "./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d617999",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3d617999')) {
      api.createRecord('3d617999', component.options)
    } else {
      api.reload('3d617999', component.options)
    }
    module.hot.accept(/*! ./SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& */ "./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& */ "./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&");
(function () {
      api.rerender('3d617999', {
        render: _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/surveys/SurveyForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=style&index=0&id=3d617999&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_id_3d617999_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=template&id=3d617999&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/surveys/SurveyForm.vue?vue&type=template&id=3d617999&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_3d617999_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map