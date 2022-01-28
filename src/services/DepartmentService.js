import axios from "@/axios";

class DepartmentService {
	departments = [
		{
			id: 1,
			name: "Strategic sourcing",
			description: "Strategic sourcing",
			status: 1,
		},
		{
			id: 2,
			name: "Purchasing",
			description: "Purchasing department",
			status: 1,
		},
		{
			id: 3,
			name: "Accounts Payable",
			description: "Accounts Payable Department",
			status: 1,
		},
		{
			id: 4,
			name: "Operations",
			description: "Operations",
			status: 1,
		},
		{
			id: 5,
			name: "Contract Management",
			description: "",
			status: 1,
		},
	];

	department = {
		id: 0,
		name: "",
		sub_function: "",
		description: "",
		region: "",
		country: "",
		location: "",
		status: 0,
	};

	client_department_processes = {
		process_ids: [],
		department_id: [],
	};

	get_all_departments() {
		return axios.get("/departments/all");
	}

	get_departments() {
		return axios.get("/departments");
	}

	create_department(item) {
		return axios.post("/department", item);
	}

	get_all_client_departments(client_id) {
		return axios.get(`/client/${client_id}/departments`);
	}

	update_department(department_id, item) {
		return axios.post(`/department/${department_id}`, item);
	}

	get_client_department_employees(client_id) {
		return axios.get(`client/${client_id}/department/employees`);
	}

	get_client_sub_functions(client_id) {
		return axios.get(`client/${client_id}/sub_functions`);
	}
}

export default new DepartmentService();
