import axios from "@/axios";

class SurveyService {
	survey_process = {
		client_id: 0,
		process_id: 0,
		client_department_id: 0,
		parent_client_process_id: null,
		level_id: 0,
		status: 0,
		process_lable: "New/Edit process",
		parent_client_process_id: 0,
		notes: "",
		survey_id: 0,
		outputs: "",
		inputs: "",
		documentation_link: "",
		sub_function: "",
	};

	vas = {
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
		status: 1,
	};

	vas_rework = {
		id: -1,
		vas_id: -1,
		time_min: 0,
		time_max: 0,
		time_avg: 0,
		notes: "",
		status,
	};

	timing_survey = {
		id: -1,
		name: "",
		start_date: "",
		end_date: "",
		description: "",
		status: 1,
	};

	ops_survey = {
		id: -1,
		name: "",
		start_date: "",
		end_date: "",
		description: "",
		status: 1,
	};

	rework = {
		id: 0,
		client_assessment_response_id: 0,
		waste_reason: "",
		max_time_waste: 0,
		min_time_waste: 0,
		avg_time_waste: 0,
	};

	get_survey_departments() {
		return axios.get("/processes");
	}

	get_survey_employees(item) {
		return axios.post("/process", item);
	}

	get_client_surveys(id) {
		return axios.get(`/client/${id}/assessment/all`);
	}

	get_client_ops_surveys(id) {
		return axios.get(`/client/${id}/ops-surveys`);
	}

	get_survey(id) {
		return axios.post(`/process/${id}`, item);
	}

	create_survey(item) {
		return axios.post(`/process/${id}`, item);
	}

	update_survey(id, item) {
		return axios.put(`/process/${id}`, item);
	}

	delete_survey(id, item) {
		return axios.post(`/process/${id}`, item);
	}

	get_all_survey_processes(id) {
		return axios.get("/survey/${id}/processes/all");
	}

	get_process_timing_link(assessment_id) {
		return axios.get(`/assessment-token/${assessment_id}/-1`);
	}

	open_xlsx_link(link_url) {
		let link = process.env.VUE_APP_BASE_URL + link_url;
		window.open(link, "_blank");
	}

