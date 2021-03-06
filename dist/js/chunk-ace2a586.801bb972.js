(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ace2a586"],{"3e7a":function(e,t,s){"use strict";s("bbb3")},"492e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.assessment_ready?e._e():s("div",{staticClass:"vx-row mb-5"},[s("vx-card",{staticClass:"rounded-lg vx-col flex w-full h-34 justify-center text-base font-semibold text-center place-items-center bg-orange-600"},[s("span",{staticClass:"text-white"},[e._v("Waiting for Process Tree and Employee list to be loaded ")]),s("br"),e._v("\n\t\t\tOR "),s("br"),s("span",{staticClass:"text-white"},[e._v("Please ensure Process Tree and Employees have been created. ")])])],1),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{attrs:{title:"Process Timing Assessments"}},[s("template",{slot:"actions"},[s("vs-button",{key:"assessment_create_btn",staticClass:"mr-3",attrs:{color:"primary",type:"filled",disabled:!e.assessment_ready},nativeOn:{click:function(t){return e.on_assessment_view(e.client_id,e.survey_id)}}},[e._v("Create Process Timing Survey")])],1),s("div",{staticClass:"mx-2",attrs:{slot:"no-body"},slot:"no-body"},[s("vs-table",{staticClass:"table-dark-inverted table-auto vs-con-loading__container",attrs:{search:"","max-items":"10",pagination:"",data:e.surveys,stripe:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,a){return s("vs-tr",{key:a,staticClass:"cursor-pointer"},[s("vs-td",{attrs:{data:t.name}},[e._v(e._s(t.name))]),s("vs-td",{attrs:{data:t.description}},[e._v(e._s(t.description))]),s("vs-td",{attrs:{data:t.start_date}},[e._v(e._s(e._f("localdate")(t.start_date)))]),s("vs-td",{attrs:{data:t.end_date}},[e._v(e._s(e._f("localdate")(t.end_date)))]),s("vs-td",{attrs:{data:t.no_of_employees}},[e._v(e._s(t.no_of_employees))]),s("vs-td",{attrs:{data:t.stage}},[e._v(e._s(t.stage))]),s("vs-td",{attrs:{data:t.status}},[0===t.status?s("vs-chip",{attrs:{transparent:"",color:"warning"}},[e._v(e._s(e.status_label(t.status)))]):e._e(),1===t.status?s("vs-chip",{attrs:{transparent:"",color:"primary"}},[e._v(e._s(e.status_label(t.status)))]):e._e(),2===t.status?s("vs-chip",{attrs:{transparent:"",color:"success"}},[e._v(e._s(e.status_label(t.status)))]):e._e()],1),s("vs-td",[s("div",{staticClass:"vx-row"},[s("vx-tooltip",{attrs:{text:"Edit",position:"left"}},[s("vs-button",{attrs:{radius:"",color:"primary",type:"border","icon-pack":"feather",icon:"icon-edit"},nativeOn:{click:function(s){return e.update_survey(e.client_id,t.id,t)}}})],1),s("vx-tooltip",{attrs:{text:"View",position:"left"}},[s("vs-button",{staticClass:"ml-2",attrs:{radius:"",color:"primary",type:"border","icon-pack":"feather",icon:"icon-eye"},on:{click:function(s){return e.on_survey_view(e.client_id,t.id)}}})],1),s("vx-tooltip",{attrs:{text:"Send Survey",position:"left"}},[s("vs-button",{staticClass:"ml-2",attrs:{radius:"",color:"primary",type:"border",icon:"send"},on:{click:function(s){return e.send_survey(t.id)}}})],1)],1)])],1)}))}}])},[e._v("\n\t\t\t\t\t\t>\n\t\t\t\t\t\t"),s("template",{slot:"thead"},[s("vs-th",[e._v("Name")]),s("vs-th",[e._v("Description")]),s("vs-th",[e._v("Start Date")]),s("vs-th",[e._v("End Date")]),s("vs-th",[e._v("Participants")]),s("vs-th",[e._v("Survey Stage")]),s("vs-th",[e._v("Status")]),s("vs-th",[e._v("Action")])],1)],2)],1)],2)],1),s("vs-popup",{staticClass:"vs-con-loading__container survey-create-popup",attrs:{title:"Create Survey",active:e.popupActive,"buttons-hidden":!0},on:{"update:active":function(t){e.popupActive=t}}},[s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row mb-3"},[s("div",{staticClass:"vx-col w-full"},[s("small",{staticClass:"label"},[e._v("Name")]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:2",expression:"'required|min:2'"}],staticClass:"w-full required",attrs:{name:"name"},model:{value:e.survey.name,callback:function(t){e.$set(e.survey,"name",t)},expression:"survey.name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1)]),s("div",{staticClass:"vx-row mb-3"},[s("div",{staticClass:"vx-col w-1/2"},[s("small",{staticClass:"label"},[e._v("FTE Value")]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full required",attrs:{name:"FTE value"},model:{value:e.survey.fte_hours,callback:function(t){e.$set(e.survey,"fte_hours",t)},expression:"survey.fte_hours"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("FTE value"),expression:"errors.has('FTE value')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("FTE value")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("small",{staticClass:"label"},[e._v("Participants")]),s("vs-input-number",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"Paticipants number"},model:{value:e.survey.no_of_employees,callback:function(t){e.$set(e.survey,"no_of_employees",t)},expression:"survey.no_of_employees"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Paticipants number"),expression:"errors.has('Paticipants number')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Paticipants number")))])],1)]),s("div",{staticClass:"vx-row mb-3"},[s("div",{staticClass:"vx-col w-1/2"},[s("small",{staticClass:"label"},[e._v("Start Date")]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{type:"date",name:"start_date"},model:{value:e.survey.start_date,callback:function(t){e.$set(e.survey,"start_date",t)},expression:"survey.start_date"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("start_date"),expression:"errors.has('start_date')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("start_date")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("small",{staticClass:"label"},[e._v("End Date")]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{type:"date",name:"end_date"},model:{value:e.survey.end_date,callback:function(t){e.$set(e.survey,"end_date",t)},expression:"survey.end_date"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("end_date"),expression:"errors.has('end_date')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("end_date")))])],1)]),s("div",{staticClass:"vx-row mb-3"},[s("div",{staticClass:"vx-col w-full"},[s("small",{staticClass:"label"},[e._v("Description")]),s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],attrs:{name:"Survey Description",height:"100px"},model:{value:e.survey.description,callback:function(t){e.$set(e.survey,"description",t)},expression:"survey.description"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Survey Description"),expression:"errors.has('Survey Description')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Survey Description")))])],1)]),s("div",{staticClass:"vx-row mb-3"},[s("div",{staticClass:"vx-col w-full"},[s("vs-checkbox",{attrs:{"false-value":"0","true-value":"1"},model:{value:e.survey.status,callback:function(t){e.$set(e.survey,"status",t)},expression:"survey.status"}},[e._v("Status")])],1)]),s("div",{staticClass:"flex flex-wrap items-center justify-end mt-8"},[s("vs-button",{staticClass:"ml-auto mt-2",on:{click:function(t){return e.save_survey(t)}}},[e._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:function(t){return e.reset_survey(t)}}},[e._v("Reset")])],1)])],1)],1)])},n=[],r=s("c134"),o=s("b2a6"),c=s("b385"),i={name:"SurveyList",data:function(){return{is_ready:!1,popupActive:!1,editActive:!1,edit:null,editProp:{},checkBox1:!1,survey_id:-1,tree_id:-1,selected_survey_index:-1,client_id:-1,surveys:[],process_tree:[],employees:[],assessment_ready_return:!1,survey:{name:"",no_of_employees:0,particpants:1,fte:40,completed_participants:0,description:"",start_date:"",end_date:"",notes:"",status:0},statuses:c["a"].get_statuses(),clinic_id:-1}},components:{},computed:{assessment_ready:function(){return this.assessment_ready_return}},methods:{status_label:function(e){return void 0!==this.statuses[e]?this.statuses[e]:"N/A"},on_survey_view:function(e,t){this.$router.push({path:"/pages/client/".concat(e,"/survey/").concat(t)})},on_assessment_view:function(e,t){this.assessment_ready?this.$router.push({path:"/pages/client/".concat(e,"/assessment/").concat(t)}):this.$vs.notify({title:"Load create survey form",text:"No process tree or Resources created. Please create process tree and employees before starting a survey.",color:"warning",timing:4e3})},save_survey:function(e){var t=this;e.preventDefault();var s=this;this.$vs.loading(),this.$validator.validateAll().then((function(e){e?o["a"].create_assesment(t.client_id,t.survey).then((function(e){var t=e.data;t&&void 0!==t&&(t.success?(s.surveys.push(t.data),s.popupActive=!1):s.$vs.notify({title:"Save survey",text:"Invalid data",color:"warning",timing:4e3}))})).catch((function(e){s.$vs.loading.close(),s.$vs.notify({title:"Save survey",text:"Invalid data",color:"warning",timing:4e3})})):console.log("form validation error")})),s.$vs.loading.close()},reset_survey:function(e){this.survey.name="",this.survey.fte_hours=0,this.survey.particpants="",this.survey.completed_participants="",this.survey.start_date="",this.survey.end_date="",this.survey.description="",this.survey.notes="",this.survey.status=0,this.$validator.reset()},create_survey:function(){this.selected_survey_index=-1,this.survey_id=-1,this.reset_survey(),this.popupActive=!0},myFunction:function(){this.$vs.notify({title:"Send survey Successfully to participants",text:"Please check email",color:"primary",fixed:!0})},send_survey:function(e){console.log(e,"survey id"),this.$vs.loading();var t=this;o["a"].send_survey(e).then((function(e){console.log(e,"survey data"),e.data.success?(t.myFunction(),console.log("data send successfully")):t.$vs.notify({title:"Send survey",text:"Failed to send",color:"warning",timing:4e3}),t.$vs.loading.close()})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Send survey",text:"Failed to send",color:"warning",timing:4e3})}))},update_survey:function(e,t,s){this.$router.push({path:"/pages/client/".concat(e,"/assessment/").concat(t)})},check_assessment_ready:function(){var e=this;this.assessment_ready_return=!1,this.$vs.loading(),console.log("in check ready"),r["a"].check_assessment_ready(this.client_id).then((function(t){var s=t.data;s&&void 0!==s&&(s.success?(console.log(s.data),e.assessment_ready_return=s.data.data||0):e.$vs.notify({title:"Get assessment readiness",text:"No data returned.",color:"warning",timing:4e3})),e.$vs.loading.close()})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Get assessment readiness",text:"No data returned.",color:"warning",timing:4e3})}))},get_client_surveys:function(){var e=this;this.$vs.loading(),o["a"].get_client_surveys(this.client_id).then((function(t){var s=t.data;s&&void 0!==s&&(s.success?e.surveys=s.data||{}:e.$vs.notify({title:"Get client survey",text:"No data returned",color:"warning",timing:4e3})),e.$vs.loading.close()})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Get client survey",text:"No data returned",color:"warning",timing:4e3})}))}},created:function(){this.client_id=this.$route.params.id||-1,this.get_client_surveys(),this.check_assessment_ready()}},u=i,l=(s("3e7a"),s("2877")),v=Object(l["a"])(u,a,n,!1,null,"92709236",null);t["default"]=v.exports},b2a6:function(e,t,s){"use strict";var a=s("d225"),n=s("b0b4"),r=s("bd86"),o=s("bb36"),c=function(){function e(){var t;Object(a["a"])(this,e),Object(r["a"])(this,"survey_process",(t={client_id:0,process_id:0,client_department_id:0,parent_client_process_id:null,level_id:0,status:0,process_lable:"New/Edit process"},Object(r["a"])(t,"parent_client_process_id",0),Object(r["a"])(t,"notes",""),Object(r["a"])(t,"survey_id",0),Object(r["a"])(t,"outputs",""),Object(r["a"])(t,"inputs",""),Object(r["a"])(t,"documentation_link",""),Object(r["a"])(t,"sub_function",""),t)),Object(r["a"])(this,"vas",{id:-1,vsa_process_id:-1,client_employee_id:-1,department_id:-1,sub_department_id:-1,total_fte:0,pc_time_spent:0,process_time_min:0,process_time_max:0,process_time_avg:0,process_freq_id:-1,avg_freq_volume:0,yearly_timings_multiplier:0,unit_of_measure_id:-1,notes:"",status:1}),Object(r["a"])(this,"vas_rework",{id:-1,vas_id:-1,time_min:0,time_max:0,time_avg:0,notes:"",status:status}),Object(r["a"])(this,"timing_survey",{id:-1,name:"",start_date:"",end_date:"",description:"",status:1}),Object(r["a"])(this,"ops_survey",{id:-1,name:"",start_date:"",end_date:"",description:"",status:1}),Object(r["a"])(this,"rework",{id:0,client_assessment_response_id:0,waste_reason:"",max_time_waste:0,min_time_waste:0,avg_time_waste:0})}return Object(n["a"])(e,[{key:"get_survey_departments",value:function(e){return o["a"].get("/client/".concat(e,"/department"))}},{key:"get_survey_employees",value:function(e){return o["a"].post("/process",e)}},{key:"get_client_surveys",value:function(e){return o["a"].get("/client/".concat(e,"/assessment/all"))}},{key:"get_client_ops_surveys",value:function(e){return o["a"].get("/client/".concat(e,"/ops-surveys"))}},{key:"get_survey",value:function(e){return o["a"].post("/process/".concat(e),item)}},{key:"create_survey",value:function(e){return o["a"].post("/process/".concat(id),e)}},{key:"update_survey",value:function(e,t){return o["a"].put("/process/".concat(e),t)}},{key:"delete_survey",value:function(e,t){return o["a"].post("/process/".concat(e),t)}},{key:"get_all_survey_processes",value:function(e){return o["a"].get("/survey/${id}/processes/all")}},{key:"get_process_timing_link",value:function(e){return o["a"].get("/assessment-token/".concat(e,"/-1"))}},{key:"open_xlsx_link",value:function(e){var t="https://api-hnh.enigma-tech.in/api"+e;window.open(t,"_blank")}},{key:"get_survey_processes",value:function(e){return o["a"].get("/assessment/".concat(e,"/selected-processes"))}},{key:"create_survey_process",value:function(e,t){return o["a"].post("/client/".concat(e,"/assessment/process"),t)}},{key:"update_survey_process",value:function(e,t){return o["a"].post("/client/process/".concat(e),t)}},{key:"delete_survey_process",value:function(e){return o["a"].delete("/client/process/".concat(e))}},{key:"create_assesment",value:function(e,t){return o["a"].post("/client/".concat(e,"/assessment"),t)}},{key:"create_survey_participant",value:function(e){return o["a"].post("/employee",e)}},{key:"get_survey_participants",value:function(e){return o["a"].get("/assessment/".concat(e,"/employees"))}},{key:"create_survey_department",value:function(e,t){return o["a"].post("/client/".concat(e,"/department"),t)}},{key:"update_survey_department",value:function(e,t){return o["a"].post("/client/department/".concat(e),t)}},{key:"delete_survey_department",value:function(e){return o["a"].delete("/client/department/".concat(e))}},{key:"create_assessment_survey",value:function(e,t){return o["a"].post("/client/".concat(e,"/assessment"),t)}},{key:"update_assessment",value:function(e,t){return o["a"].post("/client/assessment/".concat(e),t)}},{key:"get_assessment_processes",value:function(e){return o["a"].get("/assessment/".concat(e,"/processes"))}},{key:"create_assessment",value:function(e,t){return o["a"].post("/client/assessment/".concat(e,"/generate"),t)}},{key:"create_send_assessment",value:function(e,t){return o["a"].post("/client/assessment/".concat(e,"/generate-send"),t)}},{key:"get_assessment_survey",value:function(e){return o["a"].get("/client/assessment/".concat(e))}},{key:"get_assessment_process_tree",value:function(e){return o["a"].get("/assessment/".concat(e,"/processes-tree"))}},{key:"save_assessment_process",value:function(e,t){return o["a"].post("/assessment/".concat(e,"/selected-processes"),t)}},{key:"get_employee_timing_result",value:function(e,t,s){return o["a"].post("/assessment/".concat(t,"/employee_timing_result"),s)}},{key:"get_ops_survey_report",value:function(e,t){return o["a"].post("/ops-survey/".concat(e,"/report"),t)}},{key:"get_timing_result",value:function(e){return o["a"].get("/assessment/".concat(e,"/timing_result"))}},{key:"get_employee_timing_report",value:function(e,t,s){return o["a"].get("/assessment/".concat(e,"/").concat(t,"/").concat(s))}},{key:"get_assessment_available_dept_employees",value:function(e){return o["a"].get("/assessment/".concat(e,"/department-employees"))}},{key:"get_assessment_employees",value:function(e){return o["a"].get("/client/assessment/".concat(e,"/employees"))}},{key:"create_assessment_employees",value:function(e,t){return o["a"].post("/assessment/".concat(e,"/employees"),t)}},{key:"delete_assessment_employee",value:function(e){return o["a"].delete("/assessment/employee/".concat(e))}},{key:"update_assessment_employee",value:function(e,t){return o["a"].post("assessment/employee/".concat(e),t)}},{key:"update_assessment_employee_token",value:function(e,t,s){return o["a"].post("assessment/employee/".concat(e,"/").concat(s),t)}},{key:"send_survey",value:function(e){return o["a"].get("/client/assessment/".concat(e,"/send"))}},{key:"resend_to_employee",value:function(e,t){return o["a"].get("/assessment/".concat(e,"/employee/").concat(t))}},{key:"resend_ops_to_employee",value:function(e,t){return o["a"].get("/ops-survey/".concat(e,"/employee/").concat(t,"/send"))}},{key:"send_ops_survey",value:function(e){return o["a"].get("/ops-survey/".concat(e,"/send"))}},{key:"get_assessment_summary",value:function(e){return o["a"].get("/assessment/".concat(e,"/summary"))}},{key:"create_rework",value:function(e,t){return o["a"].post("/response/".concat(e,"/wastage"),t)}},{key:"create_rework_token",value:function(e,t,s){return o["a"].post("/response/".concat(e,"/").concat(s,"/wastage"),t)}},{key:"get_client_ops_survey",value:function(e){return o["a"].get("/ops-survey/".concat(e))}},{key:"create_ops_survey",value:function(e,t){return o["a"].post("/client/".concat(e,"/ops-survey"),t)}},{key:"update_ops_survey",value:function(e,t){return o["a"].post("/ops-survey/".concat(e),t)}},{key:"create_ops_survey_process_employees",value:function(e,t){return o["a"].post("/ops-survey/".concat(e,"/employee-processes"),t)}},{key:"get_survey_process_employees",value:function(e){return o["a"].get("/ops-survey/".concat(e,"/process-employees"))}},{key:"delete_process_employee",value:function(e){return o["a"].delete("/employee-process/".concat(e))}},{key:"get_ops_survey_summary",value:function(e){return o["a"].get("/ops-survey/".concat(e,"/summary"))}},{key:"create_ops_assessment",value:function(e){return o["a"].get("/ops-survey/".concat(e,"/generate"))}},{key:"create_send_ops_assessment",value:function(e){return o["a"].get("ops-survey/".concat(e,"/generate-send"))}},{key:"get_emp_survey_details",value:function(e,t){return o["a"].get("/assessment/".concat(e,"/employee/").concat(t,"/timing-assessment"))}},{key:"get_emp_survey_token_details",value:function(e){return o["a"].get("/employee-assessment/".concat(e))}},{key:"submit_timing_survey_responses",value:function(e,t,s){return o["a"].post("/assessment/".concat(e,"/employee/").concat(t,"/responses"),s)}},{key:"submit_timing_survey_responses_with_token",value:function(e,t){return o["a"].post("/assessment/".concat(e,"/responses-token"),t)}},{key:"get_ops_survey_participants",value:function(e){return o["a"].get("/ops-survey/".concat(e,"/employees"))}},{key:"get_ops_survey_details",value:function(e,t){return o["a"].get("/ops-survey/".concat(e,"/employee/").concat(t))}},{key:"get_ops_survey_token_details",value:function(e){return o["a"].get("ops-survey/".concat(e,"/get-survey"))}},{key:"submit_ops_survey_lever_response",value:function(e,t){return o["a"].post("/ops-survey-lever/".concat(e),t)}},{key:"submit_ops_survey_lever_response_token",value:function(e,t){return o["a"].post("/ops-survey-lever/".concat(e,"/token"),t)}},{key:"create_lever_opportunity",value:function(e){return o["a"].post("/opportunity",e)}},{key:"update_lever_opportunity",value:function(e,t){return o["a"].post("/opportunity/".concat(e),t)}},{key:"remove_lever_opportunity",value:function(e){return o["a"].delete("/opportunity/".concat(e))}},{key:"update_ops_survey_process",value:function(e,t,s){return o["a"].post("/ops-survey/".concat(e,"/process/").concat(t),s)}},{key:"remove_ops_employee_process",value:function(e,t){return o["a"].post("/ops-survey/".concat(e,"/processes-remove"),{client_processes_ids:t})}},{key:"submit_completion",value:function(e,t){return o["a"].get("/ops-survey/".concat(e,"/employee/").concat(t,"/complete"))}},{key:"get_survey_counts",value:function(e,t){return o["a"].get("/client/".concat(e,"/ops-survey/").concat(t,"/completion"))}},{key:"get_vas_data",value:function(e,t){return o["a"].post("/reports/".concat(e,"/vsa"),t)}}]),e}();t["a"]=new c},b385:function(e,t,s){"use strict";var a=s("d225"),n=s("b0b4"),r=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"get_statuses",value:function(){var e=[];return e[0]="Not Started",e[1]="In Progress",e[2]="Completed",e[3]="Stopped",e[4]="Cancelled",e}}]),e}();t["a"]=new r},bbb3:function(e,t,s){},c134:function(e,t,s){"use strict";var a=s("d225"),n=s("b0b4"),r=s("bd86"),o=s("bb36"),c=function(){function e(){Object(a["a"])(this,e),Object(r["a"])(this,"client",{id:-1,name:"",address:"",industry:"",standard_weekly_hours:null,standard_monthly_hours:null,standard_quarterly_hours:null,standard_yearly_hours:null,utilisation_rate:null,phone1:"",status:0,notes:""}),Object(r["a"])(this,"employee",{id:-1,name:"",email:"",verified:0,role:"",status:0,action:0,client_id:0}),Object(r["a"])(this,"client_employee",{id:-1,client_id:-1,last_name:"",phone:"",email:"",function_id:-1,sub_function:"",job_title:"",job_type:1,fte_equivalent:1,weekly_fte_hours:40,status:1}),Object(r["a"])(this,"client_department",{id:-1,client_id:0,department_id:0,department_label:"",sub_function:"",region:"",country:"",location:"",total_fte:40,notes:"",status:1}),Object(r["a"])(this,"client_process",{id:-1,client_id:-1,client_tree_id:0,process_ids:[],parent_process_tree_id:0,frequency_id:0,unit_measure_id:0,average_volume:0,order:1,notes:"",status:1}),Object(r["a"])(this,"client_department_processes",{client_process_ids:[],client_id:-1,department_id:-1,sub_department:"",status:1}),Object(r["a"])(this,"client_process_levers",{process_ids:[],lever_ids:[]})}return Object(n["a"])(e,[{key:"get_survey",value:function(e,t){return o["a"].get("/client/".concat(e,"/survery/").concat(t))}},{key:"create_survey",value:function(e,t){return o["a"].post("clinic/".concat(e,"/survey"),t)}},{key:"update_survey",value:function(e,t){return o["a"].post("/survey/".concat(e),t)}},{key:"delete_survey",value:function(e){return o["a"].delete("/survey/".concat(e))}},{key:"get_clients",value:function(){return o["a"].get("/clients/all")}},{key:"get_client",value:function(e){return o["a"].get("/client/".concat(e))}},{key:"create_client",value:function(e){return o["a"].post("/client",e)}},{key:"update_client",value:function(e,t){return o["a"].post("/client/".concat(e),t)}},{key:"get_client_contact",value:function(e){return o["a"].get("client/".concat(e,"/contacts"))}},{key:"create_client_contact",value:function(e,t){return o["a"].post("/client/".concat(e,"/contact"),t)}},{key:"get_client_departments",value:function(e){return o["a"].get("/client/".concat(e,"/departments"))}},{key:"create_client_department",value:function(e){return o["a"].post("/client-department",e)}},{key:"update_client_department",value:function(e,t){return o["a"].post("/client-department/".concat(e),t)}},{key:"delete_client_department",value:function(e){return o["a"].delete("/client-department/".concat(e))}},{key:"create_client_employee",value:function(e){return o["a"].post("/employee",e)}},{key:"get_client_employees",value:function(e){return o["a"].get("/client/".concat(e,"/employees"))}},{key:"update_employee",value:function(e,t){return o["a"].post("/employee/".concat(e),t)}},{key:"delete_employee",value:function(e){return o["a"].delete("/employee/".concat(e))}},{key:"import_client_employee",value:function(e,t){try{var s=new FormData;return t&&void 0!==t&&(s.append("csv_file",t),console.log("document file found!")),o["a"].post("/client/".concat(e,"/employees/load"),s)}catch(a){return!1}}},{key:"create_client_process_level",value:function(e,t){return o["a"].post("/client_tree/".concat(e,"/process"),t)}},{key:"get_client_processes",value:function(e){return o["a"].get("/client-processes/".concat(e))}},{key:"get_client_process_tree",value:function(e){return o["a"].get("/client/".concat(e,"/process-tree"))}},{key:"create_client_processes",value:function(e,t){return o["a"].post("/client/".concat(e,"/processes"),t)}},{key:"update_client_process",value:function(e,t){return o["a"].post("/client/process/".concat(e),t)}},{key:"delete_client_process",value:function(e){return o["a"].delete("/client-process-tree/".concat(e))}},{key:"move_process_node",value:function(e,t){return o["a"].post("/client/".concat(e,"/process-tree"),t)}},{key:"create_client_department_processes",value:function(e,t){return o["a"].post("/client-department/".concat(e,"/processes"),t)}},{key:"create_client_proces_levers",value:function(e,t){return o["a"].post("/client/".concat(e,"/process-levers"),t)}},{key:"check_assessment_ready",value:function(e){return o["a"].get("/client/".concat(e,"/assessment-ready"))}},{key:"check_ops_survey_ready",value:function(e){return o["a"].get("/client/".concat(e,"/ops-survey-ready"))}},{key:"get_report_ops_summary",value:function(e){return o["a"].get("/reports/".concat(e,"/ops-summary"))}},{key:"get_report_ops_stages",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-by-stage"),t)}},{key:"get_report_ops_level_by_lever",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-by-lever"),t)}},{key:"get_report_ops_priority",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-by-score"),t)}},{key:"get_report_timing_survey_completion_stats",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-by-lever"),t)}},{key:"get_ops_by_process",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-by-process"),t)}},{key:"get_assessment_completion",value:function(e,t){return o["a"].post("/reports/".concat(e,"/assessment-completion"),t)}},{key:"get_report_ops_survey_completion_stats",value:function(e,t){return o["a"].post("/reports/".concat(e,"/ops-survey-completion"),t)}}]),e}();t["a"]=new c}}]);
//# sourceMappingURL=chunk-ace2a586.801bb972.js.map