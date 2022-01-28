((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[0],{

/***/ "./src/services/SurveyService.js":
/*!***************************************!*\
  !*** ./src/services/SurveyService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ "./src/axios.js");





var SurveyService = /*#__PURE__*/function () {
  function SurveyService() {
    var _defineProperty2;

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SurveyService);

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "survey_process", (_defineProperty2 = {
      client_id: 0,
      process_id: 0,
      client_department_id: 0,
      parent_client_process_id: null,
      level_id: 0,
      status: 0,
      process_lable: "New/Edit process"
    }, Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "parent_client_process_id", 0), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "notes", ""), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "survey_id", 0), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "outputs", ""), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "inputs", ""), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "documentation_link", ""), Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_defineProperty2, "sub_function", ""), _defineProperty2));

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "vas", {
      id: -1,
      vsa_process_id: -1,
      client_employee_id: -1,
      department_id: -1,
      sub_department_id: -1,
      total_fte: 0,
      pc_time_spent: 0,
      process_time_min: 0,
      process_time_max: 0,
      process_time_avg: 0,
      process_freq_id: -1,
      avg_freq_volume: 0,
      yearly_timings_multiplier: 0,
      unit_of_measure_id: -1,
      notes: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "vas_rework", {
      id: -1,
      vas_id: -1,
      time_min: 0,
      time_max: 0,
      time_avg: 0,
      notes: "",
      status: status
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "timing_survey", {
      id: -1,
      name: "",
      start_date: "",
      end_date: "",
      description: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ops_survey", {
      id: -1,
      name: "",
      start_date: "",
      end_date: "",
      description: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rework", {
      id: 0,
      client_assessment_response_id: 0,
      waste_reason: "",
      max_time_waste: 0,
      min_time_waste: 0,
      avg_time_waste: 0
    });
  }

  Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SurveyService, [{
    key: "get_survey_departments",
    value: function get_survey_departments() {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/processes");
    }
  }, {
    key: "get_survey_employees",
    value: function get_survey_employees(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/process", item);
    }
  }, {
    key: "get_client_surveys",
    value: function get_client_surveys(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(id, "/assessment/all"));
    }
  }, {
    key: "get_client_ops_surveys",
    value: function get_client_ops_surveys(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(id, "/ops-surveys"));
    }
  }, {
    key: "get_survey",
    value: function get_survey(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/process/".concat(id), item);
    }
  }, {
    key: "create_survey",
    value: function create_survey(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/process/".concat(id), item);
    }
  }, {
    key: "update_survey",
    value: function update_survey(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].put("/process/".concat(id), item);
    }
  }, {
    key: "delete_survey",
    value: function delete_survey(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/process/".concat(id), item);
    }
  }, {
    key: "get_all_survey_processes",
    value: function get_all_survey_processes(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/survey/${id}/processes/all");
    }
  }, {
    key: "get_process_timing_link",
    value: function get_process_timing_link(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment-token/".concat(assessment_id, "/-1"));
    }
  }, {
    key: "open_xlsx_link",
    value: function open_xlsx_link(link_url) {
      var link = "https://qa-api-hnh.enigma-tech.in/api" + link_url;
      window.open(link, "_blank");
    }
  }, {
    key: "get_survey_processes",
    value: function get_survey_processes(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/selected-processes")); //return axios.get(`/client/${client_id}/processes`);
    }
  }, {
    key: "create_survey_process",
    value: function create_survey_process(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(id, "/assessment/process"), item);
    }
  }, {
    key: "update_survey_process",
    value: function update_survey_process(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/process/".concat(id), item);
    }
  }, {
    key: "delete_survey_process",
    value: function delete_survey_process(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/client/process/".concat(id));
    }
  }, {
    key: "create_assesment",
    value: function create_assesment(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(id, "/assessment"), item);
    }
  }, {
    key: "create_survey_participant",
    value: function create_survey_participant(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/employee", item);
    }
  }, {
    key: "get_survey_participants",
    value: function get_survey_participants(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(id, "/employees")); // return axios.get(`/client/${id}/assessment/${id}/employees`);
    } //assessment department

  }, {
    key: "create_survey_department",
    value: function create_survey_department(client_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/department"), item);
    }
  }, {
    key: "get_survey_departments",
    value: function get_survey_departments(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(client_id, "/department"));
    }
  }, {
    key: "update_survey_department",
    value: function update_survey_department(department_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/department/".concat(department_id), item);
    }
  }, {
    key: "delete_survey_department",
    value: function delete_survey_department(department_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/client/department/".concat(department_id));
    }
  }, {
    key: "create_assessment_survey",
    value: function create_assessment_survey(client_id, item) {
      // return axios.post("/survey", item);
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/assessment"), item);
    }
  }, {
    key: "update_assessment",
    value: function update_assessment(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/assessment/".concat(id), item);
    }
  }, {
    key: "get_assessment_processes",
    value: function get_assessment_processes(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/processes"));
    }
  }, {
    key: "create_assessment",
    value: function create_assessment(client_assessment_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/assessment/".concat(client_assessment_id, "/generate"), item);
    }
  }, {
    key: "create_send_assessment",
    value: function create_send_assessment(client_assessment_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/assessment/".concat(client_assessment_id, "/generate-send"), item);
    }
  }, {
    key: "get_assessment_survey",
    value: function get_assessment_survey(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/assessment/".concat(id));
    }
  }, {
    key: "get_assessment_process_tree",
    value: function get_assessment_process_tree(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/processes-tree"));
    }
  }, {
    key: "save_assessment_process",
    value: function save_assessment_process(id, obj) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/assessment/".concat(id, "/selected-processes"), obj);
    }
  }, {
    key: "get_employee_timing_result",
    value: function get_employee_timing_result(client_id, assessment_id, filters) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/assessment/".concat(assessment_id, "/employee_timing_result"), filters);
    }
  }, {
    key: "get_ops_survey_report",
    value: function get_ops_survey_report(ops_survey_id, filters) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey/".concat(ops_survey_id, "/report"), filters);
    }
  }, {
    key: "get_timing_result",
    value: function get_timing_result(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/timing_result"));
    }
  }, {
    key: "get_employee_timing_report",
    value: function get_employee_timing_report(assessment_id, dimension, dimension_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/").concat(dimension, "/").concat(dimension_id));
    }
  }, {
    key: "get_assessment_available_dept_employees",
    value: function get_assessment_available_dept_employees(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/department-employees"));
    }
  }, {
    key: "get_assessment_employees",
    value: function get_assessment_employees(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/assessment/".concat(assessment_id, "/employees"));
    }
  }, {
    key: "create_assessment_employees",
    value: function create_assessment_employees(assessment_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/assessment/".concat(assessment_id, "/employees"), item);
    }
  }, {
    key: "delete_assessment_employee",
    value: function delete_assessment_employee(employee_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/assessment/employee/".concat(employee_id));
    }
  }, {
    key: "update_assessment_employee",
    value: function update_assessment_employee(employee_id, update) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("assessment/employee/".concat(employee_id), update);
    }
  }, {
    key: "update_assessment_employee_token",
    value: function update_assessment_employee_token(employee_id, update, token) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("assessment/employee/".concat(employee_id, "/").concat(token), update);
    }
  }, {
    key: "send_survey",
    value: function send_survey(client_assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/assessment/".concat(client_assessment_id, "/send"));
    }
  }, {
    key: "resend_to_employee",
    value: function resend_to_employee(assessment_id, employee_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/employee/").concat(employee_id));
    }
  }, {
    key: "resend_ops_to_employee",
    value: function resend_ops_to_employee(ops_survey_id, employee_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(ops_survey_id, "/employee/").concat(employee_id, "/send"));
    }
  }, {
    key: "send_ops_survey",
    value: function send_ops_survey(ops_survey_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(ops_survey_id, "/send"));
    }
  }, {
    key: "get_assessment_summary",
    value: function get_assessment_summary(assessment_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/summary"));
    }
  }, {
    key: "create_rework",
    value: function create_rework(response_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/response/".concat(response_id, "/wastage"), item);
    }
  }, {
    key: "create_rework_token",
    value: function create_rework_token(response_id, item, token) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/response/".concat(response_id, "/").concat(token, "/wastage"), item);
    } //ops survey

  }, {
    key: "get_client_ops_survey",
    value: function get_client_ops_survey(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id));
    }
  }, {
    key: "create_ops_survey",
    value: function create_ops_survey(client_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/ops-survey"), item);
    }
  }, {
    key: "update_ops_survey",
    value: function update_ops_survey(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey/".concat(id), item);
    }
  }, {
    key: "create_ops_survey_process_employees",
    value: function create_ops_survey_process_employees(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey/".concat(id, "/employee-processes"), item);
    }
  }, {
    key: "get_survey_process_employees",
    value: function get_survey_process_employees(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id, "/process-employees"));
    }
  }, {
    key: "delete_process_employee",
    value: function delete_process_employee(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/employee-process/".concat(id));
    }
  }, {
    key: "get_ops_survey_summary",
    value: function get_ops_survey_summary(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id, "/summary"));
    }
  }, {
    key: "create_ops_assessment",
    value: function create_ops_assessment(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id, "/generate"));
    }
  }, {
    key: "create_send_ops_assessment",
    value: function create_send_ops_assessment(ops_survey_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("ops-survey/".concat(ops_survey_id, "/generate-send"));
    } ///ops-survey/{ops_survey_id}/generate-send

  }, {
    key: "get_emp_survey_details",
    value: function get_emp_survey_details(assessment_id, emp_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/assessment/".concat(assessment_id, "/employee/").concat(emp_id, "/timing-assessment"));
    }
  }, {
    key: "get_emp_survey_token_details",
    value: function get_emp_survey_token_details(token) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/employee-assessment/".concat(token));
    }
  }, {
    key: "submit_timing_survey_responses",
    value: function submit_timing_survey_responses(assessment_id, emp_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/assessment/".concat(assessment_id, "/employee/").concat(emp_id, "/responses"), item);
    }
  }, {
    key: "submit_timing_survey_responses_with_token",
    value: function submit_timing_survey_responses_with_token(token, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/assessment/".concat(token, "/responses-token"), item);
    }
  }, {
    key: "get_ops_survey_participants",
    value: function get_ops_survey_participants(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id, "/employees"));
    }
  }, {
    key: "get_ops_survey_details",
    value: function get_ops_survey_details(id, emp_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(id, "/employee/").concat(emp_id));
    }
  }, {
    key: "get_ops_survey_token_details",
    value: function get_ops_survey_token_details(token) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("ops-survey/".concat(token, "/get-survey"));
    }
  }, {
    key: "submit_ops_survey_lever_response",
    value: function submit_ops_survey_lever_response(lever_response_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey-lever/".concat(lever_response_id), item);
    }
  }, {
    key: "submit_ops_survey_lever_response_token",
    value: function submit_ops_survey_lever_response_token(lever_response_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey-lever/".concat(lever_response_id, "/token"), item);
    }
  }, {
    key: "create_lever_opportunity",
    value: function create_lever_opportunity(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/opportunity", item);
    }
  }, {
    key: "update_lever_opportunity",
    value: function update_lever_opportunity(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/opportunity/".concat(id), item);
    }
  }, {
    key: "remove_lever_opportunity",
    value: function remove_lever_opportunity(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/opportunity/".concat(id));
    }
  }, {
    key: "update_ops_survey_process",
    value: function update_ops_survey_process(survey_id, process_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey/".concat(survey_id, "/process/").concat(process_id), item);
    }
  }, {
    key: "remove_ops_employee_process",
    value: function remove_ops_employee_process(survey_id, client_process_ids) {
      // let formData = new FormData();
      // formData.append("client_process_ids", client_process_ids);
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/ops-survey/".concat(survey_id, "/processes-remove"), {
        client_processes_ids: client_process_ids
      });
    }
  }, {
    key: "submit_completion",
    value: function submit_completion(ops_survey_id, client_employee_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/ops-survey/".concat(ops_survey_id, "/employee/").concat(client_employee_id, "/complete"));
    }
  }, {
    key: "get_survey_counts",
    value: function get_survey_counts(client_id, ops_survey_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(client_id, "/ops-survey/").concat(ops_survey_id, "/completion"));
    }
  }]);

  return SurveyService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SurveyService());

/***/ })

}]);
//# sourceMappingURL=0.js.map