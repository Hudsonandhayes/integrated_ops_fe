((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[37],{

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

/***/ "./src/services/ClientService.js":
/*!***************************************!*\
  !*** ./src/services/ClientService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ "./src/axios.js");





var ClientService = /*#__PURE__*/function () {
  function ClientService() {
    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientService);

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client", {
      id: -1,
      name: "",
      address: "",
      industry: "",
      standard_weekly_hours: 0,
      standard_monthly_hours: 0,
      standard_quarterly_hours: 0,
      standard_yearly_hours: 0,
      utilisation_rate: 0,
      phone1: "",
      status: 0,
      notes: ""
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "employee", {
      id: -1,
      name: "",
      email: "",
      verified: 0,
      role: "",
      status: 0,
      action: 0,
      client_id: 0
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client_employee", {
      id: -1,
      client_id: -1,
      last_name: "",
      phone: "",
      email: "",
      function_id: -1,
      sub_function: "",
      job_title: "",
      job_type: 1,
      fte_equivalent: 1,
      weekly_fte_hours: 40,
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client_department", {
      id: -1,
      client_id: 0,
      department_id: 0,
      department_label: "",
      sub_function: "",
      region: "",
      country: "",
      location: "",
      total_fte: 40,
      notes: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client_process", {
      id: -1,
      client_id: -1,
      client_tree_id: 0,
      process_ids: [],
      parent_process_tree_id: 0,
      frequency_id: 0,
      unit_measure_id: 0,
      average_volume: 0,
      order: 1,
      notes: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client_department_processes", {
      client_process_ids: [],
      client_id: -1,
      department_id: -1,
      sub_department: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client_process_levers", {
      process_ids: [],
      lever_ids: []
    });
  }

  Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientService, [{
    key: "get_survey",
    // get_client_surveys(id) {
    // 	return axios.get(`/client/${id}/surveys`);
    // }
    // get_client_surveys(id) {
    // 	return axios.get(`/survey/${id}`);
    // }
    value: function get_survey(id, survey_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(id, "/survery/").concat(survey_id));
    }
  }, {
    key: "create_survey",
    value: function create_survey(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("clinic/".concat(id, "/survey"), item);
    }
  }, {
    key: "update_survey",
    value: function update_survey(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/survey/".concat(id), item);
    }
  }, {
    key: "delete_survey",
    value: function delete_survey(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/survey/".concat(id));
    }
  }, {
    key: "get_clients",
    value: function get_clients() {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/clients/all");
    }
  }, {
    key: "get_client",
    value: function get_client(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(client_id));
    }
  }, {
    key: "create_client",
    value: function create_client(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client", item);
    }
  }, {
    key: "update_client",
    value: function update_client(client_id, client) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id), client);
    }
  }, {
    key: "get_client_contact",
    value: function get_client_contact(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("client/".concat(client_id, "/contacts"));
    }
  }, {
    key: "create_client_contact",
    value: function create_client_contact(client_id, contact) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/contact"), contact);
    }
  }, {
    key: "get_client_departments",
    value: function get_client_departments(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(client_id, "/departments"));
    }
  }, {
    key: "create_client_department",
    value: function create_client_department(department) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client-department", department);
    }
  }, {
    key: "update_client_department",
    value: function update_client_department(department_id, department) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client-department/".concat(department_id), department);
    }
  }, {
    key: "delete_client_department",
    value: function delete_client_department(department_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/client-department/".concat(department_id));
    } //client-employees api

  }, {
    key: "create_client_employee",
    value: function create_client_employee(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/employee", item);
    }
  }, {
    key: "get_client_employees",
    value: function get_client_employees(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(id, "/employees"));
    }
  }, {
    key: "update_employee",
    value: function update_employee(id, employee) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/employee/".concat(id), employee);
    }
  }, {
    key: "delete_employee",
    value: function delete_employee(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/employee/".concat(id));
    }
  }, {
    key: "import_client_employee",
    value: function import_client_employee(client_id, doc_file) {
      try {
        var formData = new FormData();

        if (doc_file && doc_file !== undefined) {
          formData.append('csv_file', doc_file);
          console.log('document file found!');
        }

        return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/employees/load"), formData);
      } catch (e) {
        return false;
      }
    } // //client department api's
    // create_client_department(client_id, department) {
    // 	return axios.post(`/client/${client_id}/department`, department);
    // }
    // get_client_departments(client_id) {
    // 	return axios.get(`/client/${client_id}/department`);
    // }

  }, {
    key: "create_client_process_level",
    value: function create_client_process_level(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client_tree/".concat(id, "/process"), item);
    } // get_client_processes(client_id) {
    // 	return axios.get(`/client/${client_id}/processes/all`);
    // }

  }, {
    key: "get_client_processes",
    value: function get_client_processes(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client-processes/".concat(client_id));
    }
  }, {
    key: "get_client_process_tree",
    value: function get_client_process_tree(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/client/".concat(client_id, "/process-tree"));
    }
  }, {
    key: "create_client_processes",
    value: function create_client_processes(client_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/processes"), item);
    }
  }, {
    key: "update_client_process",
    value: function update_client_process(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/process/".concat(id), item);
    }
  }, {
    key: "delete_client_process",
    value: function delete_client_process(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/client-process-tree/".concat(id));
    }
  }, {
    key: "create_client_department_processes",
    value: function create_client_department_processes(department_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client-department/".concat(department_id, "/processes"), item);
    }
  }, {
    key: "create_client_proces_levers",
    value: function create_client_proces_levers(client_id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/client/".concat(client_id, "/process-levers"), item);
    }
  }]);

  return ClientService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ClientService());

/***/ })

}]);
//# sourceMappingURL=37.js.map