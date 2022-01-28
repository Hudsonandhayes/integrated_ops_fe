import axios from "@/axios";

class ClientService {
	client = {
		id: -1,
		name: "",
		address: "",
		industry: "",
		standard_weekly_hours: null,
		standard_monthly_hours: null,
		standard_quarterly_hours: null,
		standard_yearly_hours: null,
		utilisation_rate: null,
		phone1: "",
		status: 0,
		notes: "",
	};

	employee = {
		id: -1,
		name: "",
		email: "",
		verified: 0,
		role: "",
		status: 0,
		action: 0,
		client_id: 0,
	};

	client_employee = {
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
		status: 1,
	};

	client_department = {
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
		status: 1,
	};

	client_process = {
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
		status: 1,
	};

	client_department_processes = {
		client_process_ids: [],
		client_id: -1,
		department_id: -1,
		sub_department: "",
		status: 1,
	};

	client_process_levers = {
		process_ids: [],
		lever_ids: [],
	};

	// get_client_surveys(id) {
	// 	return axios.get(`/client/${id}/surveys`);
	// }

	// get_client_surveys(id) {
	// 	return axios.get(`/survey/${id}`);
	// }

	get_survey(id, survey_id) {
		return axios.get(`/client/${id}/survery/${survey_id}`);
	}

	create_survey(id, item) {
		return axios.post(`clinic/${id}/survey`, item);
	}

	update_survey(id, item) {
		return axios.post(`/survey/${id}`, item);
	}

	delete_survey(id) {
		return axios.delete(`/survey/${id}`);
	}

	get_clients() {
		return axios.get("/clients/all");
	}

	get_client(client_id) {
		return axios.get(`/client/${client_id}`);
	}

	create_client(item) {
		return axios.post("/client", item);
	}

	update_client(client_id, client) {
		return axios.post(`/client/${client_id}`, client);
	}

	get_client_contact(client_id) {
		return axios.get(`client/${client_id}/contacts`);
	}

	create_client_contact(client_id, contact) {
		return axios.post(`/client/${client_id}/contact`, contact);
	}

	get_client_departments(client_id) {
		return axios.get(`/client/${client_id}/departments`);
	}

	create_client_department(department) {
		return axios.post("/client-department", department);
	}

	update_client_department(department_id, department) {
		return axios.post(`/client-department/${department_id}`, department);
	}

	delete_client_department(department_id) {
		return axios.delete(`/client-department/${department_id}`);
	}
	//client-employees api
	create_client_employee(item) {
		return axios.post("/employee", item);
	}

	get_client_employees(id) {
		return axios.get(`/client/${id}/employees`);
	}

	update_employee(id, employee) {
		return axios.post(`/employee/${id}`, employee);
	}

	delete_employee(id) {
		return axios.delete(`/employee/${id}`);
	}

	import_client_employee(client_id, doc_file) {
		try {
			let formData = new FormData();
			if(doc_file && doc_file !== undefined) {
				formData.append('csv_file', doc_file);
				console.log('document file found!');
			}
			return axios.post(`/client/${client_id}/employees/load`, formData);
		} catch (e) {
			return false;
		}

	}
	// //client department api's
	// create_client_department(client_id, department) {
	// 	return axios.post(`/client/${client_id}/department`, department);
	// }
	// get_client_departments(client_id) {
	// 	return axios.get(`/client/${client_id}/department`);
	// }

	create_client_process_level(id, item) {
		return axios.post(`/client_tree/${id}/process`, item);
	}

	// get_client_processes(client_id) {
	// 	return axios.get(`/client/${client_id}/processes/all`);
	// }

	get_client_processes(client_id){
		return axios.get(`/client-processes/${client_id}`);
	}


	get_client_process_tree(client_id) {
		return axios.get(`/client/${client_id}/process-tree`);
	}

	create_client_processes(client_id, item) {
		return axios.post(`/client/${client_id}/processes`, item);
	}

	update_client_process(id, item) {
		return axios.post(`/client/process/${id}`, item);
	}
	delete_client_process(id) {
		return axios.delete(`/client-process-tree/${id}`);
	}

	move_process_node(client_id, node){
		return axios.post(`/client/${client_id}/process-tree`, node)
	}


	create_client_department_processes(department_id, item) {
		return axios.post(
			`/client-department/${department_id}/processes`,
			item
		);
	}

	create_client_proces_levers(client_id, item) {
		return axios.post(`/client/${client_id}/process-levers`, item);
	}


	check_assessment_ready(client_id){
		return axios.get(`/client/${client_id}/assessment-ready`); 
	}

	check_ops_survey_ready(client_id){
		return axios.get(`/client/${client_id}/ops-survey-ready`);
	}

	get_report_ops_summary(client_id){
		return axios.get(`/reports/${client_id}/ops-summary`);
	}

	

	get_report_ops_stages(client_id,filter){
		return axios.post(`/reports/${client_id}/ops-by-stage`,filter);
	}


	get_report_ops_level_by_lever(client_id,filter){
		return axios.post(`/reports/${client_id}/ops-by-lever`,filter);
	}

	get_report_ops_priority(client_id,filter){
		return axios.post(`/reports/${client_id}/ops-by-score`,filter);
	}

	get_report_timing_survey_completion_stats(client_id,filter){
		return axios.post(`/reports/${client_id}/ops-by-lever`,filter);
	}

	get_ops_by_process(client_id,filter){
		return axios.post(`/reports/${client_id}/ops-by-process`,filter);
	}

	get_assessment_completion(client_id, filter){
		return axios.post(`/reports/${client_id}/assessment-completion`, filter);
	}

	get_report_ops_survey_completion_stats(client_id, filter){
		return axios.post(`/reports/${client_id}/ops-survey-completion`, filter);
	}

	

}

export default new ClientService();
