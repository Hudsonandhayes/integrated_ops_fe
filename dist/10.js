((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/KanbanCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KanbanCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'kanban-card',
  components: {},
  props: {
    task: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    badgeColor: function badgeColor() {
      var mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal"
      };
      return mappings[this.task.type] || mappings.default;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_KanbanCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/KanbanCard.vue */ "./src/components/KanbanCard.vue");
/* harmony import */ var _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/OpportunityService.js */ "./src/services/OpportunityService.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'kanban-board',
  components: {
    KanbanCard: _components_KanbanCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_4___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a,
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    return {
      show_loading: false,
      update_from_list: false,
      update_ops_key: 0,
      client_id: -1,
      show_board_update: false,
      current_item_view: 'item-grid-view',
      sel_col_select: -1,
      opportunities: [],
      opportunity_list: [],
      column_select: [],
      columns: [],
      show_sidebar: false,
      edit_opportunity: false,
      opportunity: {},
      dataDoc: null,
      document: {
        name: '',
        opportunity_stage_id: -1
      },
      token: '',
      comment: '',
      opportunity_comments: [],
      opportunity_documents: [],
      selected_opp_index: -1,
      selected_opp_col_index: -1,
      breadcrumbs: [{
        title: "Home",
        url: "/"
      }, {
        title: "Clients",
        url: "/pages/client/".concat(this.$route.params.client_id)
      }, {
        title: "Opportunity Pipeline",
        active: true
      }]
    };
  },
  methods: {
    get_stage_label: function get_stage_label(id) {
      var item = this.column_select.find(function (item) {
        return item.id === id;
      });
      return item ? item.name : 'N/a';
    },
    add_opportunity_doc: function add_opportunity_doc() {
      var _that = this;

      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].save_opportunity_file(this.opportunity.id, this.document, this.dataDoc).then(function (resp) {
        var data = resp.data.data;

        if (data && data !== undefined) {
          _that.opportunity_documents.push(data);

          _that.document = [];
          _that.dataDoc = null;
        }
      });
    },
    update_opportunity_comment: function update_opportunity_comment(comment) {
      var _that = this;

      if (this.comment.length > 0) {
        var _that2 = this;

        this.$vs.loading();
        _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].add_opportunity_comment(this.opportunity.id, this.comment).then(function (resp) {
          var data = resp.data;

          if (data && data !== undefined) {
            if (data.success) {
              _that2.opportunity_comments.push(data.data);

              _that2.comment = '';

              _that2.$vs.notify({
                title: "Save Successful",
                text: "Comment has been added successfully.",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "success",
                timing: 4000
              });
            } else {
              _that2.$vs.notify({
                title: "Update comment",
                text: data.error,
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
                timing: 4000
              });
            }
          }

          _that2.$vs.loading.close();
        }).catch(function (err) {
          _that2.$vs.loading.close();

          _that2.$vs.notify({
            title: "Failed : Opps Comment Save",
            text: err.message,
            color: "warning",
            timing: 4000
          });
        });
      }
    },
    remove_opportunity_doc: function remove_opportunity_doc(id, index) {
      var _that = this;

      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].remove_opportunity_document(id).then(function ($resp) {
        var data = resp.data.data;

        if (data && data !== undefined) {
          if (data.success) {
            _that.opportunity_documents.splice(index, 1);

            _that.$vs.notify({
              title: "Delete Successful",
              text: "Opportunity Document has been deleted",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "sucess",
              timing: 4000
            });
          } else {
            _that.$vs.notify({
              title: "Remove opportunity document",
              text: data.error,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
              timing: 4000
            });
          }
        }
      }).catch(function (err) {
        _that.$vs.notify({
          title: "Removing opportunity document",
          text: err.message,
          color: "warning",
          timing: 4000
        });
      });
    },
    remove_opportunity_comment: function remove_opportunity_comment(id, index) {
      var _that = this;

      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].remove_opportunity_comment(id).then(function (resp) {
        var data = resp.data;

        if (data && data !== undefined) {
          if (data.success) {
            _that.opportunity_comments.splice(index, 1);

            _that.$vs.notify({
              title: "Delete Successful",
              text: "Opportunity Comment has been deleted",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "sucess",
              timing: 4000
            });
          } else {
            _that.$vs.notify({
              title: "Remove document",
              text: data.error,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
              timing: 4000
            });
          }
        }
      }).catch(function (err) {
        _that.$vs.loading.close();

        _that.$vs.notify({
          title: err.message,
          text: "Failed",
          color: "warning",
          timing: 4000
        });
      });
    },
    view_opportunity_doc: function view_opportunity_doc(item) {
      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].open_oppportunity_file(item.document_link, item.external);
    },
    get_client_opportunities_details: function get_client_opportunities_details() {
      var _that = this;

      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].get_client_opportunities(this.client_id).then(function (resp) {
        var data = resp.data.data;

        if (data && data !== undefined) {
          _that.columns = data.columns;
          var filter_select = false;
          _that.token = data.token;

          if (data.columns.length > 0) {
            _that.column_select.push({
              id: -1,
              name: "All Stages"
            });

            data.columns.forEach(function (d) {
              var tasks = d.tasks || [];
              var title_id = d.title_id || -1;
              var title = d.title || "";

              if (title_id > -1 && title.length > 0) {
                _that.column_select.push({
                  id: title_id,
                  name: title
                });
              }

              if (!filter_select) {
                filter_select = true;

                if (tasks.length > 0) {
                  _that.opportunity_list = tasks;
                  _that.sel_col_select = d.title_id;
                }
              }
            });
          }
        }
      });
    },
    drop_end: function drop_end(evt) {
      var new_col = parseInt(evt.to.getAttribute('data-col'), 10) || -1;
      var card_id = parseInt(evt.item.getAttribute('data-id'), 10) || -1;

      if (card_id > 0 && new_col > 0) {
        var card_obj = {
          'column_id': new_col
        };

        var _that = this; //call API to save the new status of the card 


        _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].move_client_opportunity(card_id, card_obj).then(function (resp) {
          var data = resp.data;

          if (data && data !== undefined) {
            if (data.success) {
              _that.columns.forEach(function (col) {
                if (col.title_id === new_col) {
                  col.tasks.forEach(function (task) {
                    if (task.id === card_id) {
                      task.opportunity_stage_id = new_col;
                    }
                  });
                }
              });
            } else {
              _that.$vs.notify({
                title: "Move opportunity cards",
                text: "Error moving opportunity cards",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
                timing: 4000
              });
            }
          }
        }).catch(function (err) {
          _that.$vs.notify({
            title: "Move opportunity cards",
            text: "Error moving opportunity cards",
            color: "warning",
            timing: 4000
          });
        });
      }
    },
    add_to_list: function add_to_list(event) {//console.log("add event "+event);
    },
    on_card_edit: function on_card_edit(item) {
      this.edit_opportunity = true;
      this.opportunity = item;
      this.opportunity_documents = this.opportunity.documents;
      this.opportunity_comments = this.opportunity.comments;
      this.show_sidebar = true;
      this.update_ops_key += 1;
      this.update_from_list = false;
      this.selected_opp_col_index = item.opportunity_stage_id || -1;
    },
    on_close_sidebar: function on_close_sidebar() {
      this.show_sidebar = false;
      this.dataDoc = null;
    },
    update_opportunity: function update_opportunity(item, index) {
      this.edit_opportunity = true;
      this.update_from_list = true;
      this.opportunity = item;
      this.selected_opp_index = index;
      this.opportunity_documents = this.opportunity.documents;
      this.opportunity_comments = this.opportunity.comments;
      this.selected_opp_col_index = item.opportunity_stage_id || -1;
      this.show_sidebar = true;
      this.update_ops_key += 1;
      this.$validator.reset();
    },
    add_new_opportunity: function add_new_opportunity() {
      this.edit_opportunity = false;
      this.opportunity = Object.assign({}, _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].opportunity_pipeline);
      this.opportunity_documents = [];
      this.opportunity_comments = [];
      this.show_sidebar = true;
      this.update_ops_key += 1;
      this.$validator.reset();
    },
    export_opportunity: function export_opportunity() {
      _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].download_oppportunity_report(this.token);
    },
    move_opportunity: function move_opportunity(opportunity_item) {
      var _that = this;

      if (this.opportunity.id > 0) {
        _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].move_client_opportunity(this.opportunity.id, opportunity_item).then(function (resp) {
          var data = resp.data;

          if (data && data !== undefined) {
            if (data.success) {} else {
              _that.$vs.notify({
                title: "Move opportunity",
                text: "Error moving opportunity.",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
                timing: 4000
              });
            }
          }
        }).catch(function (err) {
          _that.$vs.notify({
            title: "Move opportunity",
            text: "Error moving opportunity",
            color: "warning",
            timing: 4000
          });
        });
      }
    },
    update_client_opportunity: function update_client_opportunity(opportunity_item) {
      var _that = this;

      if (this.opportunity.opportunity_stage_id > 0) {
        this.$validator.validateAll("opps_form").then(function (result) {
          if (result) {
            if (_that.opportunity.id > 0) {
              _that.$vs.loading();

              _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].update_client_opportunity(_that.opportunity.id, opportunity_item).then(function (resp) {
                var data = resp.data;

                if (data && data !== undefined) {
                  if (data.success) {
                    var new_data = data.data;

                    if (_that.selected_opp_col_index !== new_data.opportunity_stage_id) {
                      _that.columns.forEach(function (col) {
                        if (col.title_id === _that.selected_opp_col_index) {
                          col.tasks.forEach(function (task, index) {
                            if (task.id === new_data.id) {
                              col.tasks.splice(index, 1);
                            }
                          });
                        }

                        if (col.title_id === new_data.opportunity_stage_id) {
                          col.tasks.push(new_data);
                        }
                      });

                      _that.selected_opp_col_index = new_data.opportunity_stage_id;
                    }

                    if (_that.update_from_list) {
                      var update_index = _that.opportunity_list.findIndex(function (element) {
                        return element.id === _that.opportunity.id;
                      });

                      _that.opportunity_list.splice(update_index, 1, new_data); // _that.opportunity_list.forEach((value, key) => {
                      // 	if(_that.opportunity.id === value.id){
                      // 		_that.opportunity_list.splice(key, 1, new_data);
                      // 	}
                      // });	

                    } else {}

                    if (_that.sel_col_select !== _that.selected_opp_col_index) {
                      _that.sel_col_select = _that.selected_opp_col_index;

                      _that.changed_col_filter(_that.selected_opp_col_index);
                    }

                    _that.show_sidebar = false;

                    _that.$vs.loading.close();
                  } else {
                    _that.$vs.notify({
                      title: "Update opportunity",
                      text: "Invalid data",
                      iconPack: "feather",
                      icon: "icon-alert-circle",
                      color: "warning",
                      timing: 4000
                    });

                    _that.$vs.loading.close();
                  }
                }

                _that.$vs.loading.close();
              }).catch(function (err) {
                _that.$vs.loading.close();

                _that.$vs.notify({
                  title: "Update opportunity",
                  text: err.message,
                  color: "warning",
                  timing: 4000
                });
              });
            } else {
              _that.opportunity.client_id = _that.client_id;
              _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].create_client_opportunity(_that.opportunity).then(function (resp) {
                var data = resp.data;

                if (data && data !== undefined) {
                  if (data.success) {
                    _that.opportunity.id = data.data.id;
                    _that.selected_opp_col_index = data.data.opportunity_stage_id;
                    _that.edit_opportunity = true;

                    _that.columns.forEach(function (col) {
                      if (col.title_id === _that.opportunity.opportunity_stage_id) {
                        col.tasks.push(data.data);
                      }
                    });

                    if (_that.sel_col_select !== _that.opportunity.opportunity_stage_id) {
                      _that.sel_col_select = _that.opportunity.opportunity_stage_id;

                      _that.changed_col_filter(_that.opportunity.opportunity_stage_id);
                    }
                  } else {
                    _that.$vs.notify({
                      title: "Create opportunity",
                      text: "Invalid data",
                      iconPack: "feather",
                      icon: "icon-alert-circle",
                      color: "warning",
                      timing: 4000
                    });
                  }
                }

                _that.$vs.loading.close();
              }).catch(function (err) {
                _that.$vs.loading.close();

                _that.$vs.notify({
                  title: "Create opportunity",
                  text: "Invalid data",
                  color: "warning",
                  timing: 4000
                });
              });
            }
          }
        });
      } else {
        this.$vs.notify({
          title: "Select Stage",
          text: "Please select stage",
          color: "warning",
          timing: 4000
        });
      }
    },
    confirm_delete_opportunity: function confirm_delete_opportunity(opportunity) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm Opportunity Delete",
        text: "Please confirm that you wish to delete the Opportunity? Any data related to the Opportunity may also get deleted.",
        accept: this.delete_opprtunity,
        parameters: opportunity
      });
    },
    delete_opprtunity: function delete_opprtunity(opportunity) {
      var _that = this;

      if (this.opportunity.id > 0) {
        this.$vs.loading();
        _services_OpportunityService_js__WEBPACK_IMPORTED_MODULE_6__["default"].delete_opportunity(this.opportunity.id).then(function (resp) {
          var data = resp.data;

          if (data && data !== undefined) {
            if (data.success === true) {
              _that.columns.forEach(function (col) {
                col.tasks.forEach(function (task, index) {
                  if (task.id === _that.opportunity.id) {
                    col.tasks.splice(index, 1);
                  }
                });
              });

              if (_that.update_from_list) {
                _that.opportunity_list.forEach(function (value, key) {
                  if (_that.opportunity.id === value.id) {
                    _that.opportunity_list.splice(key, 1);
                  }
                });
              }

              _that.$vs.notify({
                title: "Opportunity Removed",
                text: "Opportunity has been removed successfully",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "primary",
                timing: 4000
              });

              _that.show_sidebar = false;

              _that.$vs.loading.close();
            } else {
              _that.$vs.notify({
                title: "Error: Removing Opportunity",
                text: data.error,
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
                timing: 4000
              });

              _that.$vs.loading.close();
            }
          }
        }).catch(function (err) {
          _that.$vs.loading.close();

          _that.$vs.notify({
            title: "Error: Removing Opportunity",
            text: "Invalid data",
            color: "warning",
            timing: 4000
          });
        });
      }
    },
    switch_to_view: function switch_to_view(id) {
      if (id === 1) {
        this.current_item_view = 'item-grid-view';
      } else if (id === 2) {
        this.current_item_view = 'item-list-view';
      }
    },
    changed_col_filter: function changed_col_filter(value) {
      this.opportunity_list = [];
      var new_list = [];
      this.columns.forEach(function (c) {
        var tasks = c.tasks || [];

        if (value === -1) {
          console.log("adding item to list");
          new_list = new_list.concat(tasks);
        } else {
          if (c.title_id === value) {
            if (tasks.length > 0) {
              new_list = tasks;
            }
          }
        }
      });
      this.opportunity_list = new_list;
    },
    update_opps_document: function update_opps_document(input) {
      this.document.opportunity_stage_id = this.opportunity.opportunity_stage_id;

      if (input.target.files && input.target.files[0]) {
        this.dataDoc = input.target.files[0];
      }
    }
  },
  created: function created() {
    this.client_id = this.$route.params.client_id || -1;
    this.get_client_opportunities_details();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KanbanCard.vue?vue&type=template&id=12fdb997& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "bg-white shadow rounded px-3 pt-3 pb-5 border border-white",
      on: {
        dblclick: function($event) {
          return _vm.$emit("on_card_edit", _vm.task)
        }
      }
    },
    [
      _c("div", { staticClass: "flex justify-between" }, [
        _c(
          "p",
          {
            staticClass:
              "text-gray-700 font-semibold font-sans tracking-wide text-sm"
          },
          [_vm._v("\n\t\t\t" + _vm._s(_vm.task.name) + "\n\t\t")]
        )
      ]),
      _c(
        "div",
        { staticClass: "flex mt-4 justify-between" },
        [
          _vm.task.lever_name
            ? _c(
                "vs-chip",
                [
                  _c("vs-avatar"),
                  _vm._v("\n\t\t\t" + _vm._s(_vm.task.lever_name) + "\n\t\t")
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _c("span", { staticClass: "text-sm text-gray-600" }, [
        _vm._v(_vm._s(_vm.task.date))
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "kanban-app" } }, [
    _c(
      "div",
      { staticClass: "flex justify-end mb-5" },
      [
        _c("vs-breadcrumb", {
          staticClass: "flex-grow justify-start",
          attrs: { items: _vm.breadcrumbs }
        }),
        _c(
          "vs-button",
          {
            staticClass: "mr-2",
            attrs: { color: "primary", type: "filled" },
            on: { click: _vm.export_opportunity }
          },
          [_vm._v("\n\t\t\tDownload\n\t\t")]
        ),
        _c(
          "vs-button",
          {
            staticClass: "mr-2",
            attrs: { color: "primary", type: "filled" },
            on: { click: _vm.add_new_opportunity }
          },
          [_vm._v("\n\t\t\tNew Opportunity\n\t\t")]
        ),
        _vm.current_item_view == "item-list-view"
          ? _c("v-select", {
              staticClass: "mr-2 w-1/2",
              attrs: {
                options: _vm.column_select,
                label: "name",
                reduce: function(col) {
                  return col.id
                },
                dir: _vm.$vs.rtl ? "rtl" : "ltr"
              },
              on: { input: _vm.changed_col_filter },
              model: {
                value: _vm.sel_col_select,
                callback: function($$v) {
                  _vm.sel_col_select = $$v
                },
                expression: "sel_col_select"
              }
            })
          : _vm._e(),
        _c("feather-icon", {
          staticClass:
            "p-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer",
          attrs: {
            icon: "GridIcon",
            svgClasses: {
              "text-primary stroke-current":
                _vm.current_item_view == "item-grid-view"
            }
          },
          on: {
            click: function($event) {
              return _vm.switch_to_view(1)
            }
          }
        }),
        _c("feather-icon", {
          staticClass:
            "p-2 ml-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer hidden sm:inline-flex",
          attrs: {
            icon: "ListIcon",
            svgClasses: {
              "text-primary stroke-current":
                _vm.current_item_view == "item-list-view"
            }
          },
          on: {
            click: function($event) {
              return _vm.switch_to_view(2)
            }
          }
        }),
        _vm.show_board_update
          ? _c(
              "vs-button",
              {
                attrs: { color: "primary", type: "filled" },
                on: { click: _vm.update_process_tree }
              },
              [_vm._v("\n\t\t\tUpdate Board\n\t\t")]
            )
          : _vm._e()
      ],
      1
    ),
    _c(
      "div",
      { attrs: { id: "kanban-content" } },
      [
        _vm.current_item_view == "item-grid-view"
          ? [
              _c("div", { staticClass: "flex justify-start" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "min-h-screen flex px-4 pb-8 items-start overflow-x-scroll "
                  },
                  _vm._l(_vm.columns, function(column) {
                    return _c(
                      "div",
                      {
                        key: column.title_id,
                        staticClass:
                          "rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3",
                        attrs: { "data-id": column.title_id }
                      },
                      [
                        _c("div", { staticClass: "text-center py-1" }, [
                          _c(
                            "h3",
                            {
                              staticClass: "text-base font-bold text-gray-700 "
                            },
                            [_vm._v(_vm._s(column.title))]
                          )
                        ]),
                        _c(
                          "draggable",
                          {
                            attrs: {
                              list: column.tasks,
                              animation: 200,
                              "ghost-class": "ghost-card",
                              "data-col": column.title_id,
                              group: "tasks",
                              "empty-insert-threshold": 100
                            },
                            on: { end: _vm.drop_end }
                          },
                          _vm._l(column.tasks, function(task) {
                            return _c("kanban-card", {
                              key: task.id,
                              staticClass: "mt-3 cursor-move",
                              attrs: { task: task, "data-id": task.id },
                              on: { on_card_edit: _vm.on_card_edit }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            ]
          : _vm._e(),
        _vm.current_item_view == "item-list-view"
          ? [
              _c(
                "vx-card",
                {
                  staticClass: "flex flex-col bg-white  justify-center mt-3",
                  attrs: { title: "List of Opportunities" }
                },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: {
                        search: "",
                        "max-items": "10",
                        pagination: "",
                        data: _vm.opportunity_list
                      },
                      scopedSlots: _vm._u(
                        [
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
                                        return _vm.update_opportunity(
                                          tr,
                                          indextr
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("vs-td", { attrs: { data: tr.name } }, [
                                      _vm._v(_vm._s(tr.name))
                                    ]),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: { data: tr.opportunity_stage_id }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(
                                              _vm.get_stage_label(
                                                tr.opportunity_stage_id
                                              )
                                            ) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: tr.lever_name } },
                                      [_vm._v(_vm._s(tr.lever_name))]
                                    ),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: tr.overall_goal } },
                                      [_vm._v(_vm._s(tr.overall_goal))]
                                    ),
                                    _c("vs-td", { attrs: { data: tr.owner } }, [
                                      _vm._v(_vm._s(tr.owner))
                                    ]),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: {
                                          data: tr.applications_impacted
                                        }
                                      },
                                      [_vm._v(_vm._s(tr.applications_impacted))]
                                    ),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: {
                                          data: tr.annual_transaction_count
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(tr.annual_transaction_count)
                                        )
                                      ]
                                    ),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: tr.process_time } },
                                      [_vm._v(_vm._s(tr.process_time))]
                                    ),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: tr.pc_saving } },
                                      [_vm._v(_vm._s(tr.pc_saving))]
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
                                                  return _vm.update_opportunity(
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
                        ],
                        null,
                        false,
                        1098816083
                      )
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", { attrs: { "sort-key": "name" } }, [
                            _vm._v("Name")
                          ]),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "opportunity_stage_id" } },
                            [_vm._v("Phase")]
                          ),
                          _c("vs-th", { attrs: { "sort-key": "lever_name" } }, [
                            _vm._v("Lever")
                          ]),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "overall_goal" } },
                            [_vm._v("Overall Goal")]
                          ),
                          _c("vs-th", { attrs: { "sort-key": "owner" } }, [
                            _vm._v("Process Owner")
                          ]),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "applications_impacted" } },
                            [_vm._v("Applications Impacted")]
                          ),
                          _c(
                            "vs-th",
                            {
                              attrs: { "sort-key": "annual_transaction_count" }
                            },
                            [_vm._v("Annual Transcation Count")]
                          ),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "process_time" } },
                            [_vm._v("Process Time")]
                          ),
                          _c("vs-th", { attrs: { "sort-key": "pc_saving" } }, [
                            _vm._v("Saving")
                          ]),
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
            ]
          : _vm._e(),
        _c(
          "vs-sidebar",
          {
            key: _vm.update_ops_key,
            staticClass: "kanban-sidebar items-no-padding sidebarx ",
            attrs: {
              "position-right": "",
              "hidden-background": true,
              parent: "#kanban-content",
              color: "primary",
              spacer: ""
            },
            model: {
              value: _vm.show_sidebar,
              callback: function($$v) {
                _vm.show_sidebar = $$v
              },
              expression: "show_sidebar"
            }
          },
          [
            _c(
              "div",
              { staticClass: "mt-6 flex items-center justify-between px-6" },
              [
                _c("h4", [
                  _vm._v(
                    _vm._s(this.edit_opportunity ? "UPDATE" : "ADD NEW") +
                      " OPPORTUNITY"
                  )
                ]),
                _c("feather-icon", {
                  staticClass: "cursor-pointer",
                  attrs: { icon: "XIcon" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.on_close_sidebar($event)
                    }
                  }
                })
              ],
              1
            ),
            _c("vs-divider", { staticClass: "mb-0" }),
            _c(
              "vs-tabs",
              { staticClass: "overflow-y-scroll h-screen" },
              [
                _c("vs-tab", { attrs: { label: "Details" } }, [
                  _c("div", { staticClass: "tab-text mb-10" }, [
                    _c(
                      "form",
                      {
                        attrs: { "data-vv-scope": "opps_form", id: "opps_form" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
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
                              attrs: { label: "Name", name: "name" },
                              model: {
                                value: _vm.opportunity.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.opportunity, "name", $$v)
                                },
                                expression: "opportunity.name"
                              }
                            }),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("opps_form.name"),
                                    expression: "errors.has('opps_form.name')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.errors.first("opps_form.name")) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("span", { staticClass: "vs-input--label" }, [
                              _vm._v("Phase")
                            ]),
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "mr-2 w-full",
                              attrs: {
                                name: "stage",
                                options: _vm.column_select,
                                label: "name",
                                reduce: function(col) {
                                  return col.id
                                },
                                dir: _vm.$vs.rtl ? "rtl" : "ltr"
                              },
                              model: {
                                value: _vm.opportunity.opportunity_stage_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.opportunity,
                                    "opportunity_stage_id",
                                    $$v
                                  )
                                },
                                expression: "opportunity.opportunity_stage_id"
                              }
                            }),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("opps_form.stage"),
                                    expression: "errors.has('opps_form.stage')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.errors.first("opps_form.stage")
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                label: "Estimated Financial Benefit",
                                name: "opportunity-est_financial_benefit"
                              },
                              model: {
                                value: _vm.opportunity.est_financial_benefit,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.opportunity,
                                    "est_financial_benefit",
                                    $$v
                                  )
                                },
                                expression: "opportunity.est_financial_benefit"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                label: "Overall Goal",
                                name: "opportunity-overall_goal"
                              },
                              model: {
                                value: _vm.opportunity.overall_goal,
                                callback: function($$v) {
                                  _vm.$set(_vm.opportunity, "overall_goal", $$v)
                                },
                                expression: "opportunity.overall_goal"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                label: "Process Owner",
                                name: "opportunity-owner"
                              },
                              model: {
                                value: _vm.opportunity.owner,
                                callback: function($$v) {
                                  _vm.$set(_vm.opportunity, "owner", $$v)
                                },
                                expression: "opportunity.owner"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                label: "Applications Impacted",
                                name: "opportunity-applications_impacted"
                              },
                              model: {
                                value: _vm.opportunity.applications_impacted,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.opportunity,
                                    "applications_impacted",
                                    $$v
                                  )
                                },
                                expression: "opportunity.applications_impacted"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "decimal:2",
                                  expression: "'decimal:2'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                label: "Annual Transaction Count",
                                name: "annual_transaction_count",
                                type: "number"
                              },
                              model: {
                                value: _vm.opportunity.annual_transaction_count,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.opportunity,
                                    "annual_transaction_count",
                                    $$v
                                  )
                                },
                                expression:
                                  "opportunity.annual_transaction_count"
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
                                      "opps_form.annual_transaction_count"
                                    ),
                                    expression:
                                      "errors.has('opps_form.annual_transaction_count')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.errors.first(
                                        "opps_form.annual_transaction_count"
                                      )
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "decimal:2",
                                  expression: "'decimal:2'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                label: "Process Time",
                                name: "process_time",
                                type: "number"
                              },
                              model: {
                                value: _vm.opportunity.process_time,
                                callback: function($$v) {
                                  _vm.$set(_vm.opportunity, "process_time", $$v)
                                },
                                expression: "opportunity.process_time"
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
                                      "opps_form.process_time"
                                    ),
                                    expression:
                                      "errors.has('opps_form.process_time')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.errors.first("opps_form.process_time")
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          { staticClass: "m-5" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "decimal:2",
                                  expression: "'decimal:2'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                label: "Saving",
                                name: "pc_saving",
                                type: "number"
                              },
                              model: {
                                value: _vm.opportunity.pc_saving,
                                callback: function($$v) {
                                  _vm.$set(_vm.opportunity, "pc_saving", $$v)
                                },
                                expression: "opportunity.pc_saving"
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
                                      "opps_form.pc_saving"
                                    ),
                                    expression:
                                      "errors.has('opps_form.pc_saving')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.errors.first("opps_form.pc_saving")
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex flex-wrap items-center p-3 xl:p-6 justify-evenly",
                            attrs: { slot: "footer" },
                            slot: "footer"
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mr-6",
                                on: {
                                  click: function($event) {
                                    return _vm.update_client_opportunity(
                                      _vm.opportunity
                                    )
                                  }
                                }
                              },
                              [_vm._v("Submit\n\n\t\t\t\t\t\t\t")]
                            ),
                            _c(
                              "vs-button",
                              {
                                attrs: { type: "border", color: "warning" },
                                on: {
                                  click: function($event) {
                                    _vm.show_sidebar = false
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm.opportunity.id > 0
                              ? _c(
                                  "vs-button",
                                  {
                                    attrs: { type: "border", color: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirm_delete_opportunity(
                                          _vm.opportunity
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ]),
                _vm.opportunity.id > 0
                  ? _c("vs-tab", { attrs: { label: "Documentation" } }, [
                      _c(
                        "div",
                        { staticClass: "tab-text" },
                        [
                          _c(
                            "vs-table",
                            {
                              attrs: { data: _vm.opportunity_documents },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var data = ref.data
                                      return _vm._l(data, function(
                                        tr,
                                        indextr
                                      ) {
                                        return _c(
                                          "vs-tr",
                                          {
                                            key: indextr,
                                            staticClass: "cursor-pointer"
                                          },
                                          [
                                            _c(
                                              "vs-td",
                                              { attrs: { data: tr.name } },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(tr.name) +
                                                    "\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ]
                                            ),
                                            _c("vs-td", [
                                              _c(
                                                "div",
                                                { staticClass: "flex" },
                                                [
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
                                                        staticClass: "ml-2",
                                                        attrs: {
                                                          color: "primary",
                                                          type: "filled",
                                                          "icon-pack":
                                                            "feather",
                                                          icon: "icon-eye",
                                                          size: "small"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.view_opportunity_doc(
                                                              tr
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
                                                        text: "Remove Doc",
                                                        position: "left"
                                                      }
                                                    },
                                                    [
                                                      _c("vs-button", {
                                                        staticClass: "ml-2",
                                                        attrs: {
                                                          color: "warning",
                                                          type: "filled",
                                                          "icon-pack":
                                                            "feather",
                                                          icon: "icon-archive",
                                                          size: "small"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.remove_opportunity_doc(
                                                              tr.id,
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
                                            ])
                                          ],
                                          1
                                        )
                                      })
                                    }
                                  }
                                ],
                                null,
                                false,
                                525410980
                              )
                            },
                            [
                              _c(
                                "template",
                                { slot: "thead" },
                                [
                                  _c("vs-th", { staticClass: "w-4/5" }, [
                                    _vm._v("Name")
                                  ]),
                                  _c("vs-th", [_vm._v("Actions")])
                                ],
                                1
                              )
                            ],
                            2
                          ),
                          _c(
                            "div",
                            { staticClass: "flex flex-wrap items-center my-4" },
                            [
                              !_vm.dataDoc
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "grid upload-img m-2 row w-full"
                                    },
                                    [
                                      _c("input", {
                                        ref: "uploadImgInput",
                                        staticClass: "hidden",
                                        attrs: {
                                          type: "file",
                                          accept: "image/*"
                                        },
                                        on: { change: _vm.update_opps_document }
                                      }),
                                      _c(
                                        "vs-button",
                                        {
                                          staticClass: " place-self-end",
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.uploadImgInput.click()
                                            }
                                          }
                                        },
                                        [_vm._v("Select File")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _c(
                                "div",
                                { staticClass: "grid m-2 row w-full" },
                                [
                                  _vm.dataDoc
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-full px-2 item-center place-self-end"
                                        },
                                        [_vm._v(_vm._s(_vm.dataDoc.name))]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _c(
                                "div",
                                { staticClass: "m-2 row w-full text-center" },
                                [_vm._v("\n\t\t\t\t\t\t\t\tOR\n\t\t\t\t\t\t\t")]
                              ),
                              _c(
                                "div",
                                { staticClass: "m-2 row w-full" },
                                [
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
                                      label: "External Link",
                                      name: "document-link"
                                    },
                                    model: {
                                      value: _vm.document.link,
                                      callback: function($$v) {
                                        _vm.$set(_vm.document, "link", $$v)
                                      },
                                      expression: "document.link"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "div",
                                { staticClass: "m-2 row w-full" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "vs-input--label" },
                                    [_vm._v("Stage")]
                                  ),
                                  _c("v-select", {
                                    staticClass: "mr-2 w-full",
                                    attrs: {
                                      options: _vm.column_select,
                                      label: "name",
                                      reduce: function(col) {
                                        return col.id
                                      },
                                      dir: _vm.$vs.rtl ? "rtl" : "ltr"
                                    },
                                    model: {
                                      value: _vm.document.opportunity_stage_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.document,
                                          "opportunity_stage_id",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "document.opportunity_stage_id"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "div",
                                { staticClass: "m-2 row w-full" },
                                [
                                  _c("vs-textarea", {
                                    staticClass: "w-full",
                                    attrs: { label: "Description" },
                                    model: {
                                      value: _vm.document.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.document, "name", $$v)
                                      },
                                      expression: "document.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "vs-button",
                                {
                                  staticClass: "ml-auto mt-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.add_opportunity_doc()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\tAdd Document\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm.opportunity.id > 0
                  ? _c("vs-tab", { attrs: { label: "Comments" } }, [
                      _c(
                        "div",
                        { staticClass: "tab-text" },
                        [
                          _c(
                            "div",
                            { staticClass: "m-5" },
                            [
                              _c("vs-textarea", {
                                staticClass: "w-full",
                                attrs: { label: "Comment" },
                                model: {
                                  value: _vm.comment,
                                  callback: function($$v) {
                                    _vm.comment = $$v
                                  },
                                  expression: "comment"
                                }
                              })
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: "flex flex-wrap items-center p-6",
                              attrs: { slot: "footer" },
                              slot: "footer"
                            },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mr-6",
                                  attrs: { disabled: _vm.comment.length === 0 },
                                  on: {
                                    click: function($event) {
                                      return _vm.update_opportunity_comment(
                                        _vm.comment
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _c(
                                "vs-button",
                                {
                                  attrs: { type: "border", color: "danger" },
                                  on: {
                                    click: function($event) {
                                      _vm.show_sidebar = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _c(
                            "vs-table",
                            {
                              attrs: { data: _vm.opportunity_comments },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var data = ref.data
                                      return _vm._l(data, function(
                                        tr,
                                        indextr
                                      ) {
                                        return _c(
                                          "vs-tr",
                                          {
                                            key: indextr,
                                            staticClass: "cursor-pointer"
                                          },
                                          [
                                            _c(
                                              "vs-td",
                                              { attrs: { data: tr.comment } },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(tr.comment) +
                                                    "\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ]
                                            ),
                                            _c("vs-td", [
                                              _c(
                                                "div",
                                                { staticClass: "flex" },
                                                [
                                                  _c(
                                                    "vx-tooltip",
                                                    {
                                                      attrs: {
                                                        text: "Remove Doc",
                                                        position: "left"
                                                      }
                                                    },
                                                    [
                                                      _c("vs-button", {
                                                        staticClass: "ml-2",
                                                        attrs: {
                                                          color: "warning",
                                                          type: "filled",
                                                          "icon-pack":
                                                            "feather",
                                                          icon: "icon-archive",
                                                          size: "small"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.remove_opportunity_comment(
                                                              tr.id,
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
                                            ])
                                          ],
                                          1
                                        )
                                      })
                                    }
                                  }
                                ],
                                null,
                                false,
                                3630904400
                              )
                            },
                            [
                              _c(
                                "template",
                                { slot: "thead" },
                                [
                                  _c("vs-th", { staticClass: "w-4/5" }, [
                                    _vm._v("Comment")
                                  ]),
                                  _c("vs-th", [_vm._v("Actions")])
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
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .column-width {\n\tmin-width: 320px;\n\twidth: 320px;\n} */\n\n/* Unfortunately @apply cannot be setup in codesandbox, \nbut you'd use \"@apply border opacity-50 border-blue-500 bg-gray-200\" here */\n.ghost-card[data-v-dd2469aa] {\n  opacity: 0.5;\n}\n[dir] .ghost-card[data-v-dd2469aa] {\n  background: #f7fafc;\n  border: 1px solid #4299e1;\n}\n[dir=ltr] .kanban-col[data-v-dd2469aa]{\n  border-right: 1px solid black;\n  margin-right: 10px;\n}\n[dir=rtl] .kanban-col[data-v-dd2469aa]{\n  border-left: 1px solid black;\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kanban-sidebar[data-v-dd2469aa]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.kanban-sidebar[data-v-dd2469aa]  .vs-sidebar {\n  z-index: 52010;\n  width: 100%;\n  max-width: 30vw;\n  max-height: 100vh;\n  height: 100vh !important;\n}\n[dir] .kanban-sidebar[data-v-dd2469aa]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .kanban-sidebar[data-v-dd2469aa]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.kanban-sidebar[data-v-dd2469aa]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .kanban-sidebar[data-v-dd2469aa]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-dd2469aa] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("43a0a46e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7480f62c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/KanbanCard.vue":
/*!***************************************!*\
  !*** ./src/components/KanbanCard.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanbanCard.vue?vue&type=template&id=12fdb997& */ "./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&");
/* harmony import */ var _KanbanCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KanbanCard.vue?vue&type=script&lang=js& */ "./src/components/KanbanCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KanbanCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('12fdb997')) {
      api.createRecord('12fdb997', component.options)
    } else {
      api.reload('12fdb997', component.options)
    }
    module.hot.accept(/*! ./KanbanCard.vue?vue&type=template&id=12fdb997& */ "./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanbanCard.vue?vue&type=template&id=12fdb997& */ "./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&");
(function () {
      api.rerender('12fdb997', {
        render: _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/KanbanCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/KanbanCard.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/KanbanCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./KanbanCard.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/KanbanCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&":
/*!**********************************************************************!*\
  !*** ./src/components/KanbanCard.vue?vue&type=template&id=12fdb997& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./KanbanCard.vue?vue&type=template&id=12fdb997& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/KanbanCard.vue?vue&type=template&id=12fdb997&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanCard_vue_vue_type_template_id_12fdb997___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/services/OpportunityService.js":
/*!********************************************!*\
  !*** ./src/services/OpportunityService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/axios */ "./src/axios.js");







var OpportunityService = /*#__PURE__*/function () {
  function OpportunityService() {
    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, OpportunityService);

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "opportunity", {
      id: -1,
      name: "",
      short_name: "",
      description: "",
      notes: "",
      status: 1
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "opportunity_pipeline", {
      id: -1,
      date: "",
      title: "",
      type: ""
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "lever_opportunity", {
      opportunity_id: -1,
      lever_value_id: -1,
      employee_id: -1,
      name: "",
      description: "",
      token: ""
    });

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "opportunity_options", [{
      id: 1,
      label: "RPA"
    }, {
      id: 2,
      label: "OCR"
    }, {
      id: 3,
      label: "Machine Learning"
    }, {
      id: 4,
      label: "NLP"
    }, {
      id: 5,
      label: "Cognitive agent"
    }, {
      id: 6,
      label: "Smart workflow"
    }]);

    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "opportunities", [{
      id: 1,
      name: "Robotic Process Automation",
      short_name: "RPA",
      description: "Robotic Process Automation",
      notes: "",
      status: 1
    }, {
      id: 2,
      name: "Outsource/Offshoring",
      short_name: "OCR",
      description: "Outsource/Offshoring",
      notes: "",
      status: 1
    }, {
      id: 3,
      name: "Machine Learning",
      short_name: "Machine Learning",
      description: "Machine Learning",
      notes: "",
      status: 1
    }, {
      id: 4,
      name: "NLP",
      short_name: "NLP",
      description: "NLP",
      notes: "",
      status: 1
    }, {
      id: 5,
      name: "Cognitive agent",
      short_name: "Cognitive agent",
      description: "Cognitive agent",
      notes: "",
      status: 1
    }, {
      id: 6,
      name: "Smart workflow",
      short_name: "Smart workflow",
      description: "Smart workflow",
      notes: "",
      status: 1
    }]);
  }

  Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(OpportunityService, [{
    key: "get_opportunity_labels",
    value: function get_opportunity_labels() {
      var opts = [];
      opts[-1] = "N/A";
      opts[1] = "RPA";
      opts[2] = "OCR";
      opts[3] = "Machine Learning";
      opts[4] = "NLP";
      opts[5] = "Cognitive agent";
      opts[6] = "Smart workflow";
      return opts;
    }
  }, {
    key: "get_levers",
    value: function get_levers() {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/levers");
    }
  }, {
    key: "get_opportunities",
    value: function get_opportunities() {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/opportunities");
    }
  }, {
    key: "get_client_opportunities",
    value: function get_client_opportunities(client_id) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/client/".concat(client_id, "/opportunity-board"));
    }
  }, {
    key: "create_opportunity",
    value: function create_opportunity(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/opportunity", item);
    }
  }, {
    key: "update_opportunity",
    value: function update_opportunity(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].put("/opportunity/".concat(id), item);
    }
  }, {
    key: "delete_opportunity",
    value: function delete_opportunity(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete("/opportunity/".concat(id));
    }
  }, {
    key: "update_client_opportunity",
    value: function update_client_opportunity(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/opportunity/".concat(id), item);
    }
  }, {
    key: "move_client_opportunity",
    value: function move_client_opportunity(id, item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client-opportunity/".concat(id), item);
    }
  }, {
    key: "remove_opportunity_document",
    value: function remove_opportunity_document(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete("/client-opportunity-document/".concat(id));
    }
  }, {
    key: "create_client_opportunity",
    value: function create_client_opportunity(item) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/opportunity", item);
    }
  }, {
    key: "open_oppportunity_file",
    value: function open_oppportunity_file(link_url) {
      var external = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (external) {
        window.open(link_url, "_blank");
      } else {
        var link = "https://qa-api-hnh.enigma-tech.in/api" + '/client-opportunity/public/' + link_url;
        window.open(link, "_blank");
      }
    }
  }, {
    key: "download_oppportunity_report",
    value: function download_oppportunity_report(token) {
      var link = "https://qa-api-hnh.enigma-tech.in/api" + "/client-opportunity/".concat(token, "/kanban");
      window.open(link, "_blank");
    }
  }, {
    key: "save_opportunity_file",
    value: function save_opportunity_file(opportunity_id, document, doc_file) {
      try {
        var formData = new FormData();

        if (doc_file && doc_file !== undefined) {
          formData.append("document_link", doc_file);
          console.log("document file attached!");
        } else {
          formData.append("link", document.link);
        }

        formData.append("name", document.name);
        formData.append('opportunity_stage_id', document.opportunity_stage_id);
        return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client-opportunity/".concat(opportunity_id, "/document"), formData);
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "add_opportunity_comment",
    value: function add_opportunity_comment(opportunity_id, comment) {
      var formData = new FormData();
      formData.append('comment', comment);
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("/client-opportunity/".concat(opportunity_id, "/comment"), formData);
    }
  }, {
    key: "remove_opportunity_comment",
    value: function remove_opportunity_comment(id) {
      return _axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete("/client-opportunity-comment/".concat(id));
    }
  }]);

  return OpportunityService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new OpportunityService());

/***/ }),

/***/ "./src/views/pages/clients/client-view/Kanban.vue":
/*!********************************************************!*\
  !*** ./src/views/pages/clients/client-view/Kanban.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&");
/* harmony import */ var _Kanban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kanban.vue?vue&type=script&lang=js& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&");
/* harmony import */ var _Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Kanban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dd2469aa",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('dd2469aa')) {
      api.createRecord('dd2469aa', component.options)
    } else {
      api.reload('dd2469aa', component.options)
    }
    module.hot.accept(/*! ./Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& */ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&");
(function () {
      api.rerender('dd2469aa', {
        render: _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/views/pages/clients/client-view/Kanban.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=0&id=dd2469aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_0_id_dd2469aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=style&index=1&id=dd2469aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_style_index_1_id_dd2469aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kanban.vue?vue&type=template&id=dd2469aa&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pages/clients/client-view/Kanban.vue?vue&type=template&id=dd2469aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kanban_vue_vue_type_template_id_dd2469aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map