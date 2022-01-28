import axios from "@/axios";

class AuthService {
	user = {
		id: -1,
		name: "",
		email: "",
		role_id: 2,
		status: 1,
	};

	new_user = {
		id: -1,
		name: "",
		email: "",
		password: "",
		confirm_password: "",
		role_id: 2,
		status: 1,
	};

	user_pass = {
		id: -1,
		current_password: "",
		password: "",
		confirm_password: "",
	};

	ROLE_ADMIN = 1;
	ROLE_CONSULTANT = 2;
	ROLE_ALL = [this.ROLE_ADMIN, this.ROLE_CONSULTANT];

	user_roles = [
		{ id: 1, name: "Admin" },
		{ id: 2, name: "Consultant" },
	];

	get_user_roles() {
		let status = [];
		status[1] = "Admin";
		status[2] = "Consultant";
		return status;
	}

	get_user_status() {
		let status = [];
		status[0] = "Disabled";
		status[1] = "Enabled";
		return status;
	}

	login(payload) {
		return axios.post("/login", payload);
	}

	logout() {
		return axios.get("/logout");
	}

	get_users() {
		return axios.get(`/staff`);
	}

	create_user(item) {
		return axios.post(`/staff`, item);
	}

	update_user(id, item) {
		return axios.post(`/staff/${id}`, item);
	}

	change_password(id, item) {
		return axios.post(`/staff/${id}/password`, item);
	}
}

export default new AuthService();