	get_survey_processes(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/selected-processes`);
		//return axios.get(`/client/${client_id}/processes`);
	}

	create_survey_process(id, item) {
		return axios.post(`/client/${id}/assessment/process`, item);
	}

	update_survey_process(id, item) {
		return axios.post(`/client/process/${id}`, item);
	}

	delete_survey_process(id) {
		return axios.delete(`/client/process/${id}`);
	}

	create_assesment(id, item) {
		return axios.post(`/client/${id}/assessment`, item);
	}
	create_survey_participant(item) {
		return axios.post("/employee", item);
	}

	get_survey_participants(id) {
		return axios.get(`/assessment/${id}/employees`);
		// return axios.get(`/client/${id}/assessment/${id}/employees`);
	}
	//assessment department
	create_survey_department(client_id, item) {
		return axios.post(`/client/${client_id}/department`, item);
	}
	get_survey_departments(client_id) {
		return axios.get(`/client/${client_id}/department`);
	}
	update_survey_department(department_id, item) {
		return axios.post(`/client/department/${department_id}`, item);
	}
	delete_survey_department(department_id) {
		return axios.delete(`/client/department/${department_id}`);
	}

	create_assessment_survey(client_id, item) {
		// return axios.post("/survey", item);
		return axios.post(`/client/${client_id}/assessment`, item);
	}
	update_assessment(id, item) {
		return axios.post(`/client/assessment/${id}`, item);
	}
	get_assessment_processes(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/processes`);
	}
	create_assessment(client_assessment_id, item) {
		return axios.post(
			`/client/assessment/${client_assessment_id}/generate`,
			item
		);
	}

	create_send_assessment(client_assessment_id, item) {
		return axios.post(
			`/client/assessment/${client_assessment_id}/generate-send`,
			item
		);
	}

	get_assessment_survey(id) {
		return axios.get(`/client/assessment/${id}`);
	}

	get_assessment_process_tree(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/processes-tree`);
	}

	save_assessment_process(id, obj) {
		return axios.post(`/assessment/${id}/selected-processes`, obj);
	}

	get_employee_timing_result(client_id, assessment_id, filters) {
		return axios.post(
			`/assessment/${assessment_id}/employee_timing_result`,
			filters
		);
	}

	get_ops_survey_report(ops_survey_id, filters) {
		return axios.post(`/ops-survey/${ops_survey_id}/report`, filters);
	}

	get_timing_result(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/timing_result`);
	}

	get_employee_timing_report(assessment_id, dimension, dimension_id) {
		return axios.get(
			`/assessment/${assessment_id}/${dimension}/${dimension_id}`
		);
	}

	get_assessment_available_dept_employees(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/department-employees`);
	}
	get_assessment_employees(assessment_id) {
		return axios.get(`/client/assessment/${assessment_id}/employees`);
	}
	create_assessment_employees(assessment_id, item) {
		return axios.post(`/assessment/${assessment_id}/employees`, item);
	}
	delete_assessment_employee(employee_id) {
		return axios.delete(`/assessment/employee/${employee_id}`);
	}

	update_assessment_employee(employee_id, update) {
		return axios.post(`assessment/employee/${employee_id}`, update);
	}

	update_assessment_employee_token(employee_id, update, token) {
		return axios.post(
			`assessment/employee/${employee_id}/${token}`,
			update
		);
	}

	send_survey(client_assessment_id) {
		return axios.get(`/client/assessment/${client_assessment_id}/send`);
	}
	resend_to_employee(assessment_id, employee_id) {
		return axios.get(
			`/assessment/${assessment_id}/employee/${employee_id}`
		);
	}

	resend_ops_to_employee(ops_survey_id, employee_id) {
		return axios.get(
			`/ops-survey/${ops_survey_id}/employee/${employee_id}/send`
		);
	}

	send_ops_survey(ops_survey_id) {
		return axios.get(`/ops-survey/${ops_survey_id}/send`);
	}

	get_assessment_summary(assessment_id) {
		return axios.get(`/assessment/${assessment_id}/summary`);
	}

	create_rework(response_id, item) {
		return axios.post(`/response/${response_id}/wastage`, item);
	}

	create_rework_token(response_id, item, token) {
		return axios.post(`/response/${response_id}/${token}/wastage`, item);
	}
	//ops survey
	get_client_ops_survey(id) {
		return axios.get(`/ops-survey/${id}`);
	}

	create_ops_survey(client_id, item) {
		return axios.post(`/client/${client_id}/ops-survey`, item);
	}

	update_ops_survey(id, item) {
		return axios.post(`/ops-survey/${id}`, item);
	}

	create_ops_survey_process_employees(id, item) {
		return axios.post(`/ops-survey/${id}/employee-processes`, item);
	}

	get_survey_process_employees(id) {
		return axios.get(`/ops-survey/${id}/process-employees`);
	}

	delete_process_employee(id) {
		return axios.delete(`/employee-process/${id}`);
	}

	get_ops_survey_summary(id) {
		return axios.get(`/ops-survey/${id}/summary`);
	}

	create_ops_assessment(id) {
		return axios.get(`/ops-survey/${id}/generate`);
	}

	create_send_ops_assessment(ops_survey_id) {
		return axios.get(`ops-survey/${ops_survey_id}/generate-send`);
	}
	///ops-survey/{ops_survey_id}/generate-send

	get_emp_survey_details(assessment_id, emp_id) {
		return axios.get(
			`/assessment/${assessment_id}/employee/${emp_id}/timing-assessment`
		);
	}

	get_emp_survey_token_details(token) {
		return axios.get(`/employee-assessment/${token}`);
	}

	submit_timing_survey_responses(assessment_id, emp_id, item) {
		return axios.post(
			`/assessment/${assessment_id}/employee/${emp_id}/responses`,
			item
		);
	}


	submit_timing_survey_responses_with_token(token, item) {
		return axios.post(`/assessment/${token}/responses-token`, item);
	}

	get_ops_survey_participants(id) {
		return axios.get(`/ops-survey/${id}/employees`);
	}

	get_ops_survey_details(id, emp_id) {
		return axios.get(`/ops-survey/${id}/employee/${emp_id}`);
	}

	get_ops_survey_token_details(token) {
		return axios.get(`ops-survey/${token}/get-survey`);
	}

	submit_ops_survey_lever_response(lever_response_id, item) {
		return axios.post(`/ops-survey-lever/${lever_response_id}`, item);
	}

	submit_ops_survey_lever_response_token(lever_response_id, item) {
		return axios.post(`/ops-survey-lever/${lever_response_id}/token`, item);
	}

	create_lever_opportunity(item) {
		return axios.post(`/opportunity`, item);
	}

	update_lever_opportunity(id, item) {
		return axios.post(`/opportunity/${id}`, item);
	}

	remove_lever_opportunity(id) {
		return axios.delete(`/opportunity/${id}`);
	}

	update_ops_survey_process(survey_id, process_id, item) {
		return axios.post(
			`/ops-survey/${survey_id}/process/${process_id}`,
			item
		);
	}

	remove_ops_employee_process(survey_id, client_process_ids) {
		// let formData = new FormData();
		// formData.append("client_process_ids", client_process_ids);
		return axios.post(`/ops-survey/${survey_id}/processes-remove`, {
			client_processes_ids: client_process_ids,
		});
	}

	submit_completion(ops_survey_id, client_employee_id){
		return axios.get(`/ops-survey/${ops_survey_id}/employee/${client_employee_id}/complete`);
	}

	get_survey_counts(client_id, ops_survey_id){
		return axios.get(`/client/${client_id}/ops-survey/${ops_survey_id}/completion`);
	}
	
	get_vas_data(client_id, filter_obj){
		return axios.post(`/reports/${client_id}/vsa`, filter_obj);
	}

	
}

export default new SurveyService();
